import { serveDir } from "https://deno.land/std@0.202.0/http/file_server.ts";

console.log("Server running at http://localhost:8000");

// Serve all files in the current directory (including index.html, css, js)
Deno.serve((req) => {
  return serveDir(req, {
    fsRoot: ".",          // serve from current folder
    urlRoot: "",          // root URL = project folder
    showDirListing: false, // don’t show directory listing
    enableCors: true,     // allow cross-origin (helpful for JS/CSS)
  });
});
