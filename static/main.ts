import { serve } from "https://deno.land/std@0.202.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.202.0/http/file_server.ts";

// Serve all static files (index.html, CSS, JS) from the current folder
serve((req) => serveDir(req, { fsRoot: ".", showDirListing: false }));
