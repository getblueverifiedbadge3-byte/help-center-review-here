import { serveDir } from "https://deno.land/std@0.202.0/http/file_server.ts";

// Serve all files in the current repo
Deno.serve((req) => {
  return serveDir(req, {
    fsRoot: ".",          // serve from current folder
    urlRoot: "",
    showDirListing: false,
    enableCors: true,
  });
});
