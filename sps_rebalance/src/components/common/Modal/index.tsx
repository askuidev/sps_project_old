import * as React from 'react';
import Draggable from 'react-draggable';
const { Modal } = require('react-bootstrap');
import { ModalProps } from '../../../types';

class ReactModal extends React.Component<ModalProps, {}> {
    // callback function when Modal hide event occurs
    onModalHide = () => {
        const { onModalHide } = this.props;
        if (onModalHide) { onModalHide(); }
    }
    // callback function when Modal click event occurs
    onClick = () => {
        const { onSubmitClick } = this.props;
        if (onSubmitClick) { onSubmitClick(); }
    }
    // rendering the modal component based on the props
    renderModal() {
        const {
          children,
          titleText = 'Title',
          showModal,
          backdrop = true,
        } = this.props;
        return (
            <Modal
                dialogClassName="adjustCashModal clearfix"
                show={showModal}
                backdrop={backdrop}
                onHide={this.onModalHide}
            >
                <Modal.Header closeButton={true}>
                    <Modal.Title>{titleText}</Modal.Title>
                </Modal.Header>
                <Modal.Body bsClass="clearfix">
                    {children}
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-default" onClick={this.onModalHide}>Close</button>
                    <button
                        className="btn btn-primary btn-light-blue active"
                        onClick={this.onClick}
                    >Save changes
                    </button>
                </Modal.Footer>
            </Modal>
        );

    }
    render() {
        // adding draggable feature to the modal component based on the draggable prop
        return this.props.draggable ? (
            <Draggable>
                {this.renderModal()}
            </Draggable>
        ) : (
            this.renderModal()
        );
    }
}

export default ReactModal;
