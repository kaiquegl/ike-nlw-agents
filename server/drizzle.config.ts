import { defineConfig } from "drizzle-kit";

import { env } from "./src/utils/env.ts";

export default defineConfig({
  casing: "snake_case",
  dialect: "postgresql",
  out: "./src/db/migrations",
  schema: "./src/db/schemas/**/*.ts",
  dbCredentials: { url: env.DATABASE_URL },
});
