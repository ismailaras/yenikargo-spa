import React from "react";
import Navi from "../common/Navi";
import {Col, Container, Row} from "reactstrap/es";
import FindPackages from "./FindPackages";
import PackagesDTable from "./PackagesDTable";

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
                        {/*<SetCustomers/>*/}
                        <PackagesDTable/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Packages;