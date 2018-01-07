import * as React from 'react';
import ButtonGroup from '../../common/ButtonGroup';
import { TableControlsProps } from '../../../types';

class TableControls extends React.Component<TableControlsProps, {}> {
    onLeftGroupClick = (leftGroupActive: string) => {
        const { onLeftGroupClick } = this.props;
        if (onLeftGroupClick) { onLeftGroupClick(leftGroupActive); }
    }
    onMiddleGroupClick = (middleGroupActive: string) => {
        const { onMiddleGroupClick } = this.props;
        if (onMiddleGroupClick) { onMiddleGroupClick(middleGroupActive); }
    }
    render() {
        const { leftGroupActive, middleGroupActive } = this.props;
        return (
          <div>
              <div className="col-xs-6 no-padding">
                  <ButtonGroup
                      onButtonGroupClick={this.onLeftGroupClick}
                      grouped={false}
                      isGroup={true}
                      withIcons={false}
                      mainClass="pull-left"
                      activeBtn={leftGroupActive}
                      buttonType="button"
                      buttons={[
                          { text: 'Summary', field: 'summary', className: 'btn-light-blue' },
                          { text: 'Expanded', field: 'expanded', className: 'btn-light-blue' },
                          { text: 'Deep', field: 'deep', className: 'btn-light-blue' }
                      ]}
                  />
              </div>
              <div className="col-xs-6 no-padding">
                  <ButtonGroup
                      onButtonGroupClick={this.onMiddleGroupClick}
                      grouped={true}
                      isGroup={true}
                      withIcons={true}
                      mainClass="pull-left fieldTypeGroup"
                      activeBtn={middleGroupActive}
                      buttonType="button"
                      buttons={[
                          { iconClass: 'percent', field: 'percent', className: 'btn-light-blue' },
                          { iconClass: 'dollar', field: 'dollar', className: 'btn-light-blue' }
                      ]}
                  />
              </div>
          </div>
        );
    }
}

export default TableControls;
