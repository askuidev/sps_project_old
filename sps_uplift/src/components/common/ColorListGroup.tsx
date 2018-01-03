import * as React from 'react';
import { AssetAllocationDataProps } from '../../types';

export default class AssetAllocation extends React.Component<AssetAllocationDataProps, {}> {
  getStyle(value: string, prop: string) {
    const obj = {};
    obj[prop] = value;
    return obj;
  }
  renderGroup() {
    const { data = [] } = this.props;
    return data.map(({stroke, label}, index) => {
      const style = stroke ? this.getStyle(stroke, 'backgroundColor') : '';
      return (
        <a href="#" className="list-group-item" key={index}>
          <span className="circle circle10" style={style} />
          <span className="labelText">{label}</span>
        </a>
      );
    });
  }
  render() {
    return (
      <div className="list-group-chart-colors">
        <ul className="list-group">
          {this.renderGroup()}
        </ul>
      </div>
    );
  }
}
