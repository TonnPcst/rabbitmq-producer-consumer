import { ClientProxy } from '@nestjs/microservices';
interface ProducerMessage {
    title: string;
    content: string;
}
export declare class ProducerService {
    private readonly Consumer;
    private client;
    constructor(Consumer: ClientProxy);
    sendMessage(message: ProducerMessage): Promise<string>;
}
export {};
