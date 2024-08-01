import { ProducerService } from './producer.service';
export declare class ProducerController {
    private producerService;
    constructor(producerService: ProducerService);
    sendMessage(message: any): Promise<string>;
}
