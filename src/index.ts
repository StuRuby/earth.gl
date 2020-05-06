import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

export class Earth {
    constructor(id: string) {
        const viewer = new Cesium.Viewer(id, {
            animation: false, //是否创建动画小器件，左下角仪表
            shouldAnimate: true,
            baseLayerPicker: false, //是否显示图层选择器
            geocoder: false, //是否显示geocoder小器件，右上角查询按钮
            homeButton: false, //是否显示Home按钮
            infoBox: false, //是否显示信息框
            fullscreenButton: false, //是否显示全屏按钮
            sceneModePicker: false, //是否显示3D/2D选择器
            selectionIndicator: false, //是否显示选取指示器组件
            timeline: false,//是否显示时间轴
            navigationHelpButton: false, //是否显示右上角的帮助按钮 
        });
    }
}