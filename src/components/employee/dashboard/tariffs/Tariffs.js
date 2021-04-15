import React from "react";
import Navi from "../common/Navi";
import {Col, Container, Row} from "reactstrap/es";
import TariffsDTable from "./TariffsDTable";

const Tariffs = () => {
    return (
        <div>
            <Navi/>
            <Container fluid={true}>
                <Row>
                    <Col md={12}>
                        <TariffsDTable/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Tariffs;