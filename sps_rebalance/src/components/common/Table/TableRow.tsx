import * as React from 'react';
const { Link } = require('react-router-dom');
import Checkbox from '../Checkbox';
import { getStyle, getPriceFormat } from '../../../utils';
import {
  TableRowDataProps,
  TableRowEntity,
  TableRowState,
  MyFormEvent
} from '../../../types';

class TableRow extends React.Component<TableRowEntity, TableRowState> {
  constructor(props: TableRowEntity) {
    super(props);
    this.state = {
      targetPer: '0'
    };
  }
  componentWillMount() {
    if (this.props.rowData) {
      this.setState({
        targetPer: this.props.rowData.targetPer
      });
    }
  }
  getStyle(prop: string, value: string | number) {
    return getStyle({ prop, value });
  }
  getColorBox(color: string) {
    return (
      <span
        className="square20"
        style={this.getStyle('backgroundColor', color)}
      />
    );
  }
  onAdjustCashClick = () => {
    const { rowData, onAdjustCashClick } = this.props;
    if (rowData && onAdjustCashClick) {
      onAdjustCashClick(rowData);
    }
  }
  getAdjustCash(rowData: TableRowDataProps) {
    if (!rowData) {
      return null;
    }
    const actionPrice = this.getPriceFormat(rowData, 'actionValue');
    const actionText =
      rowData.actionType === 'Withdraw'
        ? actionPrice + '_WD'
        : actionPrice + '_AD';
    return rowData.adjustCash ? (
      <div>
        <div>{rowData.description}</div>
        <div>
          <Link
            className="adjustCashLink"
            to="/"
            onClick={this.onAdjustCashClick}
          >
            {rowData.actionValue ? actionText : 'Adjust Cash'}
          </Link>
        </div>
      </div>
    ) : (
      rowData.description
    );
  }
  getTargetPerInput(rowData: TableRowDataProps) {
    const { id, targetPer } = rowData;
    return (
      <input
        type="text"
        className="form-control target-percent-input"
        onChange={this.onTargetPerChange.bind(this, id)}
        value={targetPer}
      />
    );
  }
  onTargetPerChange = (id: string | number, e: MyFormEvent) => {
    const { onDataChange } = this.props;
    const field = 'targetPer';
    let value = e.target.value.replace(/[^0-9.+0-9$]/g, '') || 0;
    if (onDataChange) {
      onDataChange({ value, id, field });
    }
  }
  getTargetPriceInput(rowData: TableRowDataProps) {
    const { id, targetPrice } = rowData;
    return (
      <input
        type="text"
        className="form-control target-price-input"
        onChange={this.onTargetPriceChange.bind(this, id)}
        value={targetPrice}
      />
    );
  }
  onTargetPriceChange = (id: string | number, e: MyFormEvent) => {
    const { onDataChange } = this.props;
    const field = 'targetPrice';
    let value = e.target.value.replace(/[^0-9.+0-9$]/g, '') || 0;
    if (onDataChange) {
      onDataChange({ value, id, field });
    }
  }
  getTargetCheckbox(rowData: TableRowDataProps) {
    return <Checkbox id={rowData.id} />;
  }
  getPriceFormat(rowData: TableRowDataProps, type: string) {
    return getPriceFormat(rowData[type]);
  }
  render() {
    const { rowData, fieldType } = this.props;
    return rowData ? (
      <tr>
        <td>{rowData.symbol}</td>
        <td>{this.getAdjustCash(rowData)}</td>
        <td>{this.getPriceFormat(rowData, 'value')}</td>
        <td>{rowData.currentPer}</td>
        <td className="text-center">
          {fieldType === 'percent'
            ? this.getTargetPerInput(rowData)
            : rowData.targetPer}
        </td>
        <td>
          {this.getTargetCheckbox(rowData)}
        </td>
        <td className="text-center">
          {fieldType === 'dollar'
            ? this.getTargetPriceInput(rowData)
            : this.getPriceFormat(rowData, 'targetPrice')}
        </td>
        <td>{rowData.driftPer}</td>
        <td>{this.getPriceFormat(rowData, 'buySellPrice')}</td>
      </tr>
    ) : (
      <tr>
        <td />
      </tr>
    );
  }
}

export default TableRow;
