import { serveDir } from "https://deno.land/std@0.202.0/http/file_server.ts";

// Deno Deploy uses Deno.serve (no localhost binding needed)
Deno.serve((req) => {
  return serveDir(req, {
    fsRoot: ".",          // serve from current repo root
    urlRoot: "",
    showDirListing: false,
    enableCors: true,
  });
});
