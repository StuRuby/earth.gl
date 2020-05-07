import Cesium from 'cesium';
/**
 * 基础事件类型
 */
const EVENT_TYPE = {
    ADD: 'add',
    REMOVE: 'remove'
};

/**
 * 鼠标事件类型
 */
export const MOUSE_EVENT_TYPE = {
    CLICK: Cesium.ScreenSpaceEventType.LEFT_CLICK,
    RIGHT_CLICK: Cesium.ScreenSpaceEventType.RIGHT_CLICK,
    DB_CLICK: Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK,
    MOUSE_MOVE: Cesium.ScreenSpaceEventType.MOUSE_MOVE,
    WHEEL: Cesium.ScreenSpaceEventType.WHEEL,
    MOUSE_OVER: 'mouseover',
    MOUSE_OUT: 'mouseout',
}

/**
 * `Viewer`事件类型
 */
export const VIEWER_EVENT_TYPE = {
    ADD_LAYER: 'addLayer',
    REMOVE_LAYER: 'removeLayer',
    ADD_SIMULATION: 'addSimulation',
    REMOVE_SIMULATION: 'removeSimulation',
};

/**
 * `Scene`事件类型
 */
export const SCENE_EVENT_TYPE = {
    CAMERA_MOVE_END: 'cameraMoveEnd',
    CAMERA_CHANGED: 'cameraChanged',
    PRE_RENDER: 'preRender',
    POST_RENDER: 'postRender',
    MORPH_COMPLETE: 'morphComplete',
    CLOCK_TICK: 'clockTick'
};

/**
 * 图层事件类型
 */
export const LAYER_EVENT_TYPE = {
    ...EVENT_TYPE,
    CLEAR: 'clear'
};

/**
 * 覆盖物事件类型
 */
export const OVERLAY_EVENT_TYPE = {
    ...EVENT_TYPE,
};

/**
 * 效果事件类型
 */
export const EFFECT_EVENT_TYPE = {
    ...EVENT_TYPE
};

/**
 * 漫游事件类型
 */
export const ROAMING_EVENT_TYPE = {
    ...EVENT_TYPE,
    TICK: 'tick',
    ACTIVE: 'active'
};



