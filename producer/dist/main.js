"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv_1 = require("dotenv");
const rmq_service_1 = require("./resources/rmq/rmq.service");
(0, dotenv_1.config)();
async function main() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const rmqService = app.get(rmq_service_1.RmqService);
    app.connectMicroservice(rmqService.getOptions('producer_queue'));
    await app.startAllMicroservices();
    await app.listen(process.env.PORT);
    console.log(` ################################################################ \n  * 🚀 Application is running on: http://127.0.0.1:${process.env.PORT}/api 🚀 *\n ################################################################\n`);
}
main();
//# sourceMappingURL=main.js.map