import Cesium, { Clock } from 'cesium';

export interface ViewerInterface {
    container: HTMLElement;
    scene: Cesium.Scene;
    camera: Cesium.Camera;
    canvas: HTMLCanvasElement;
    clock: Clock;


}