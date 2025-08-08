// src/pages/api/get-help-requests.js

import dbConnect from '../../lib/mongodb';
import HelpRequest from '../../models/HelpRequest';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    await dbConnect();
    const helpRequests = await HelpRequest.find({});
    return res.status(200).json({ success: true, data: helpRequests });
  } catch (error) {
    console.error('Error fetching help requests:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
}
