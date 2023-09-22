const mongoose = require('mongoose');

const User = mongoose.model('users');
const Customer = mongoose.model('customers');
const Visit = mongoose.model('visits');
const BlastMessage = mongoose.model('blastmessages');

module.exports = (app) => {
    app.get('/api/dashboard', async (req, res) => {
        const { timeFilter } = req.query;
        let dateFilter = {};

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
            const userId = '1680735892067';  // Retrieve this from JWT/session as needed
    
            // Apply the dateFilter to your queries as needed
            const totalCustomers = await Customer.countDocuments({ ...dateFilter, user: userId });
            const totalVisits = await Visit.countDocuments({ ...dateFilter, user: userId });
            const rewardsRedeemed = await Visit.countDocuments({ ...dateFilter, visitType: 'Reward', user: userId });
            
            const totalStarsCursor = await Customer.aggregate([
                { $match: { ...dateFilter, user: userId } },
                { $group: { _id: null, totalStars: { $sum: "$starsEarned" } } }
            ]);
            
            const totalPointsGiven = totalStarsCursor[0]?.totalStars || 0;
            const smsBlastsSent = await BlastMessage.countDocuments({ ...dateFilter, user: userId });  // Assuming you have an SMSBlast model/schema

            res.json({
                totalCustomers,
                totalVisits,
                rewardsRedeemed,
                totalPointsGiven,
                smsBlastsSent
            });
    
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
            res.status(500).send({ message: 'Internal Server Error' });
        }
    });
}