export default async function handler(req, res) {
  const allowedOrigins = ['https://swastik-portfolio-self.vercel.app', 'http://localhost:5173'];
  const origin = req.headers.origin;
  
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  } else {
    // Fallback for tools/testing, or omit entirely to block
    res.setHeader('Access-Control-Allow-Origin', 'https://swastik-portfolio-self.vercel.app');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: 'All fields required' });

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL || process.env.VITE_DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("Missing Webhook URL configuration in Environment Variables.");
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      content: `**New Contact Form Submission!**\n\n**Name:** ${name}\n**Email:** ${email}\n**Message:**\n${message}`
    })
  });

  if (response.status === 204) return res.status(200).json({ ok: true });
  return res.status(500).json({ error: 'Failed to send' });
}
