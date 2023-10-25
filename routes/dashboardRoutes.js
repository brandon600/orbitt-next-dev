const mongoose = require('mongoose');

const User = mongoose.model('users');
const Customer = mongoose.model('customers');
const Visit = mongoose.model('visits');
const BlastMessage = mongoose.model('blastmessages');


const modelsMapping = {
    'Transactions': Visit,     
    'Customers': Customer,
    'Sign-Ups': Customer,               
    'Rewards Redeemed': Visit,     
    'Total Points Given': Visit,
    'Surveys Completed': Visit,     
  };
  

module.exports = (app) => {
    app.get('/api/dashboard', async (req, res) => {
        const { timeFilter, userId, activeOption } = req.query;
        let dateFilter = {};

        if (!userId) {
            return res.status(400).send({ message: 'Bad Request: Missing required fields.' });
        }

        const userIdString = userId.toString();



        console.log('Active Option:', activeOption);
        const Model = modelsMapping[activeOption];
        console.log('Model:', Model);

      
        if (!Model) {
        console.error('Model not found for activeOption:', activeOption);
   //     return res.status(400).json({ error: 'Invalid activeOption' });
        } else {
            console.log('Model found for activeOption:', activeOption);
        }


        switch(timeFilter) {
            case 'lastWeek':
                dateFilter = { date: { $gte: (Date.now() - 7 * 24 * 60 * 60 * 1000).toString() } };
                break;
            case 'last2Weeks':
                dateFilter = { date: { $gte: (Date.now() - 14 * 24 * 60 * 60 * 1000).toString() } };
                break;
            case 'lastMonth':
                dateFilter = { date: { $gte: (Date.now() - 30 * 24 * 60 * 60 * 1000).toString() } };
                break;
            case 'last3Months':
                dateFilter = { date: { $gte: (Date.now() - 90 * 24 * 60 * 60 * 1000).toString() } };
                break;
            case 'last6Months':
                dateFilter = { date: { $gte: (Date.now() - 180 * 24 * 60 * 60 * 1000).toString() } };
                break;
            case 'lastYear':
                dateFilter = { date: { $gte: (Date.now() - 365 * 24 * 60 * 60 * 1000).toString() } };
                break;
            default:
                // This is for the "allTime" case where you won't need any date filter.
                dateFilter = {};
                break;
        }

        let additionalMatchCriteria = {};
        let projectFields = {};

        if (activeOption === 'Total Points Given') {
            additionalMatchCriteria = { visitType: { $in: ['New User', 'Purchase'] } };
            projectFields = {
                totalRewards: { $ifNull: ["$currentRewardsEarned", 0] },
                convertedDate: { $toDate: { $toLong: "$date" } }
            };
        } else if (activeOption === 'Rewards Redeemed') {
            additionalMatchCriteria = { visitType: 'Reward' };
            projectFields = {
                totalRewards: 0,
                convertedDate: { $toDate: { $toLong: "$date" } }
            };
        } else {
            projectFields = {
                totalRewards: 0, // We don't care about rewards when counting transactions
                convertedDate: { $toDate: { $toLong: "$date" } }
            };
        }

        const matchQuery = { user: userIdString, ...dateFilter, ...additionalMatchCriteria };
        let response = {};

        try {
            const daysToConsider = timeFilter === 'last2Weeks' ? 14 : 7;
            const aggregationPipeline = [
                { $match: matchQuery },
                { $addFields: projectFields },
                {
                    $group: {
                        _id: {
                            year: { $year: "$convertedDate" },
                            month: { $month: "$convertedDate" },
                            day: { $dayOfMonth: "$convertedDate" }
                        },
                        totalRewards: { $sum: "$totalRewards" },
                        count: { $sum: 1 }
                    }
                },
                { $sort: { '_id.year': 1, '_id.month': 1, '_id.day': 1 } }
            ];          

            if (timeFilter === 'lastWeek' || timeFilter === 'last2Weeks') {
                const results = await Model.aggregate(aggregationPipeline).exec();
        
                // Initialize an array of the past 7 or 14 days with default values
                const pastDays = Array.from({ length: daysToConsider }).map((_, i) => {
                    const d = new Date();
                    d.setDate(d.getDate() - i);
                    return {
                        year: d.getFullYear(),
                        month: d.getMonth() + 1,
                        day: d.getDate(),
                        totalRewards: 0,
                        count: 0
                    };
                });
        
                // If the active option is 'Total Points Given', accumulate totalRewards. If it is 'Transactions', count the transactions.
                results.forEach(entry => {
                    const matchingDay = pastDays.find(
                        day => day.year === entry._id.year && day.month === entry._id.month && day.day === entry._id.day
                    );
                    if (matchingDay) {
                        matchingDay.totalRewards += entry.totalRewards;
                        matchingDay.count += entry.count;
                    }
                });
        
                // Depending on activeOption, set the response
                if (activeOption === 'Total Points Given') {
                    response.dailyVisits = pastDays.map(day => ({ ...day, value: day.totalRewards })).reverse();
                } else if (activeOption === 'Rewards Redeemed') {
                    response.dailyVisits = pastDays.map(day => ({ ...day, value: day.count })).reverse();
                } else {
                    response.dailyVisits = pastDays.map(day => ({ ...day, value: day.count })).reverse();
                }
            } else if (timeFilter === 'lastMonth') {
                const aggregationPipeline = [
                    { $match: { ...dateFilter, user: userIdString, ...additionalMatchCriteria } },
                    { $addFields: projectFields },
                    {
                        $group: {
                            _id: {
                                year: { $year: "$convertedDate" },
                                week: { $week: "$convertedDate" }
                            },
                            totalRewards: { $sum: "$totalRewards" },
                            count: { $sum: 1 }
                        }
                    },
                    { $sort: { '_id.year': 1, '_id.week': 1 } }
                ];
            
                const results = await Model.aggregate(aggregationPipeline).exec();
                const weeklyVisits = results.map(entry => ({
                    year: entry._id.year,
                    week: entry._id.week,
                    totalRewards: entry.totalRewards,
                    count: entry.count
                }));
            
                const weeksToConsider = 4;
                const pastWeeks = Array.from({ length: weeksToConsider }).map((_, i) => {
                    const d = new Date(Date.now() - i * 7 * 24 * 60 * 60 * 1000);
                    const year = d.getFullYear();
            
                    // Calculate week number
                    const start = new Date(year, 0, 1);
                    const diff = d - start + (start.getTimezoneOffset() - d.getTimezoneOffset()) * 60 * 1000;
                    const oneDay = 1000 * 60 * 60 * 24;
                    const week = Math.floor(diff / oneDay / 7) + 1;
            
                    return {
                        year: year,
                        week: week,
                        totalRewards: 0,
                        count: 0
                    };
                });
            
                pastWeeks.forEach(week => {
                    const matchingVisit = weeklyVisits.find(
                        visit => visit.year === week.year && visit.week === week.week
                    );
                    if (matchingVisit) {
                        week.totalRewards = matchingVisit.totalRewards;
                        week.count = matchingVisit.count;
                    }
                });
            
                if (activeOption === 'Total Points Given') {
                    response.weeklyVisits = pastWeeks.map(week => ({ ...week, value: week.totalRewards })).reverse();
                } else if (activeOption === 'Rewards Redeemed') {
                    response.weeklyVisits = pastWeeks.map(week => ({ ...week, value: week.count })).reverse();
                } else { // Assuming 'Transactions' or any other option
                    response.weeklyVisits = pastWeeks.map(week => ({ ...week, value: week.count })).reverse();
                }

            } else if (timeFilter === 'last3Months') {
                const aggregationPipeline = [
                    { $match: { ...dateFilter, user: userIdString, ...additionalMatchCriteria } },
                    { $addFields: projectFields },
                    {
                        $group: {
                            _id: {
                                year: { $year: "$convertedDate" },
                                month: { $month: "$convertedDate" }
                            },
                            totalRewards: { $sum: "$totalRewards" },
                            count: { $sum: 1 }
                        }
                    },
                    { $sort: { '_id.year': 1, '_id.month': 1 } }
                ];
            
                const results = await Model.aggregate(aggregationPipeline).exec();
                const monthlyVisits = results.map(entry => ({
                    year: entry._id.year,
                    month: entry._id.month,
                    totalRewards: entry.totalRewards,
                    count: entry.count
                }));
            
                const monthsToConsider = 3;
                const pastMonths = Array.from({ length: monthsToConsider }).map((_, i) => {
                    const d = new Date();
                    d.setMonth(d.getMonth() - i);
                    return {
                        year: d.getFullYear(),
                        month: d.getMonth() + 1,  // JS months are 0-based
                        totalRewards: 0,
                        count: 0
                    };
                });
            
                pastMonths.forEach(month => {
                    const matchingVisit = monthlyVisits.find(
                        visit => visit.year === month.year && visit.month === month.month
                    );
                    if (matchingVisit) {
                        month.totalRewards = matchingVisit.totalRewards;
                        month.count = matchingVisit.count;
                    }
                });
            
                if (activeOption === 'Total Points Given') {
                    response.monthlyVisits = pastMonths.map(month => ({ ...month, value: month.totalRewards })).reverse();
                } else if (activeOption === 'Rewards Redeemed') {
                    response.monthlyVisits = pastMonths.map(month => ({ ...month, value: month.count })).reverse();
                } else { // Assuming 'Transactions' or any other option
                    response.monthlyVisits = pastMonths.map(month => ({ ...month, value: month.count })).reverse();
                }
            } else if (timeFilter === 'last6Months') {
                const aggregationPipeline = [
                    { $match: { user: userIdString, ...dateFilter, ...additionalMatchCriteria } },
                    { $addFields: projectFields },
                    {
                        $group: {
                            _id: {
                                year: { $year: "$convertedDate" },
                                month: { $month: "$convertedDate" }
                            },
                            totalRewards: { $sum: "$totalRewards" },
                            count: { $sum: 1 }
                        }
                    },
                    { $sort: { '_id.year': 1, '_id.month': 1 } }
                ];
            
                const results = await Model.aggregate(aggregationPipeline).exec();
                const monthlyVisits = results.map(entry => ({
                    year: entry._id.year,
                    month: entry._id.month,
                    totalRewards: entry.totalRewards,
                    count: entry.count
                }));
            
                const monthsToConsider = 6;
                const pastMonths = Array.from({ length: monthsToConsider }).map((_, i) => {
                    const d = new Date();
                    d.setMonth(d.getMonth() - i);
                    return {
                        year: d.getFullYear(),
                        month: d.getMonth() + 1,  // JS months are 0-based
                        totalRewards: 0,
                        count: 0
                    };
                });
            
                pastMonths.forEach(month => {
                    const matchingVisit = monthlyVisits.find(
                        visit => visit.year === month.year && visit.month === month.month
                    );
                    if (matchingVisit) {
                        month.totalRewards = matchingVisit.totalRewards;
                        month.count = matchingVisit.count;
                    }
                });
            
                if (activeOption === 'Total Points Given') {
                    response.monthlyVisits = pastMonths.map(month => ({ ...month, value: month.totalRewards })).reverse();
                } else if (activeOption === 'Rewards Redeemed') {
                    response.monthlyVisits = pastMonths.map(month => ({ ...month, value: month.count })).reverse();
                } else { // Assuming 'Transactions' or any other option
                    response.monthlyVisits = pastMonths.map(month => ({ ...month, value: month.count })).reverse();
                }
            } else if (timeFilter === 'lastYear' || timeFilter === 'allTime') {

                dateFilter2 = { date: { $gte: (Date.now() - 365 * 24 * 60 * 60 * 1000).toString() } };



                /*

                Code for if we want to truly show the all time calendar on the graph. Sticking with showing just the
                last 12 months on both allTime and lastYear for now.
                let dateFilter2 = {};
            
                if (timeFilter === 'lastYear') {
                    dateFilter2 = { date: { $gte: (Date.now() - 365 * 24 * 60 * 60 * 1000).toString() } };
                }
            
                if (activeOption === 'Rewards Redeemed') {
                    additionalMatchCriteriaLastYearAllTime = { visitType: 'Reward' };
                }

                */
            
                const aggregationPipeline = [
                    { $match: { ...dateFilter2, user: userIdString, ...additionalMatchCriteria } },
                    { $addFields: projectFields },
                    {
                        $group: {
                            _id: {
                                year: { $year: "$convertedDate" },
                                month: { $month: "$convertedDate" }
                            },
                            totalRewards: { $sum: "$totalRewards" },
                            count: { $sum: 1 }
                        }
                    },
                    { $sort: { '_id.year': 1, '_id.month': 1 } }
                ];
            
                const results = await Model.aggregate(aggregationPipeline).exec();
                const monthlyVisits = results.map(entry => ({
                    year: entry._id.year,
                    month: entry._id.month,
                    totalRewards: entry.totalRewards,
                    count: entry.count
                }));
            
        //        const monthsToConsider = timeFilter === 'lastYear' ? 12 : new Date().getFullYear() * 12 + new Date().getMonth() + 1;
                const monthsToConsider = 12
                const pastMonths = Array.from({ length: monthsToConsider }).map((_, i) => {
                    const d = new Date();
                    d.setMonth(d.getMonth() - i);
                    return {
                        year: d.getFullYear(),
                        month: d.getMonth() + 1,  // JS months are 0-based
                        totalRewards: 0,
                        count: 0
                    };
                });
            
                pastMonths.forEach(month => {
                    const matchingVisit = monthlyVisits.find(
                        visit => visit.year === month.year && visit.month === month.month
                    );
                    if (matchingVisit) {
                        month.totalRewards = matchingVisit.totalRewards;
                        month.count = matchingVisit.count;
                    }
                });
            
                if (activeOption === 'Total Points Given') {
                    response.monthlyVisits = pastMonths.map(month => ({ ...month, value: month.totalRewards })).reverse();
                } else if (activeOption === 'Rewards Redeemed') {
                    response.monthlyVisits = pastMonths.map(month => ({ ...month, value: month.count })).reverse();
                } else { // Assuming 'Transactions' or any other option
                    response.monthlyVisits = pastMonths.map(month => ({ ...month, value: month.count })).reverse();
                }
            }

            
            // This part is common for all time filters
            const totalCustomers = await Customer.countDocuments({ ...dateFilter, user: userIdString });
            const totalVisits = await Visit.countDocuments({ ...dateFilter, user: userIdString });
            const rewardsRedeemed = await Visit.countDocuments({ ...dateFilter, visitType: 'Reward', user: userIdString });
            const smsBlastsSent = await BlastMessage.countDocuments({ ...dateFilter, user: userIdString });
            const totalPointsValue = await Visit.aggregate([
                {
                  $match: {
                    ...dateFilter,
                    user: userIdString,
                    visitType: { $in: ['New User', 'Purchase'] }
                  }
                },
                {
                  $group: {
                    _id: null,
                    totalPointsValue: { $sum: "$currentRewardsEarned" }
                  }
                }
              ]);

              const totalPoints = totalPointsValue[0] ? totalPointsValue[0].totalPointsValue : 0;
    
            // Merge the results into the response object
            response = {
                ...response,
                totalCustomers,
                totalVisits,
                totalPoints,
                rewardsRedeemed,
                smsBlastsSent
            };
    
            res.json(response);
    
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
            res.status(500).send({ message: 'Internal Server Error' });
        }
    });
}