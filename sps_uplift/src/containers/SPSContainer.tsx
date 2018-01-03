import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { getActionDetailsEntityData, getAssetAllocationData } from '../actions';
const { connect } = require('react-redux');
import { Panel, SPS } from '../components';

interface SpsContainerProps {
  getActionDetailsEntityData: () => void;
  getAssetAllocationData: () => void;
}

class SPSContainer extends React.Component<SpsContainerProps, {}> {
  componentWillMount() {
    this.props.getActionDetailsEntityData();
    this.props.getAssetAllocationData();
  }
  render() {
    return (
      <div className="accountDetailsPanelContainer">
        <Panel
          mainClass="accountDetailsPanel panel-transparent"
          titleText="Security Target"
        >
          <SPS {...this.props} />
        </Panel>
      </div>
    );
  }
}

const mapStateToProps = (state: SpsContainerProps) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch: Dispatch<SpsContainerProps>) => {
  return {
    ...bindActionCreators(
      {
        getActionDetailsEntityData,
        getAssetAllocationData
      },
      dispatch
    ),
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  SPSContainer
);
