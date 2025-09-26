import { serve } from "https://deno.land/std@0.202.0/http/server.ts";

serve(async () => {
  const html = await Deno.readTextFile("./index.html");
  return new Response(html, {
    headers: { "content-type": "text/html; charset=UTF-8" },
  });
});
