import React from "react";
import Navi from "../common/Navi";
import {Col, Container, Row} from "reactstrap/es";
import FindCustomers from "./FindCustomers";
import CustomersDTable from "./CustomersDTable";
import SetCustomers from "./SetCustomers";
import {connect} from 'react-redux'


const Customers = () => {

    return (
        <div>
            <Navi/>
            <Container fluid={true}>
                <Row>
                    <Col md={3} className="mb-3">
                        <FindCustomers />
                    </Col>
                    <Col md={9}>
                        <SetCustomers/>
                        <CustomersDTable/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Customers);