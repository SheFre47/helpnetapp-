import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('helpnet');
    const collection = db.collection('requests');

    const data = await collection.find({}).toArray();
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error fetching help requests:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch help requests' });
  }
}
