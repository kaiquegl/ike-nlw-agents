import { reset, seed } from "drizzle-seed";

import { db, sql } from "./connection.ts";
import { schemas } from "./schemas/index.ts";

await reset(db, schemas);

await seed(db, schemas).refine((f) => {
  return {
    rooms: {
      count: 20,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
      },
    },
  };
});

await sql.end();

// biome-ignore lint/suspicious/noConsole: only used in dev
console.log("Database seeded");
