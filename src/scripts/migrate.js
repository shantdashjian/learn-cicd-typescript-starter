import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

console.log("Starting migration script...");

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not set!");
  process.exit(1);
}

console.log("Creating client...");
const client = createClient({
  url: process.env.DATABASE_URL,
});

console.log("Creating db instance...");
const db = drizzle(client);

async function main() {
  try {
    console.log("Testing connection...");
    await db.run("SELECT 1");
    console.log("Database connection successful");
  } catch (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
