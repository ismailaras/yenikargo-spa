import React, {Component} from "react";
import logo_dark from '../../../../assets/images/logo_dark_x.svg';

class Receipt extends Component {
    render() {
        return (
            <div className="p-4">
                <div className={this.props.toggled ? 'd-none' : 'd-block'}>
                    {this.props.payments
                        ?
                        <div>
                            <p><img src={logo_dark} alt="logo" width={150}/></p>
                            <hr/>
                            {console.log(this.props.payments)}
                            {this.props.payments.map(payment => (
                                <h5 key={payment.id}
                                      dangerouslySetInnerHTML={{__html: payment.comment.replace(/(?:\r\n|\r|\n)/g, '<br>')}}>
                                </h5>
                            ))}
                            <hr/>
                            <p>Imza: </p>
                        </div>
                        :
                        null}
                </div>
            </div>
        )
    }
}

export default Receipt;
