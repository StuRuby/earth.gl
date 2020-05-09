import { injectable, inject } from 'inversify';
import * as Cesium from 'cesium';

import { Log } from '@core/debug/log';
import { TYPES } from '@earth/config/inversify.types';


@injectable()
export class Viewer {
    private readonly log: Log;
    constructor(
        @inject(TYPES.Log) log: Log
    ) {
        this.log = log;
    }

}