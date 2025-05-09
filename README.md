# Assistant + n8n Webhook Function (Vercel)

This is a simple Vercel server to bridge OpenAI Assistants with n8n Webhooks.

## Usage

POST /api/run_n8n  
Body:
```json
{
  "workflowType": "summary",
  "input": "text to process"
}
