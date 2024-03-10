import app from "./src/app";
import { mongoConnect } from "./src/utils/mongo";

const PORT = 6002 || Bun.env.PORT || 8000;

try {
  await mongoConnect()
    Bun.serve({
        fetch: app.fetch,
        port: PORT,
        hostname: "localhost",
      });
      console.log(`Listening on Port: ${PORT}`.green.underline);
} catch (error) {
    
}