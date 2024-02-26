import app from "./src/app.ts";


const PORT = 6002;
Bun.serve({
    fetch: app.fetch,
    port: process.env.PORT || PORT,
    hostname: "localhost"
})