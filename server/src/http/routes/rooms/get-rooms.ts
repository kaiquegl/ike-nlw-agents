import { count, eq } from "drizzle-orm";
import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";

import { db } from "../../../db/connection.ts";
import { schemas } from "../../../db/schemas/index.ts";
export const getRoomsRoute: FastifyPluginCallbackZod = (app) => {
  app.get("/rooms", async () => {
    const results = await db
      .select({
        id: schemas.rooms.id,
        name: schemas.rooms.name,
        createdAt: schemas.rooms.createdAt,
        questionsCount: count(schemas.questions.id),
      })
      .from(schemas.rooms)
      .leftJoin(schemas.questions, eq(schemas.rooms.id, schemas.questions.roomId))
      .groupBy(schemas.rooms.id)
      .orderBy(schemas.rooms.createdAt);

    return results;
  });
};
