import React from "react";
import {Col, Row} from "reactstrap/es";
import {formatDate, getStateNameInAzerbaijani} from "../../../../utilities/helpers";

export const EmployeeDTableChild = ({data}) => {
    return (
        <div>
            <Row className="my-4">
                <Col md={4}>
                    <div className="card">
                        <div className="card-body" style={{overflow: 'scroll', height: 400}}>
                            <h6>Hərəkətlər</h6>
                            <hr/>
                                <div key={data.created_date}>
                                    <li>
                                        <span>{getStateNameInAzerbaijani(data.state)}</span>
                                        <br/>
                                        <small>Müəllif: {data.creator_id}</small> <br/>
                                        <small>Tarix: {formatDate(data.created_date)}</small> <br/>
                                        {data.comment && <textarea
                                            className="form-control"
                                            defaultValue={data.comment}
                                            readOnly
                                            style={{maxWidth: 500}}
                                            rows="3"/>}
                                    </li>
                                    <hr/>
                                </div>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="card">
                        <div className="card-body" style={{overflow: 'scroll', height: 400}}>
                            <h6>Gedən bağlamalar</h6>
                            <hr/>
                                <div key={data.created_date}>
                                    <li>
                                        <small>ID: {data.id}</small> <br/>
                                        <small>Alan müştəri ID: {data.receiver_employee_id}</small> <br/>
                                        <small>Alan filial ID: {data.receiver_station_id}</small> <br/>
                                    </li>
                                    <hr/>
                                </div>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="card">
                        <div className="card-body" style={{overflow: 'scroll', height: 400}}>
                            <h6>Gələn bağlamalar</h6>
                            <hr/>
                                return <div key={data.created_date}>
                                    <li>
                                        <small>ID: {data.id}</small> <br/>
                                        <small>Alan müştəri ID: {data.receiver_employee_id}</small> <br/>
                                        <small>Alan filial ID: {data.receiver_station_id}</small> <br/>
                                    </li>
                                    <hr/>
                                </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
