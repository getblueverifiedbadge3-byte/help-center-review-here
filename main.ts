import { serve } from "https://deno.land/std@0.202.0/http/server.ts";

// Serve only index.html
async function handler(_req: Request): Promise<Response> {
  try {
    const html = await Deno.readTextFile("./index.html");
    return new Response(html, {
      headers: { "content-type": "text/html" },
    });
  } catch (error) {
    console.error("Error reading index.html:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

console.log("Server is running on http://localhost:8000");
serve(handler);
