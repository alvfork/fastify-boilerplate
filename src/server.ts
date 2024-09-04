import "dotenv/config";
import Fastify from "fastify";
import { fastifyFormbody } from "@fastify/formbody";
import companiesRouter from "./routes/companies";
import eventsRouter from "./routes/events";
import ShortUniqueId from "short-unique-id";
import { swaggerConfig } from "./swagger";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";

const service = Fastify({
    logger: {
        name: "fastify-boilerplate",
        level: "trace",
    },
    genReqId: () => new ShortUniqueId({ length: 10 }).randomUUID(),
});

service.register(fastifyFormbody);
service.register(swagger, swaggerConfig);
service.register(swaggerUi, { routePrefix: "/docs" });

// Endpoint routers
service.register(companiesRouter);
service.register(eventsRouter);

const start = async () => {
    try {
        const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 9666;
        const host = process.env.HOST || "localhost";
        service.listen({ port: port, host: host }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    } catch (err) {
        service.log.error(err);
        process.exit(1);
    }
};

start();
