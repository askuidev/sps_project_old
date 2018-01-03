import * as React from 'react';
import AccountDetails from './AccountDetails';
import AssetAllocation from './AssetAllocation'

export default class SPS extends React.Component<{},{}> {
	render() {
		return (
			<section id="accountDetails">
				<h4>Set Security Target</h4>
				<div>
					<AccountDetails accountDetails={this.props.actionDetails} />
				</div>
				<div id="accountDetailsCharts">
					<div className="row">
						<div className="col-md-4">
							<h4>Current Allocation</h4>
							<AssetAllocation
								id="asset-allocation-one"
								data={this.props.assetAllocationDetails} />
						</div>
						<div className="col-md-4">
							<h4>Security Target</h4>
							<AssetAllocation
								id="asset-allocation-one"
								data={this.props.assetAllocationDetails} />
							{/*<AssetAllocation
					  		id="assset-allocation-two"
					  		data={this.props.securityTarget}
					  	/>*/}
						</div>
						<div className="col-md-4">
							<h4>Target Allocation</h4>
							<AssetAllocation
								id="asset-allocation-one"
								data={this.props.assetAllocationDetails} />
							{/*<AssetAllocation
					  		id="assset-allocation-three"
					  		data={this.props.targetAllocation}
					  	/>*/}
						</div>
					</div>
				</div>
				<div id="accountDetailsTable">
					<div className="row">
					account details tables...
						{/*<AllocationTableContainer />*/}
					</div>
				</div>
			</section>
		);
	}
}
