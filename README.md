# SAP Integration Helper MCP v0.2.0 — Free-plan prototype
Creator: Rameshkumar Varanganti. Independent project, not SAP-endorsed.

This is a REAL read-only MCP server with 3 tools, implemented using Cloudflare's stateless Streamable HTTP server handler. No AI inference, paid database, tenant connection, third-party scraping, code execution, storage, credentials or payment features. The SAP reference search uses a SMALL STATIC CATALOG, not live browsing.

## Absolute cost protection steps
1. Log in to Cloudflare; verify **Workers Free** under Billing before any deployment. **Do not enter a payment card, activate a paid plan or accept an upgrade.** If the account is already paid or requires billing to proceed, STOP.
2. Use the default `workers.dev` host, NOT an extra paid domain. Existing website/domain need not be changed.
3. Use a new GitHub repository or isolated project directory; do not overwrite your existing website or production Workers.
4. On local computer with Node.js installed, run `npm install`, `npm run check`, `npm test`, `npm run dev` and test requests. Dependencies must be downloaded, so dependency/security checks must be reviewed.
5. Only after confirming free plan, run `npx wrangler login`, then `npm run deploy`. This is an explicit manual deploy step. No CI auto-deployment is configured.
6. The endpoint will be `https://<worker-name>.<subdomain>.workers.dev/mcp`, with the actual Cloudflare-assigned subdomain (do not guess). Test MCP initialize, tools/list and tool calls with an MCP client.
7. Monitor daily request/CPU limits. Free plan may throttle/fail at limits; **never upgrade**. Do not turn on Workers AI, AI Gateway paid features, billing, R2, KV, D1, Durable Objects, analytics exports, or paid plans.
8. No one can guarantee zero costs from Cloudflare/OpenAI now or in the future. Stop if any fee, card or paid verification prompt appears. Separate existing domain renewal, internet access, and ChatGPT subscription costs are not included.

## Public plugin submission
Do NOT upload this server project ZIP into the plugin portal. OpenAI requires a separate plugin ZIP with `mcp.json` pointing to the REAL deployed HTTPS endpoint, plus original skills, 5 positive and 3 negative review cases, listing and review materials. You cannot add an MCP URL to an existing skills-only submission, so create a NEW public MCP submission while keeping the current private skills-only plugin unchanged. OpenAI review approval is not guaranteed.

## Security scope
Unauthenticated public read-only reference tools. Tool input is limited by schemas, no arbitrary URL fetches, no writes, no user data persistence. Never send real credentials/PII in code reviews. No compilation or actual SAP validation. Read/verify the policy pages on agenticintegrationhub.com before public launch.
