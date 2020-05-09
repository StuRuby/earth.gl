export class Viewer {
    constructor(id: string, options: any) { }
    /**
     * 设置`viewer`属性
     * 是否显示地球、是否开启灯光、是否显示太阳、是否显示月亮、是否开启抗锯齿、是否开启地下模式、是否允许动画等、场景模式选择
     */
    setOptions() { }
    /**
     * 设置翻转角度
     */
    setPitchRange() { }
    /**
     * 限制相机进入地下
     */
    limitCameraToGround() { }

    /**
     * 添加图层
     */
    addLayer() { }
    /**
     * 删除图层
     */
    removeLayer() { }

    /**
     * 获取图层
     */
    getLayer() { }
    /**
     * 添加覆盖物
     */
    addOverlay(type: string, overlay: any) { }

    /**
     * 移除覆盖物
     */
    removeOverlay() { }

    /**
     * 获取覆盖物
     */
    getOverlay() { }

    /**
     * 添加效果
     */
    addEffect() { }

    /**
     * 删除效果
     */
    removeEffect() { }

    /**
     * 飞行到指定目标
     */
    flyTo(target: any) { }

    /**
     * 缩放至指定目标
     */
    zoomTo() { }

    /**
     * 飞行到具体位置
     */
    flyToPosition() { }

    /**
     * 事件绑定
     */
    on() { }

    /**
     * 事件解绑
     */
    off() { }
}