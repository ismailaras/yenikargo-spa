import React from "react";
import Navi from "../common/Navi";
import {Col, Container, Row} from "reactstrap/es";
import {connect} from 'react-redux'
import ReportsDTable from "./ReportsDTable";
import FindReports from "./FindReports";


const Reports = ({auth}) => {
    return (
        <div>
            <Navi/>
            <Container fluid={true}>
                <Row>
                    {!auth.currentEmployee.is_operator_admin &&
                    <Col md={3} className="mb-3">
                        <FindReports/>
                    </Col>}
                    <Col md={9}>
                        <ReportsDTable/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.authReducer,

});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Reports);