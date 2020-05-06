export interface LayerInterface {
    id: string;
    show: boolean;
    attributes: object;
    state: string;
    type: string;
    // TODO:入参和返回值暂时未确定
    addFeature(): void;
    removeFeature(): void;
    updateFeature(): void;
    clear(): void;
    remove(): void;
    addToViewer(): void;
}