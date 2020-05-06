import * as React from 'react';

import { Earth } from '@earth/index';
import { ViewerContainer } from './components/viewer-container';

export default class Map extends React.Component<any, any> {
	public componentDidMount() {
		const viewer = new Earth('viewer');
	}

	public render() {
		return <ViewerContainer />;
	}
}
