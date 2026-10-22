# Howden & District Pool League website

A responsive, static website built with HTML, CSS and vanilla JavaScript. No paid libraries, build tools, database or subscription are required to preview it.

## Files
- `index.html` — page content and sections
- `styles.css` — layout, colours and responsive styling
- `script.js` — mobile navigation, team search and fixture/results switch

## Important before publishing
The teams, table, fixtures, scores and contact details are demonstration placeholders, not verified league information. Update them in `index.html` and `script.js` before sharing the website publicly. The sample standings use the example 3-points-for-a-win / 1-for-a-draw formula, but confirm the league's official rules and tie-break order.

## Preview on your computer
1. Extract this folder.
2. Open `index.html` in a modern browser. No installation is needed.

## Publish free with GitHub Pages
1. Sign in or create a free account at https://github.com/
2. Create a new **public** repository, for example `howden-pool-league`.
3. Upload `index.html`, `styles.css`, and `script.js` to the repository root.
4. Open the repository's **Settings → Pages**.
5. Under the build/deployment section, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
6. Wait for deployment. GitHub will show the published website URL in the Pages section. It usually looks like `https://YOUR-USERNAME.github.io/howden-pool-league/`.

A custom domain is optional and normally costs money. Hosting terms and interfaces can change, so follow GitHub's current Pages instructions if the menu labels differ.

## Updating content
- League table: edit the table rows inside `index.html`.
- Teams and venues: edit the team cards in `index.html`.
- Fixtures/results: edit `fixtureMarkup` and `resultMarkup` in `script.js`.
- Contact: replace the placeholder copy button and explanatory text in the contact section with official contact details.

This is a front-end static site. It does not yet have a secure admin login, database, or form that sends submissions. Updates are made by editing and re-uploading the files.
