import * as React from 'react';
import AccountDetails from './AccountDetails';
import AssetAllocation from './AssetAllocation';
import { ActionDetaisEntity, AssetAllocationEntity } from '../types';

interface SPSProps {
  actionDetailsEntity?: ActionDetaisEntity;
  assetAllocationData?: AssetAllocationEntity[];
}

export default class SPS extends React.Component<SPSProps, {}> {
  render() {
    const { actionDetailsEntity, assetAllocationData } = this.props;
    return (
      <section className="accountDetailsContainer">
        <div>
          {actionDetailsEntity ? <AccountDetails accountDetails={actionDetailsEntity} /> : ''}
        </div>
        <div className="accountDetailsCharts">
          <div className="row">
            <div className="col-md-4">
              <h4 className="chartTitle">Current Allocation</h4>
              <AssetAllocation
                id="asset-allocation-one"
                data={assetAllocationData}
              />
            </div>
            <div className="col-md-4">
              <h4 className="chartTitle">Security Target</h4>
              {assetAllocationData ?
                <AssetAllocation
                  id="asset-allocation-one"
                  data={assetAllocationData}
                /> : ''}
            </div>
            <div className="col-md-4">
              <h4 className="chartTitle">Target Allocation</h4>
              {assetAllocationData ?
                <AssetAllocation
                  id="asset-allocation-one"
                  data={assetAllocationData}
                /> : ''}
            </div>
          </div>
        </div>
        <div className="accountDetailsTable">
          <div className="row">
          account details tables...
            {/*<AllocationTableContainer />*/}
          </div>
        </div>
      </section>
    );
  }
}
