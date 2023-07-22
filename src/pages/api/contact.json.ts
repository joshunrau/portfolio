import type { APIRoute } from "astro";

export const prerender = false;

export const get: APIRoute = ({ params, request }) => {
  return new Response(
    JSON.stringify({
      message: Date.now()
    }),
    {
      status: 200,
      statusText: "Success"
    }
  );
};
