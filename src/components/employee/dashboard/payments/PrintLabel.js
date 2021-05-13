import React, {Component} from "react";
import Barcode from "../../../toolbox/Barcode";
import {formatDate} from "../../../../utilities/helpers";
import logo_print from '../../../../assets/images/logo_print.jpg';

class PrintLabel extends Component {
    generateLabels() {
        const labels = []
        let i = 0;
        while (i < 1) {
            i++;
            labels.push(<div className="card">
                <div className="card-body">
                    <table className="table table-dark">
                        <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Ödəniş Metodu</th>
                            <th scope="col">Qiymət</th>
                            <th scope="col">Məhsul</th>
                            <th scope="col">İşçi</th>
                            <th scope="col">Comment</th>
                            <th scope="col">Tarix</th>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            this.props.pckg.map(item => {
                                return <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.method}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.sort}</td>
                                    <td>{item?.employee.first_name} {item?.employee.last_name}</td>
                                    <td>{item.comment}</td>
                                    <td>{item.created_date}</td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>

                    <div className="d-flex align-items-center justify-content-end">
                            <small>yenikargo.az</small>
                    </div>
                </div>
            </div>)
        }
            return labels;
    }

    render() {
        return (
            <div className={this.props.toggled ? 'd-block' : 'd-none'}>
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

export default PrintLabel;
