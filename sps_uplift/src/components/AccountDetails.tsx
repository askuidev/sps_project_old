import * as React from 'react';
import { ActionDetaisEntity } from '../types';

interface AccountDetailsProps {
  accountDetails: ActionDetaisEntity;
}

export default class AccountDetails extends React.Component<AccountDetailsProps, {}> {
  render() {
    const { accountDetails } = this.props;
    return (
      <div className="accountDetailsContainer">
        <div className="accountDetailsHeader">
          <div className="row">
            <div className="col-6 col-md-4">
              <div className="list-box-sps-header">
                <div className="title">SPS Advantage</div>
                <div className="subtitle">{accountDetails.spsadvantage}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="accountDetailsInfoDesc">
          <div className="container-fluid">
            <div className="row">
              <div className="list-group-sps-container">
                <div className="list-group list-group-sps list-group-horizontal clearfix">
                  <a href="#" className="list-group-item col-6 col-md-4 list-box-sps">
                    <div className="title">Ownership</div>
                    <div className="subtitle">{accountDetails.ownership}</div>
                  </a>
                  <a href="#" className="list-group-item col-6 col-md-4 list-box-sps">
                    <div className="title">Plantype</div>
                    <div className="subtitle">{accountDetails.plantype}</div>
                  </a>
                  <a href="#" className="list-group-item col-6 col-md-4 list-box-sps">
                    <div className="title">Next Annual Review Date</div>
                    <div className="subtitle">{accountDetails.nextannualreviewdate}</div>
                  </a>
                </div>
                <div className="list-group list-group-sps list-group-horizontal clearfix">
                  <a href="#" className="list-group-item col-6 col-md-4 list-box-sps">
                    <div className="title">Last Modified</div>
                    <div className="subtitle">{accountDetails.lastmodified}</div>
                  </a>
                  <a href="#" className="list-group-item col-6 col-md-4 list-box-sps">
                    <div className="title">Last Modified By</div>
                    <div className="subtitle">{accountDetails.lastmodifiedby}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
