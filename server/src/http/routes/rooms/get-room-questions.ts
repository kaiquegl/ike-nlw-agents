import { desc, eq } from "drizzle-orm";
import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { z } from "zod/v4";

import { db } from "../../../db/connection.ts";
import { schemas } from "../../../db/schemas/index.ts";
export const getRoomQuestionsRoute: FastifyPluginCallbackZod = (app) => {
  app.get(
    "/rooms/:roomId/questions",
    {
      schema: {
        params: z.object({
          roomId: z.string(),
        }),
      },
    },
    async ({ params }) => {
      const { roomId } = params;

      const results = await db
        .select({
          id: schemas.questions.id,
          question: schemas.questions.question,
          answer: schemas.questions.answer,
          createdAt: schemas.questions.createdAt,
        })
        .from(schemas.questions)
        .where(eq(schemas.questions.roomId, roomId))
        .orderBy(desc(schemas.questions.createdAt));

      return results;
    }
  );
};
