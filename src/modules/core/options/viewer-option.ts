import * as _ from 'lodash';
import * as Cesium from 'cesium';

import { Viewer } from '@core/viewer/viewer';
import { ViewerOptionsInterface } from '@core/viewer/interface/viewer.interface';
export class ViewerOption {
    private readonly viewer: Viewer;
    private options: ViewerOptionsInterface;
    constructor(viewer: Viewer) {
        this.viewer = viewer;
        this.options = {};
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