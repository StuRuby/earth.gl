export interface OverlayInterface {
    id: string;
    show: boolean;
    attributes: object;
    state: string;
    type: string;

    // TODO:入参和返回值暂时未确定
    add(): void;
    remove(): void;
    on(): void;
    off(): void;
    fire(): void;
}