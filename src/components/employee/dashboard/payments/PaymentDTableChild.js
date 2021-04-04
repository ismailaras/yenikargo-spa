import React from "react";
import {Col, Row} from "reactstrap/es";
import {formatDate, getStateNameInAzerbaijani} from "../../../../utilities/helpers";

export const PaymentDTableChild = ({data}) => {
    return (
        <div>
            <Row className="my-4">
                <Col>
                    <div className="card">
                        <div className="card-body" style={{overflow: 'scroll', height: 400}}>
                            <h6>Hərəkətlər</h6>
                            <hr/>
                                <div>
                                    <li>
                                        <span>{getStateNameInAzerbaijani(data.state)}</span>
                                        <br/>
                                        <small>Müəllif: {data.employee.id} - {data.employee.first_name} {data.employee.last_name}</small> <br/>
                                        <small>Tarix: {formatDate(data.created_date)}</small> <br/>
                                        <textarea
                                            className="form-control"
                                            defaultValue={data.comment}
                                            readOnly
                                            style={{maxWidth: 500}}
                                            rows="3"/>
                                    </li>
                                    <hr/>
                                </div>
                        </div>
                    </div>
                </Col>
                {console.log(data)}
            </Row>
        </div>
    )
}
