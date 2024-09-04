import type { FastifyInstance } from "fastify";
import { createCompany, getCompany } from "../../services/companies";

import { CreateCompanyBody, IdParams } from "../../types";

export default async function (server: FastifyInstance) {
    server.post<{ Body: CreateCompanyBody }>("/", async (request, reply) => {
        const result = await createCompany(request.body);
        reply.send(result);
    });

    server.get<{ Params: IdParams }>("/:id", async (request, reply) => {
        const result = await getCompany(request.params.id);
        if (result) {
            reply.send(result);
        } else {
            reply.status(404).send({ message: "Company not found" });
        }
    });
}
