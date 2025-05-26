import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
    const contactMediums = [
      {
        medium: "github",
        username: "Akatsuki1995",
        link: "https://github.com/Akatsuki1995",
      },
      {
        medium: "email",
        username: "contact@hakamkoubaa.com",
        link: "mailto:contact@hakamkoubaa.com",
      },

      {
        medium: "linkedin",
        username: "hakam koubaa",
        link: "https://www.linkedin.com/in/hakam-koubaa/",
      },
    ];

    res.json(contactMediums);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
