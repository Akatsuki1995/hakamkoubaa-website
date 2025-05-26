export async function GET(request) {
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

  return Response.json(contactMediums, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
