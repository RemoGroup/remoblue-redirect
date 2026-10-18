# RemoBlue → RemoGM

GitHub Pages compatibility site for remoblue.com and www.remoblue.com. The marketing website is maintained in RemoGroup/remoblue-site and published at https://remogm.com.

redirect.js carries the existing path, query string, and fragment to the fixed HTTPS remogm.com origin. Explicit pages cover home, demo, privacy, terms, and the legacy legal page. The 404 fallback preserves other paths when JavaScript is available. Each known page has a meta-refresh and ordinary link fallback for browsers without JavaScript.

These are browser redirects, not HTTP 301 responses. GoDaddy forwarding was replaced because it returned 404 for /privacy. Both domains use GitHub Pages HTTPS.

Publish main from the repository root. Keep CNAME and .nojekyll. DNS uses the four GitHub Pages A/AAAA addresses, with www CNAME to remogroup.github.io. No application data, forms, analytics, or credentials are stored here.
