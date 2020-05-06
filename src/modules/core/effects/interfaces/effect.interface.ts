export interface EffectInterface {
    id: string;
    type: string;
    // TODO:入参和返回值暂时未确定
    addToViewer(): void;
}