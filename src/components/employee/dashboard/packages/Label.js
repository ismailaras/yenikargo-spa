import React, {Component} from "react";
import Barcode from "../../../toolbox/Barcode";
import {formatDate} from "../../../../utilities/helpers";

class Label extends Component {
    generateLabels() {
        const labels = [];
        let i = 0;
        while (i < this.props.pckg.quantity) {
            i++;
            labels.push(<div key={i} className="card" style={{width: 553, height: 553}}>
                <div className="card-body">
                    <Barcode barcode={this.props.pckg.barcode}/>
                    <hr/>
                    <div className="row">
                        <div className="col-6" style={{borderRight: '1px solid #ddd'}}>
                            <h1>KOD: {this.props.pckg.id}</h1>
                        </div>
                        <div className="col-6 text-right">
                            <h1>SAY: {i}/{this.props.pckg.quantity}</h1>
                        </div>
                    </div>
                    <hr/>
                    {/*<div className="row">*/}
                    {/*    <div className="col-12">*/}
                    {/*        <h1 style={{*/}
                    {/*            fontSize: 60,*/}
                    {/*            textTransform: 'uppercase'*/}
                    {/*        }}>{this.props.stations.find(station => station.id === this.props.pckg.sender_station_id).name}</h1>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <hr/>
                    <div className="row">
                        <div className="col-12">
                            <h6>Qeyd: {this.props.pckg.description}</h6>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-6">
                            {/*<img src={logo_print}/>*/}
                            <h3><strong>YENİKARGO</strong></h3>
                            <p>info@yenikargo.com</p>
                        </div>
                        <div className="col-6 text-right align-self-center">
                            {formatDate(new Date())}
                        </div>
                    </div>
                </div>
            </div>)
        }
        return labels;
    }

    render() {
        return (
            <div className={this.props.toggled ? 'd-none' : 'd-block'}>
                {this.props.pckg
                    ?
                    <div>
                        {this.generateLabels()}
                    </div>
                    :
                    null}
            </div>
        )
    }
}

export default Label;
