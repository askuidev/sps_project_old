import * as React from 'react';
const { connect } = require('react-redux');
import { bindActionCreators, Dispatch } from 'redux';
import {
    handleAdjustCashModal,
    updateAllocationData
} from '../actions';
import Modal from './common/Modal';
import AdjustCashForm from './AdjustCashForm';
import {
  AdjustCashDataProps,
  AdjustCashModalProps,
  AdjustCashModalState,
  MyFormEvent
} from '../types';

class AdjustCashModal extends React.Component<AdjustCashModalProps, AdjustCashModalState> {
    constructor(props: AdjustCashModalProps) {
        super(props);
        this.state = {
            actionType: '',
            actionValue: ''
        };
    }
    componentWillMount() {
        const { actionType, actionValue } = this.props.adjustCashData;
        this.setState({
            actionType,
            actionValue
        });
    }
    onModalHide = () => {
        this.props.handleAdjustCashModal({ type: 'hide', data: '' });
    }
    onCheckChange = (actionType: string, e: MyFormEvent) => {
        this.setState({ actionType });
    }
    onValueChange = (e: MyFormEvent) => {
        this.setState({ actionValue: e.target.value.replace(/[^0-9.+0-9$]/g, '') });
    }
    onClearClick = () => {
        this.setState({
            actionType: '',
            actionValue: ''
        });
    }
    onSubmitClick = () => {
        const { allocationData, allocationId } = this.props;
        this.props.updateAllocationData(allocationData, { id: allocationId, ...this.state });
        this.onModalHide();
    }
    render() {
        const {
            mainClass = '',
            showAdjustCashModal
        } = this.props;
        return (
            <div className={'adjustCashModalContainer ' + mainClass}>
                <Modal
                    mainClass="adjustCashModal"
                    titleText="Adjust Cash"
                    showModal={showAdjustCashModal}
                    onModalHide={this.onModalHide}
                    onSubmitClick={this.onSubmitClick}
                >
                    <AdjustCashForm
                        {...this.state}
                        onCheckChange={this.onCheckChange}
                        onValueChange={this.onValueChange}
                        onClearClick={this.onClearClick}
                    />
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state: AdjustCashDataProps) => {
    return { ...state };
};

const mapDispatchToProps = (dispatch: Dispatch<AdjustCashDataProps>) => {
  return {
    ...bindActionCreators(
      {
        handleAdjustCashModal,
        updateAllocationData
      },
      dispatch
    ),
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdjustCashModal);
