// src/pages/api/get-help-requests.js
import dbConnect from '@/lib/dbConnect';
import HelpRequest from '@/models/HelpRequest';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const requests = await HelpRequest.find({});
      res.status(200).json({ success: true, data: requests });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
