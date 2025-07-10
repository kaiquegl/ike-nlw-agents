import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { z } from "zod/v4";

import { db } from "../../../db/connection.ts";
import { schemas } from "../../../db/schemas/index.ts";
import { generateEmbeddings, transcribeAudio } from "../../../services/gemini.ts";

export const uploadRoomAudioRoute: FastifyPluginCallbackZod = (app) => {
  app.post(
    "/rooms/:roomId/audio",
    {
      schema: {
        params: z.object({
          roomId: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { roomId } = request.params;
      const audio = await request.file();

      if (!audio) {
        throw new Error("No audio file provided");
      }

      // // 1. Transcribe the audio
      const audioBuffer = await audio.toBuffer();
      const audioAsBase64 = audioBuffer.toString("base64");

      const transcription = await transcribeAudio(audioAsBase64, audio.mimetype);

      // 2. Make the vector embeddings
      const embeddings = await generateEmbeddings(transcription);

      // 3. Store the embeddings in the database
      const result = await db
        .insert(schemas.audioChunks)
        .values({
          roomId,
          embeddings,
          transcription,
        })
        .returning();

      const insertedAudioChunk = result[0];

      if (!insertedAudioChunk) {
        throw new Error("Failed to store audio chunk");
      }

      return reply.status(201).send({ chunkId: insertedAudioChunk.id });
    }
  );
};
