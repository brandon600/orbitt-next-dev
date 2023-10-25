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


        try {
            let response = {};
            if (timeFilter === 'lastWeek' || timeFilter === 'last2Weeks') {
                const visitsInWeekCursor = await Model.aggregate([
                    { $match: { ...dateFilter, user: userIdString } },
                    {
                        $addFields: {
                            convertedDate: {
                                $toDate: {
                                    $toDouble: "$date"
                                }
                            }
                        }
                    },
                    {
                        $group: {
                            _id: {
                                year: { $year: "$convertedDate" },
                                month: { $month: "$convertedDate" },
                                day: { $dayOfMonth: "$convertedDate" }
                            },
                            count: { $sum: 1 }
                        }
                    },
                    {
                        $sort: {
                            '_id.year': 1, '_id.month': 1, '_id.day': 1
                        }
                    }
                ]);
                
                const dailyVisits = visitsInWeekCursor.map(entry => ({
                    year: entry._id.year,
                    month: entry._id.month,
                    day: entry._id.day,
                    count: entry.count
                }));
    
                // Step 2: Initialize an array of the past 7 days
                const daysToConsider = timeFilter === 'last2Weeks' ? 14 : 7;
                const pastDays = Array.from({ length: daysToConsider }).map((_, i) => {
                    const d = new Date(Date.now() - i * 24 * 60 * 60 * 1000);
                    return {
                        year: d.getFullYear(),
                        month: d.getMonth() + 1,
                        day: d.getDate(),
                        count: 0  // default value
                    };
                });

    
                // Step 3: Fill in the gaps
                pastDays.forEach(day => {
                    const matchingVisit = dailyVisits.find(
                        visit => visit.year === day.year && visit.month === day.month && visit.day === day.day
                    );
                    if (matchingVisit) {
                        day.count = matchingVisit.count;
                    }
                });
    
                response.dailyVisits = pastDays.reverse();  // As we initialized from today to 7 days ago, we reverse to get in chronological order
            }  else if (timeFilter === 'lastMonth') {
                const visitsInMonthCursor = await Model.aggregate([
                    { $match: { ...dateFilter, user: userIdString } },
                    {
                        $addFields: {
                            convertedDate: {
                                $toDate: {
                                    $toDouble: "$date"
                                }
                            }
                        }
                    },
                    {
                        $group: {
                            _id: {
                                year: { $year: "$convertedDate" },
                                week: { $week: "$convertedDate" }
                            },
                            count: { $sum: 1 }
                        }
                    },
                    {
                        $sort: {
                            '_id.year': 1, '_id.week': 1
                        }
                    }
                ]);
                
                const weeklyVisits = visitsInMonthCursor.map(entry => ({
                    year: entry._id.year,
                    week: entry._id.week,
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
                        count: 0 // default value
                    };
                });
            
                // Step 2: Fill in the gaps
                pastWeeks.forEach(week => {
                    const matchingVisit = weeklyVisits.find(
                        visit => visit.year === week.year && visit.week === week.week
                    );
                    if (matchingVisit) {
                        week.count = matchingVisit.count;
                    }
                });
            
                response.weeklyVisits = pastWeeks.reverse();

            } else if (timeFilter === 'last3Months') {
                const visitsInMonthsCursor = await Model.aggregate([
                    { $match: { ...dateFilter, user: userIdString } },
                    {
                        $addFields: {
                            convertedDate: {
                                $toDate: {
                                    $toDouble: "$date"
                                }
                            }
                        }
                    },
                    {
                        $group: {
                            _id: {
                                year: { $year: "$convertedDate" },
                                month: { $month: "$convertedDate" }
                            },
                            count: { $sum: 1 }
                        }
                    },
                    {
                        $sort: {
                            '_id.year': 1, '_id.month': 1
                        }
                    }
                ]);
                
                const monthlyVisits = visitsInMonthsCursor.map(entry => ({
                    year: entry._id.year,
                    month: entry._id.month,
                    count: entry.count
                }));
            
                const monthsToConsider = 3;
                const pastMonths = Array.from({ length: monthsToConsider }).map((_, i) => {
                    const d = new Date();
                    d.setMonth(d.getMonth() - i);
                    return {
                        year: d.getFullYear(),
                        month: d.getMonth() + 1,  // JS months are 0-based
                        count: 0  // default value
                    };
                });
            
                // Step 2: Fill in the gaps
                pastMonths.forEach(month => {
                    const matchingVisit = monthlyVisits.find(
                        visit => visit.year === month.year && visit.month === month.month
                    );
                    if (matchingVisit) {
                        month.count = matchingVisit.count;
                    }
                });
            
                response.monthlyVisits = pastMonths.reverse();
            } else if (timeFilter === 'last6Months') {
                const visitsInMonthsCursor = await Model.aggregate([
                    { $match: { ...dateFilter, user: userIdString } },
                    {
                        $addFields: {
                            convertedDate: {
                                $toDate: {
                                    $toDouble: "$date"
                                }
                            }
                        }
                    },
                    {
                        $group: {
                            _id: {
                                year: { $year: "$convertedDate" },
                                month: { $month: "$convertedDate" }
                            },
                            count: { $sum: 1 }
                        }
                    },
                    {
                        $sort: {
                            '_id.year': 1, '_id.month': 1
                        }
                    }
                ]);
                
                const monthlyVisits = visitsInMonthsCursor.map(entry => ({
                    year: entry._id.year,
                    month: entry._id.month,
                    count: entry.count
                }));
            
                const monthsToConsider = 6;
                const pastMonths = Array.from({ length: monthsToConsider }).map((_, i) => {
                    const d = new Date();
                    d.setMonth(d.getMonth() - i);
                    return {
                        year: d.getFullYear(),
                        month: d.getMonth() + 1,  // JS months are 0-based
                        count: 0  // default value
                    };
                });
            
                // Step 2: Fill in the gaps
                pastMonths.forEach(month => {
                    const matchingVisit = monthlyVisits.find(
                        visit => visit.year === month.year && visit.month === month.month
                    );
                    if (matchingVisit) {
                        month.count = matchingVisit.count;
                    }
                });
            
                response.monthlyVisits = pastMonths.reverse();
            } else if (timeFilter === 'lastYear' || timeFilter === 'allTime') {
                const dateFilter2 = { date: { $gte: (Date.now() - 365 * 24 * 60 * 60 * 1000).toString() } };
                const visitsInMonthsCursor = await Model.aggregate([
                    { $match: { ...dateFilter2, user: userIdString } },
                    {
                        $addFields: {
                            convertedDate: {
                                $toDate: {
                                    $toDouble: "$date"
                                }
                            }
                        }
                    },
                    {
                        $group: {
                            _id: {
                                year: { $year: "$convertedDate" },
                                month: { $month: "$convertedDate" }
                            },
                            count: { $sum: 1 }
                        }
                    },
                    {
                        $sort: {
                            '_id.year': 1, '_id.month': 1
                        }
                    }
                ]);
                
                const monthlyVisits = visitsInMonthsCursor.map(entry => ({
                    year: entry._id.year,
                    month: entry._id.month,
                    count: entry.count
                }));
            
                const monthsToConsider = 12;
                const pastMonths = Array.from({ length: monthsToConsider }).map((_, i) => {
                    const d = new Date();
                    d.setMonth(d.getMonth() - i);
                    return {
                        year: d.getFullYear(),
                        month: d.getMonth() + 1,  // JS months are 0-based
                        count: 0  // default value
                    };
                });
            
                // Step 2: Fill in the gaps
                pastMonths.forEach(month => {
                    const matchingVisit = monthlyVisits.find(
                        visit => visit.year === month.year && visit.month === month.month
                    );
                    if (matchingVisit) {
                        month.count = matchingVisit.count;
                    }
                });
            
                response.monthlyVisits = pastMonths.reverse();
            }

            
    
            // This part is common for all time filters
            const totalCustomers = await Customer.countDocuments({ ...dateFilter, user: userIdString });
            const totalVisits = await Visit.countDocuments({ ...dateFilter, user: userIdString });
            const rewardsRedeemed = await Visit.countDocuments({ ...dateFilter, visitType: 'Reward', user: userIdString });
            
            const totalStarsCursor = await Customer.aggregate([
                { $match: { ...dateFilter, user: userIdString } },
                { $group: { _id: null, totalStars: { $sum: "$starsEarned" } } }
            ]);
            
            const totalPointsGiven = totalStarsCursor[0]?.totalStars || 0;
            const smsBlastsSent = await BlastMessage.countDocuments({ ...dateFilter, user: userIdString });
    
            // Merge the results into the response object
            response = {
                ...response,
                totalCustomers,
                totalVisits,
                rewardsRedeemed,
                totalPointsGiven,
                smsBlastsSent
            };
    
            res.json(response);
    
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
            res.status(500).send({ message: 'Internal Server Error' });
        }
    });
}