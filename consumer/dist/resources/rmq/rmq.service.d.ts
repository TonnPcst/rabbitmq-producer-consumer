import { RmqContext, RmqOptions } from '@nestjs/microservices';
export declare class RmqService {
    constructor();
    getOptions(queue: string, noAck?: boolean): RmqOptions;
    acl(context: RmqContext): void;
}
