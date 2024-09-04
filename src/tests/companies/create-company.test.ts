import type { FastifyInstance } from "fastify";
import { expect, test } from "@jest/globals";
import supertest from "supertest";
import { buildFastify } from "../setup";

let service: FastifyInstance;

beforeAll(async () => {
    service = await buildFastify();
    await service.ready();
});

afterAll(async () => {
    await service.close();
});

test("POST `/companies` should create a new company", async () => {
    const response = await supertest(service.server)
        .post("/companies")
        .send({ name: "New Company" });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Company created", data: { name: "New Company" } });
});
