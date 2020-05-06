import { injectable } from 'inversify';
import { Log as Logger } from 'probe.gl';

import { LogInterface } from './log.interface';

const logger = new Logger({ id: 'Earth.gl' }).enable(
    process.env.NODE_ENV !== 'production'
);

// 只输出debug级别以上的日志
logger.priority = 5;

@injectable()
export class Log implements LogInterface {
    // ---------------------------------------------------------------------------
    // Public Override Api
    // ---------------------------------------------------------------------------
    public error(message: string) {
        logger.error(message)();
    }

    public warn(message: string) {
        logger.probe(1, message)();
    }

    public info(message: string) {
        logger.info(3, message)();
    }

    public debug(message: string) {
        logger.probe(4, message)();
    }
}