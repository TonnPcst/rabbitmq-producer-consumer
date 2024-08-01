"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProducerService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let ProducerService = class ProducerService {
    constructor(Consumer) {
        this.Consumer = Consumer;
        this.client = microservices_1.ClientProxyFactory.create({
            transport: microservices_1.Transport.RMQ,
            options: {
                urls: ['amqp://guest:guest@localhost:5672'],
                queue: 'consumer_queue',
                queueOptions: {
                    durable: true,
                },
            },
        });
        this.client
            .connect()
            .then(() => {
            console.log(` ############################ \n  * 🚀 connected to rmq 🚀 *\n ############################ \n`);
        })
            .catch((err) => {
            console.log(` ############################ \n  * 🚀 failed to connect to rmq 🚀 *\n ############################ \n`, err);
        });
    }
    async sendMessage(message) {
        if (!message.title || !message.content) {
            throw new Error('title and content are required');
        }
        this.Consumer.send('consumer_pattern', message).toPromise();
        return 'message sent';
    }
};
exports.ProducerService = ProducerService;
exports.ProducerService = ProducerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('consumer')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], ProducerService);
//# sourceMappingURL=producer.service.js.map