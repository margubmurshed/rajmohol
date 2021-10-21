import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

const DisplayDishDetails = props => {
    return (
        <Modal isOpen={props.isOpen}>
            <ModalBody>
                {props.dishDetails}
            </ModalBody>
            <ModalFooter>
                <Button onClick={props.onClick}>Close</Button>
            </ModalFooter>
        </Modal>
    )
}

export default DisplayDishDetails;