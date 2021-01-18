import React from "react";
import Navi from "../common/Navi";
import {Col, Container, Row} from "reactstrap/es";
import AllExtraSellingDTable from "./AllExtraSellingDTable";

const AllExtraSelling = () => {
    return (
        <div>
            <Navi/>
            <Container fluid={true}>
                <Row>
                    <Col md={12}>
                        <AllExtraSellingDTable/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AllExtraSelling;