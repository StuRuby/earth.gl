import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Map from './Map';

console.log(Map, 'map');

storiesOf('数据', module).add('multiPolygon', () => <Map />, {});
