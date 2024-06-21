import type { HandleFetch } from "@sveltejs/kit";

export const handleFetch: HandleFetch = async ({ request, fetch }) => {
  if (request.url.startsWith("https://petitions.onrender.com")) {
    // Workaround: https://github.com/sveltejs/kit/issues/6608
    // request = new Request(
    //   request.url.replace('http://localhost:5173/', 'http://localhost:3000', ),
    //   request
    // )
    request.headers.set("origin", "http://localhost:5173/");
  }

  return fetch(request);
};
