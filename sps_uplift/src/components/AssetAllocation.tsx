import * as React from 'react';
import { AssetAllocationDataProps } from '../types';
import { VictoryPie, VictoryTheme } from 'victory';
import ColorListGroup from './common/ColorListGroup';

export default class AssetAllocation extends React.Component<AssetAllocationDataProps, {}> {
  render() {
    const { data } = this.props;
    return (
      <div className="PieChartContainer">
        <div className="col-xs-6 no-padding">
          <VictoryPie
            theme={VictoryTheme.material}
            innerRadius={110}
            data={data}
          />
        </div>
        <div className="col-xs-6">
          <ColorListGroup data={data} />
        </div>
      </div>
    );
  }
}
