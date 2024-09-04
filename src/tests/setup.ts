import Fastify from "fastify";
import companiesRouter from "../routes/companies";
import eventsRouter from "../routes/events";

beforeAll(async () => {
    // TODO: drop, create and migrate test DB
});

afterAll(async () => {
    // TODO: Close client DB connection
});

beforeEach(async () => {
    // TODO: Remove all data from all collections
    // TODO: Seed test DB
});

export const buildFastify = () => {
    const server = Fastify();
    server.register(companiesRouter);
    server.register(eventsRouter);
    return server;
};
