export default async function handler(req, res) {
    const { url } = req.query;
  
    try {
      const response = await fetch(url);
      const blob = await response.blob();
  
      res.setHeader('Content-Disposition', 'attachment; filename="thumbnail.jpg"');
      res.setHeader('Content-Type', 'image/jpeg');
      res.status(200).send(Buffer.from(await blob.arrayBuffer()));
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
  