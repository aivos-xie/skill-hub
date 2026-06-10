const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 6666;
const ROOT = __dirname;
const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8', '.json': 'application/json',
  '.md': 'text/markdown; charset=utf-8', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.png': 'image/png', '.gif': 'image/gif', '.svg': 'image/svg+xml',
};
http.createServer((req, res) => {
  let fp = path.join(ROOT, req.url === '/' ? 'index.html' : req.url);
  fp = path.normalize(fp);
  if (!fp.startsWith(ROOT)) { res.writeHead(403); res.end(); return; }
  try {
    const c = fs.readFileSync(fp);
    res.writeHead(200, { 'Content-Type': MIME[path.extname(fp).toLowerCase()] || 'application/octet-stream' });
    res.end(c);
  } catch { res.writeHead(404); res.end('Not Found'); }
}).listen(PORT, '0.0.0.0', () => console.log(`📖 Skill Hub: http://0.0.0.0:${PORT}`));
