import { interfaces } from 'inversify';
import getDecorators from 'inversify-inject-decorators';

import { rootContainer } from '@earth/config/inversify.config';

// 支持`Earth.gl`使用new 而非借助于IOC容器实现实例化的场景，同时禁止lazyInject cache.
const DECORATORS = getDecorators(rootContainer, false);

interface BabelPropertyDescriptor extends PropertyDescriptor {
    initializer(): any;
}


/**
 * 重写`lazyInject`，支持`babel`
 * @see https://github.com/inversify/InversifyJS/issues/1026#issuecomment-504936034
 */
export const lazyInject = (identifier: interfaces.ServiceIdentifier<any>) => {
    const original = DECORATORS.lazyInject(identifier);
    return function (this: any, proto: any, key: string, descriptor?: BabelPropertyDescriptor): void {
        original.call(this, proto, key);
        if(descriptor) descriptor.initializer = () => proto[key];
    }
}

/**
 * 重写`lazyMultiInject`，支持`babel`
 * @see https://github.com/inversify/InversifyJS/issues/1026#issuecomment-504936034
 */
export const lazyMultiInject = (identifier: interfaces.ServiceIdentifier<any>) => {
    const original = DECORATORS.lazyMultiInject(identifier);
    return function (this: any, proto: any, key: string, descriptor?: BabelPropertyDescriptor) {
        original.call(this, proto, key);
        if(descriptor) descriptor.initializer = () => proto[key];
    }
}