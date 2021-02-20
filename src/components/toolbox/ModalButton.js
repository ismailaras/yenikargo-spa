import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalHeader} from 'reactstrap';

const ModalButton = ({buttonLabel, header, body, size, disabled, buttonSize, buttonColor,clsName,outline}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const colorBtn = buttonColor ? buttonColor: 'primary'
    return (
        <span className={clsName}>
            <Button outline={outline} color={colorBtn} size={buttonSize} onClick={toggle} disabled={disabled}>{buttonLabel}</Button>
            <Modal isOpen={modal}
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
