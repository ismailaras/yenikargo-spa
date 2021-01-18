import React, {Component} from "react";
import logo_dark from '../../../../assets/images/logo_dark_x.svg';

class Receipt extends Component {
    render() {
        return (
            <div>
                <div className={this.props.toggled ? 'd-none' : 'd-block'}>
                    {this.props.payments
                        ?
                        <div>
                            <p><img src={logo_dark} alt="logo" width={150}/></p>
                            {this.props.payments.map(payment => (
                                <span key={payment.id}
                                      dangerouslySetInnerHTML={{__html: payment.comment.replace(/(?:\r\n|\r|\n)/g, '<br>')}}>
                                </span>
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
