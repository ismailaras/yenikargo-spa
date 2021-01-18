import React from "react";
import Navi from "../common/Navi";
import {Col, Container, Row} from "reactstrap/es";
import StationsDTable from "./StationsDTable";

const Stations = () => {
    return (
        <div>
            <Navi/>
            <Container fluid={true}>
                <Row>
                    <Col md={12}>
                        <StationsDTable/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Stations;