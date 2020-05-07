import 'reflect-metadata';
import { injectable, Container } from 'inversify';

import { TYPES } from './inversify.types';

import { LogInterface } from '@core/debug/log.interface';

import { Log } from '@core/debug/log';

const rootContainer = new Container();
rootContainer
    .bind<LogInterface>(TYPES.LOG)
    .to(Log)
    .inSingletonScope();

export {
    rootContainer
};

