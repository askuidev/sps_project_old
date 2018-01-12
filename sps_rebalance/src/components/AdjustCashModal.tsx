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

        // setting the default values for the adjust cash form
        this.state = {
            actionType: '',
            actionValue: ''
        };
    }
    // updating the state data for adjust cash form
    componentWillMount() {
        const { actionType, actionValue } = this.props.adjustCashData;
        this.setState({
            actionType,
            actionValue
        });
    }
    // dispatching the hide adjust cash modal action for onModalHide event
    onModalHide = () => {
        this.props.handleAdjustCashModal({ type: 'hide', data: '' });
    }
    // updating the state data on check of adjust cash form radion buttons
    onCheckChange = (actionType: string, e: MyFormEvent) => {
        this.setState({ actionType });
    }
    // updating the state data on change of input change
    onValueChange = (e: MyFormEvent) => {
        this.setState({ actionValue: e.target.value.replace(/[^0-9.+0-9$]/g, '') });
    }
    // updating state data to empty on click of cleat button
    onClearClick = () => {
        this.setState({
            actionType: '',
            actionValue: ''
        });
    }
    // updating allocationData with the adjust cash form data and
    // calling the onModalHide callback to hide the modal
    // on click of submit button
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
                    draggable={true}
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
