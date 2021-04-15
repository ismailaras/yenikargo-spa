import React from "react";
import Navi from "../common/Navi";
import {Col, Container, Row} from "reactstrap/es";
import FindPayments from "./FindPayments";
import PaymentsDTable from "./PaymentsDTable";
import {connect} from 'react-redux'


const Payments = () => {
    return (
        <div>
            <Navi/>
            <Container fluid={true}>
                <Row>
                    <Col md={3} className="mb-3">
                        <FindPayments/>
                    </Col>
                    <Col md={9}>
                        <PaymentsDTable/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Payments);