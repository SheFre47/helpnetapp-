// src/pages/api/getHelpRequests.js
import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('HelpNet'); // Use your database name
    const requests = await db.collection('HelpRequests').find({}).toArray();

    res.status(200).json({ success: true, data: requests });
  } catch (error) {
    console.error('Error fetching help requests:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch help requests.' });
  }
      }
