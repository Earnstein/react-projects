import app from "./src/app.ts";

const PORT = process.env.PORT || 6002;
Bun.serve({
    fetch: app.fetch,
    port: PORT,
    hostname: "localhost"
});

console.log(`Listening on port : ${PORT}`);