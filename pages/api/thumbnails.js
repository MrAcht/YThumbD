export default async function handler(req, res) {
    const { url } = req.query;
  
    try {
      if (!url) {
        res.status(400).json({ error: 'Missing url parameter' });
        return;
      }

      let parsed;
      try {
        parsed = new URL(url);
      } catch {
        res.status(400).json({ error: 'Invalid URL' });
        return;
      }

      const allowedHosts = new Set(['img.youtube.com', 'i.ytimg.com']);
      if (parsed.protocol !== 'https:' || !allowedHosts.has(parsed.hostname)) {
        res.status(400).json({ error: 'URL not allowed' });
        return;
      }

      if (req.method === 'HEAD') {
        const headResp = await fetch(parsed.toString(), { method: 'HEAD' });
        if (!headResp.ok) {
          res.status(headResp.status).end();
          return;
        }
        const contentLength = headResp.headers.get('content-length');
        const contentType = headResp.headers.get('content-type') || 'image/jpeg';
        if (contentLength) res.setHeader('Content-Length', contentLength);
        res.setHeader('Content-Type', contentType);
        res.status(200).end();
        return;
      }

      if (req.method !== 'GET') {
        res.setHeader('Allow', 'GET, HEAD');
        res.status(405).end('Method Not Allowed');
        return;
      }

      const upstream = await fetch(parsed.toString(), { method: 'GET' });
      if (!upstream.ok) {
        res.status(upstream.status).json({ error: 'Upstream fetch failed' });
        return;
      }

      const contentType = upstream.headers.get('content-type') || 'image/jpeg';
      const contentLength = upstream.headers.get('content-length');
      res.setHeader('Content-Type', contentType);
      if (contentLength) {
        res.setHeader('Content-Length', contentLength);
      }
      res.setHeader('Content-Disposition', 'attachment; filename="thumbnail.jpg"');
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');

      if (upstream.body) {
        const { Readable } = await import('stream');
        Readable.fromWeb(upstream.body).pipe(res);
      } else {
        const arrayBuffer = await upstream.arrayBuffer();
        res.status(200).send(Buffer.from(arrayBuffer));
      }
    } catch (error) {
      console.error(error);
      if (!res.headersSent) {
        res.status(500).send('Internal Server Error');
      } else {
        res.end();
      }
    }
}
