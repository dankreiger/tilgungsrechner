export default async function handler(req, res) {
  try {
    const query = new URLSearchParams(req.query).toString();
    const response = await fetch(
      `http://localhost:3333/api/calculation/monthly-payment-details?${query}`
    );
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
