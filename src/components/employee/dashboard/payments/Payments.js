import React, {useState} from "react";
import Navi from "../common/Navi";
import {Col, Container, Row} from "reactstrap/es";
import FindPayments from "./FindPayments";
import PaymentsDTable from "./PaymentsDTable";
import {connect} from 'react-redux'
import FindPaymentsAdvancedForm from "../payments/FindPaymentsAdvancedForm";

const Payments = () => {
    const [isAdvanceFilter, setIsAdvanceFilter] = useState(false);
    return (
        <div>
            <Navi/>
            <Container fluid={true}>
                <Row>
                    <Col md={3} className="mb-3">{isAdvanceFilter ? (
                            <FindPaymentsAdvancedForm
                                setIsAdvanceFilter={setIsAdvanceFilter}
                                isAdvanceFilter={isAdvanceFilter}
                            />
                        ) : (
                            <FindPayments
                                setIsAdvanceFilter={setIsAdvanceFilter}
                                isAdvanceFilter={isAdvanceFilter}
                            />
                        )}
                    </Col>
                    <Col md={9}>
                        <PaymentsDTable/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Payments);