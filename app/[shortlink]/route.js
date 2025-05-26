import { redirect } from "next/navigation";

export async function GET(request, { params }) {
  const { shortlink } = params;

  const baseURL = `${request.nextUrl.protocol}//${request.nextUrl.host}`;

  const redirectMap = {
    home: `${baseURL}/home`,
    resume: `${baseURL}/Resume_HakamKoubaa.pdf`,
    github: "https://github.com/hakamkoubaa",
    // Add more shortlinks as needed
  };

  if (!shortlink || !redirectMap[shortlink]) {
    return redirect(baseURL); // Redirect to root
  }

  return redirect(redirectMap[shortlink]);
}
