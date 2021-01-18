import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalHeader} from 'reactstrap';

const ModalForm = ({buttonLabel, header, body, size, disabled}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <span>
            <Button color="primary" onClick={toggle} disabled={disabled}>{buttonLabel}</Button>
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

export default ModalForm;
