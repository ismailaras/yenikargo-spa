import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalHeader} from 'reactstrap';

const ModalButton = ({buttonLabel, header, body, size, disabled, buttonSize, buttonColor}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const colorBtn = buttonColor ? buttonColor: 'primary'
    return (
        <span>
            <Button color={colorBtn} size={buttonSize} onClick={toggle} disabled={disabled}>{buttonLabel}</Button>
            <Modal isOpen={modal}
                   backdrop={'static'}
                   toggle={toggle} size={size}>
                <ModalHeader toggle={toggle}>{header}</ModalHeader>
                <ModalBody>
                    {body}
                </ModalBody>
            </Modal>
        </span>
    );
}

export default ModalButton;
