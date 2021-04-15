import React from "react";
import {Col, Row} from "reactstrap/es";
import {formatDate, getStateNameInAzerbaijani} from "../../../../utilities/helpers";

export const CourierDTableChild = ({data}) => {
    return (
        <div>
            <Row className="my-4">
                <Col md={6}>
                    <div className="card">
                        <div className="card-body" style={{overflow: 'scroll', height: 400}}>
                            <h6>Hərəkətlər</h6>
                            <hr/>
                            {data.data_states.map(dataState => {
                                return <div key={dataState.created_date}>
                                    <li>
                                        <span>{getStateNameInAzerbaijani(dataState.state)}</span>
                                        <br/>
                                        <small>Müəllif: {dataState.creator_id}</small> <br/>
                                        <small>Tarix: {formatDate(dataState.created_date)}</small> <br/>
                                        <textarea
                                            className="form-control"
                                            defaultValue={dataState.comment}
                                            readOnly
                                            style={{maxWidth: 500}}
                                            rows="3"/>
                                    </li>
                                    <hr/>
                                </div>
                            })}
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="card">
                        <div className="card-body" style={{overflow: 'scroll', height: 400}}>
                            <h6>Bağlamalar</h6>
                            <hr/>
                            {data.packages.map(p => {
                                return <div key={p.created_date}>
                                    <li>
                                        <small>ID: {p.id}</small> <br/>
                                        <small>Alan müştəri ID: {p.receiver_courier_id}</small> <br/>
                                        <small>Alan filial ID: {p.receiver_station_id}</small> <br/>
                                    </li>
                                    <hr/>
                                </div>
                            })}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
