export default async function handler(req, res) {
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }
  try {
    await res.revalidate(`/products/${req.query.product_id}`);
    return res.json({ revalidated: true, product_id: req.query.product_id });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
