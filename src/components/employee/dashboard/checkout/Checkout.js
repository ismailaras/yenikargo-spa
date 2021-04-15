import React from 'react';
import Navi from "../common/Navi";
import {Col, Container, Row} from "reactstrap/es";
import ExtraSelling from "./ExtraSelling";
import {connect} from "react-redux";
import PaymentInfo from "./PaymentInfo";
import ShippingInfo from "./ShippingInfo";


const Checkout = () => {
    return <div>
        <Navi/>
        <Container fluid={true}>
            <Row>
                <Col md={9} className="mb-3">
                    <ShippingInfo/>
                </Col>
                <Col md={3}>
                    <ExtraSelling/>
                    <div className="card mt-3">
                        <div className="card-body">
                            <PaymentInfo/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
}

const mapDispatchToProps = {}

const mapStateToProps = state => ({});


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);