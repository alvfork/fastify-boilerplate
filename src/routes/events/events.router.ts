import type { FastifyInstance } from "fastify";

export default async function (server: FastifyInstance) {
    server.get("/ping", async () => "pong 🏓");
}
