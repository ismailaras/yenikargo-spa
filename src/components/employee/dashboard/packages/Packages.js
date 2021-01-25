import React from "react";
import Navi from "../common/Navi";
import {Col, Container, Row} from "reactstrap/es";
import FindPackages from "./FindPackages";
import PackagesDTable from "./PackagesDTable";
import {connect} from 'react-redux'

const Packages = () => {
    return (
        <div>
            <Navi/>
            <Container fluid={true}>
                <Row>
                    <Col md={3} className="mb-3">
                        <FindPackages/>
                    </Col>
                    <Col md={9}>
                        <PackagesDTable/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Packages);
