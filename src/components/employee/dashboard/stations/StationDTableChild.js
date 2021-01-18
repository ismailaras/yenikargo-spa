import React from "react";
import {Col, Row} from "reactstrap/es";
import {formatDate, getStateNameInAzerbaijani} from "../../../../utilities/helpers";

export const ExtraSellingDTableChild = ({data}) => {
    return (
        <div>
            {/*<Row className="my-4">*/}
            {/*    <Col md={12}>*/}
            {/*        <div className="card">*/}
            {/*            <div className="card-body" style={{overflow: 'scroll', height: 400}}>*/}
            {/*                <h6>Hərəkətlər</h6>*/}
            {/*                <hr/>*/}
            {/*                {data.data_states.map(dataState => {*/}
            {/*                    return <div key={dataState.created_date}>*/}
            {/*                        <li>*/}
            {/*                            <span>{getStateNameInAzerbaijani(dataState.state)}</span>*/}
            {/*                            <br/>*/}
            {/*                            <small>Müəllif: {dataState.creator_id}</small> <br/>*/}
            {/*                            <small>Tarix: {formatDate(dataState.created_date)}</small> <br/>*/}
            {/*                            <textarea*/}
            {/*                                className="form-control"*/}
            {/*                                defaultValue={dataState.comment}*/}
            {/*                                readOnly*/}
            {/*                                style={{maxWidth: 500}}*/}
            {/*                                rows="3"/>*/}
            {/*                        </li>*/}
            {/*                        <hr/>*/}
            {/*                    </div>*/}
            {/*                })}*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
        </div>
    )
}
