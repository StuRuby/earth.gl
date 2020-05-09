import * as _ from 'lodash';

import { lazyInject } from '@earth/utils/inject';
import { TYPES } from '@earth/config/inversify.types';
import { Viewer } from '@core/viewer/viewer';
import { ViewerOptionsInterface } from '@core/viewer/interface/viewer.interface';

export class ViewerOption {
    @lazyInject(TYPES.Viewer)
    private readonly viewer!: Viewer;
    private options: ViewerOptionsInterface = {};

    constructor() {
        this.init();
    }


    // ---------------------------------------------------------------------------
    // Public Api
    // ---------------------------------------------------------------------------

    public setOptions(options: ViewerOptionsInterface) {
        if(_.isEmpty(options)) return this;
        this.options = {
            ...this.options,
            ...options
        }
    }


    // ---------------------------------------------------------------------------
    // Private Api
    // ---------------------------------------------------------------------------

    private init() {

    }
}