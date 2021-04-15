import React from "react";
import Navi from "../common/Navi";
import {Col, Container, Row} from "reactstrap/es";
import FindCouriers from "./FindCouriers";
import CouriersDTable from "./CouriersDTable";
import {connect} from 'react-redux'


const Couriers = () => {
    return (
        <div>
            <Navi/>
            <Container fluid={true}>
                <Row>
                    <Col md={3} className="mb-3">
                        <FindCouriers/>
                    </Col>
                    <Col md={9}>
                        <CouriersDTable/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Couriers);