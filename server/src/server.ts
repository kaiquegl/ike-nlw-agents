import { fastifyCors } from "@fastify/cors";
import { fastify } from "fastify";
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod";

import { getRoomsRoute } from "./http/routes/rooms/get.ts";
import { env } from "./utils/env.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "http://localhost:5173",
  credentials: true,
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.get("/health", () => {
  return { status: "ok" };
});

app.register(getRoomsRoute);

app.listen({ port: env.PORT });
