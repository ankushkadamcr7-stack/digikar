import fs from 'fs';
import path from 'path';

async function prerender() {
  const indexHtmlPath = path.resolve('./dist/index.html');
  const template = fs.readFileSync(indexHtmlPath, 'utf-8');
  
  // Note: we use .js here because Vite will output compiled JS
  const { render } = await import('./dist/server/entry-server.js');

  const appHtml = render();
  const html = template.replace(`<!--app-html-->`, appHtml);

  fs.writeFileSync(indexHtmlPath, html);
  console.log('Prerendering completed.');
}

prerender().catch((err) => {
  console.error("Error during prerendering:", err);
  process.exit(1);
});
