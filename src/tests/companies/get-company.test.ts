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

test("GET `/companies/:id` should return company details", async () => {
    const response = await supertest(service.server).get("/companies/1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Company retrieved", id: "1" });
});

test("GET `/companies/:id` should handle different IDs correctly", async () => {
    const response = await supertest(service.server).get("/companies/12345");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Company retrieved", id: "12345" });
});

test("GET `/companies/:id` should handle empty ID", async () => {
    const response = await supertest(service.server).get("/companies/");
    expect(response.status).toBe(404);
});
