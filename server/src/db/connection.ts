import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env } from "../utils/env.ts";
import { schemas } from "./schemas/index.ts";

const sql = postgres(env.DATABASE_URL);
const db = drizzle(sql, { schema: schemas, casing: "snake_case" });

export { sql, db };
