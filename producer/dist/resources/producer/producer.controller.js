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
exports.ProducerController = void 0;
const common_1 = require("@nestjs/common");
const producer_service_1 = require("./producer.service");
let ProducerController = class ProducerController {
    constructor(producerService) {
        this.producerService = producerService;
    }
    async sendMessage(message) {
        return this.producerService.sendMessage(message);
    }
};
exports.ProducerController = ProducerController;
__decorate([
    (0, common_1.Post)('send'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProducerController.prototype, "sendMessage", null);
exports.ProducerController = ProducerController = __decorate([
    (0, common_1.Controller)('producer'),
    __metadata("design:paramtypes", [producer_service_1.ProducerService])
], ProducerController);
//# sourceMappingURL=producer.controller.js.map