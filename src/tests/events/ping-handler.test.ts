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

test("GET `/ping` should return pong 🏓", async () => {
    const response = await supertest(service.server).get("/events/ping");
    expect(response.status).toBe(200);
    expect(response.text).toBe("pong 🏓");
});
