"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rabbitConfig = void 0;
const microservices_1 = require("@nestjs/microservices");
exports.rabbitConfig = {
    transport: microservices_1.Transport.RMQ,
    options: {
        urls: ['amqp://guest:guest@localhost:5672'],
        queue: 'consumer_queue',
        queueOptions: {
            durable: true,
        },
    },
};
//# sourceMappingURL=rabbit-rmq.config.js.map