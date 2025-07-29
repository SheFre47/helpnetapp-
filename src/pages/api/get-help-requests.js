// src/pages/api/get-help-requests.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ success: true, data: [] });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end('Method Not Allowed');
  }
}
