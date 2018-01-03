import * as React from 'react';

interface Props {
	 accountDetails: ActionDetaisEntity;
}

export default class AccountDetails extends React.Component<Props,{}> {

	constructor(props:Props){
		super(props);
	}

	render() {
		return (
			<div>
				<div id="accountDetailsInformation">
					<div className="row">
						<div className="col-6 col-md-4">
							<dl>
								<dt>SPS Advantage</dt>
								<dd>{this.props.accountDetails.spsadvantage}</dd>
							</dl>
						</div>
					</div>
				</div>
				<div id="accountDetailsInfo">
					<div className="container-fluid">
						<div className="row">
							<div className="col-6 col-md-4">
								<dl>
									<dt>SPS Advantage</dt>
									<dd>{this.props.accountDetails.spsadvantage}</dd>
								</dl>
							</div>
							<div className="col-6 col-md-4">
								<dl>
									<dd>Ownership</dd>
									<dt>{this.props.accountDetails.ownership}</dt>
								</dl>
							</div>
							<div className="col-6 col-md-4">
								<dl>
									<dt>Plantype</dt>
									<dd>{this.props.accountDetails.plantype}</dd>
								</dl>
							</div>
						</div>
					</div>
					<hr className="horizontal-line"/>
					<div className="container-fluid">
						<div className="row">
							<div className="col-6 col-md-4">
								<dl>
									<dd>Last Modified</dd>
									<dt>{this.props.accountDetails.lastmodified}</dt>
								</dl>
							</div>
							<div className="col-6 col-md-4">
								<dl>
									<dd>Last Modified By</dd>
									<dt>{this.props.accountDetails.lastmodifiedby}</dt>
								</dl>
							</div>
							<div className="col-6 col-md-4">
								<dl>
									<dd>Next Annual Review Date</dd>
									<dt>{this.props.accountDetails.nextannualreviewdate}</dt>
								</dl>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
