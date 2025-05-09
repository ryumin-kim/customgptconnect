export default async function handler(req, res) {
  const { workflowType, input } = req.body;

  const webhookMap = {
    summary: "https://n8n.modelgrade.net/webhook/chat",
    generator: "https://n8n.modelgrade.net/webhook/generator",
  };

  const webhookUrl = webhookMap[workflowType];

  if (!webhookUrl) {
    return res.status(400).json({ error: "Invalid workflowType" });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input }),
    });

    const result = await response.json();
    return res.status(200).json({ result });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
