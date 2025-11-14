export default function handler(req, res) {
  if (req.method === "GET") {
    const VERIFY_TOKEN = "Tony@2025";

    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      return res.status(200).send(challenge);
    } else {
      return res.status(403).send("Verification failed");
    }
  }

  if (req.method === "POST") {
    console.log("Incoming message:", JSON.stringify(req.body, null, 2));
    return res.status(200).send("EVENT_RECEIVED");
  }

  res.status(404).send("Not Found");
}
