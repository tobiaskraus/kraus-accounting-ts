# resarch: existing tools

**No-code / low-code database tools**

- Airtable
    - not exactly the UI I am thinking of. In the end also limited. Not open source
- Baserow (open source):
    - Self-hosted Airtable alternative.
    - looks more promissing then Airtable, but seems still not as flexible as I would wish for
- NocoDB (open source)
    - Another Airtable-like UI on top of any SQL database.
    - probably the one which I would like using the most if I would take any of these tools

**Customizable dashboard / backend kits**

If you want to own everything, but not code from scratch.

⚙️ Appsmith / Budibase / Retool (open-source self-hosted editions)

- Visual app builders over any database or API.
- You can design custom forms, dashboards, and charts quickly.
- Works beautifully with a Postgres or NocoDB backend.

Potential setup:
Postgres (for data) + NocoDB (for CRUD & relationships) + Appsmith (for dashboard & charts)

**Frameworks / CMS**

Directus, Pocketbase

- not the UI I wish for

Payload CMS

- Not the flexibility I need and has strong Next.js integration/tooling which I don't want to use

**-> nothing of these tools convinced me. I want to be able to write react code, have TypeScript type, which I define etc.**
