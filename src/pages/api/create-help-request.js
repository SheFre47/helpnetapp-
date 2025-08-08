import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, description, location } = req.body;

  if (!name || !description || !location || !location.lat || !location.lng) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  try {
    const client = await clientPromise;
    const db = client.db('helpnet');
    const collection = db.collection('requests');

    const newRequest = {
      name,
      description,
      location,
      createdAt: new Date(),
    };

    await collection.insertOne(newRequest);

    res.status(201).json({ success: true, message: 'Help request created' });
  } catch (error) {
    console.error('Error creating help request:', error);
    res.status(500).json({ success: false, message: 'Failed to create help request' });
  }
}
