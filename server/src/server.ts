import { fastifyCors } from "@fastify/cors";
import { fastifyMultipart } from "@fastify/multipart";
import { fastify } from "fastify";
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod";

import { getRoomQuestionsRoute } from "./http/routes/rooms/get-room-questions.ts";
import { getRoomsRoute } from "./http/routes/rooms/get-rooms.ts";
import { createRoomRoute } from "./http/routes/rooms/post-room.ts";
import { uploadRoomAudioRoute } from "./http/routes/rooms/post-room-audio.ts";
import { createRoomQuestionRoute } from "./http/routes/rooms/post-room-question.ts";
import { env } from "./utils/env.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "http://localhost:5173",
});

app.register(fastifyMultipart);

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get("/health", () => {
  return { status: "ok" };
});

app.register(getRoomsRoute);
app.register(createRoomRoute);
app.register(getRoomQuestionsRoute);
app.register(createRoomQuestionRoute);
app.register(uploadRoomAudioRoute);

app.listen({ port: env.PORT });
