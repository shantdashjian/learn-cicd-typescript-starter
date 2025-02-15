import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const client = createClient({ url: process.env.DATABASE_URL });
const db = drizzle(client);

// This will ensure the connection works
async function main() {
  try {
    await db.run("SELECT 1");
    console.log("Database connection successful");
  } catch (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
}

main();
