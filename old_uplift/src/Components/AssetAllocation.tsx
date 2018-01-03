import * as React from 'react';
import PieChart from './widgets';

export class AssetAllocation extends React.Component<{},{}> {
	render() {
		return (
			<div>
				<PieChart data={this.props.data} id={this.props.id}/>
			</div>
		);
	}
}
