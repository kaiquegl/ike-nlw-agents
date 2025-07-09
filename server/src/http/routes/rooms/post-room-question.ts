import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { z } from "zod/v4";

import { db } from "../../../db/connection.ts";
import { schemas } from "../../../db/schemas/index.ts";

export const createRoomQuestionRoute: FastifyPluginCallbackZod = (app) => {
  app.post(
    "/rooms/:roomId/questions",
    {
      schema: {
        params: z.object({
          roomId: z.string(),
        }),
        body: z.object({
          question: z.string().min(1),
        }),
      },
    },
    async ({ body, params }, reply) => {
      const { roomId } = params;
      const { question } = body;

      const result = await db.insert(schemas.questions).values({ roomId, question }).returning();

      const insertedQuestion = result[0];

      if (!insertedQuestion) {
        throw new Error("Failed to create question");
      }

      return reply.status(201).send({ questionId: insertedQuestion.id });
    }
  );
};
