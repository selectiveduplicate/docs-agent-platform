# AI Gateway 1.2.0 documentation

The AI Gateway 1.2.0 docs, on their own branch (`ai-gateway-1.2.0`) of docs-agent-platform.
The content was converted from the MkDocs docs in
[docs-api-platform](https://github.com/wso2/docs-api-platform) (`main`,
`en/docs/ai-gateway/1.2.0/`) to Docusaurus. Only the syntax was converted;
the text is unchanged.

- `docs/`: the pages, with their images next to them (`docs/img/`).
- `sidebars.json`: the navigation (read by `sidebars.js`).
- Links to other versions and products are absolute URLs under
  `https://wso2.com/agent-platform/docs/`.

## Build

```
npm ci
npm run build        # fails on broken links
npm run serve        # http://localhost:3000/agent-platform/docs/ai-gateway/1.2.0/
```
