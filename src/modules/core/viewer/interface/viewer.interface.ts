import Cesium, { Clock } from 'cesium';

export interface ViewerInterface {
    container: HTMLElement;
    scene: Cesium.Scene;
    camera: Cesium.Camera;
    canvas: HTMLCanvasElement;
    clock: Clock;


}

export interface ViewerOptionsInterface {
    animation?: boolean, //Whether to create animated widgets, lower left corner of the meter
    baseLayerPicker?: boolean, //Whether to display the layer selector
    fullscreenButton?: boolean, //Whether to display the full-screen button
    geocoder?: boolean, //To display the geocoder widget, query the button in the upper right corner
    homeButton?: boolean, //Whether to display the Home button
    infoBox?: boolean, //Whether to display the information box
    sceneModePicker?: boolean, //Whether to display 3D/2D selector
    selectionIndicator?: boolean, //Whether to display the selection indicator component
    timeline?: boolean, //Whether to display the timeline
    navigationHelpButton?: boolean, //Whether to display the help button in the upper right corner
    navigationInstructionsInitiallyVisible?: boolean,
    creditContainer?: HTMLElement | undefined,
    shouldAnimate?: boolean
}