import React from "react";
import Navi from "../common/Navi";
import {Col, Container, Row} from "reactstrap/es";
import FindEmployees from "./FindEmployees";
import EmployeesDTable from "./EmployeesDTable";
import {connect} from 'react-redux'


const Employees = () => {
    return (
        <div>
            <Navi/>
            <Container fluid={true}>
                <Row>
                    <Col md={3} className="mb-3">
                        <FindEmployees/>
                    </Col>
                    <Col md={9}>
                        <EmployeesDTable/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);