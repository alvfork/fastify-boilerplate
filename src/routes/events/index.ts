/* istanbul ignore next */

import type { FastifyInstance } from "fastify";
import eventRoutes from "./events.router";

export default async function (service: FastifyInstance) {
    service.register(eventRoutes, { prefix: "/events" });
}
