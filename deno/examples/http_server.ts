// http_server.ts
import { serve } from "https://deno.land/std/http/server.ts";

const server = serve({ port: 5000 });

console.log("Listening to port 5000 on http://localhost:5000");

for await (const server_request of server) {
  server_request.respond({ body: "Deno server created\n" });
}

// deno run --allow-net http_server.ts