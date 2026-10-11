import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const port = Number(process.env.PORT || 3000);
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml' };

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
  const pathname = decodeURIComponent(url.pathname);
  const requested = pathname === '/manus-routes.json' ? '/public/manus-routes.json' : pathname === '/' ? '/index.html' : pathname;
  const filePath = normalize(join(root, requested));
  if (!filePath.startsWith(root)) { res.writeHead(403); res.end('Forbidden'); return; }
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { 'Content-Type': mime[extname(filePath)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    res.end(data);
  } catch {
    if (!extname(pathname)) {
      const data = await readFile(join(root, 'index.html'));
      res.writeHead(200, { 'Content-Type': mime['.html'], 'Cache-Control': 'no-cache' });
      res.end(data);
    } else { res.writeHead(404); res.end('Not found'); }
  }
});

server.listen(port, '0.0.0.0', () => console.log(`THE OPERATION listening on ${port}`));
