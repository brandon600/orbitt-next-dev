// pages/api/data.js
export default async function handler(req, res) {
    try {
      // Fetch your data here from the database or external source
      const data = await fetchDataFromDatabase();
  
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }