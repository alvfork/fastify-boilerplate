/* istanbul ignore next */

import type { FastifyInstance } from "fastify";
import companiesRoutes from "./companies.router";

export default async function (service: FastifyInstance) {
    service.register(companiesRoutes, { prefix: "/companies" });
}
