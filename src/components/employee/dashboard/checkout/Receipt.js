import React, { Component } from "react";
import logo_dark from '../../../../assets/images/logo_dark_x.svg';
import { formatPrice } from "../../../../utilities/helpers";
class Receipt extends Component {
    render() {
        return (
            <div className="p-4">
                <p><img src={logo_dark} alt="logo" width={150} /></p>
                <hr />
                {this.props.payments.map(payment => (
                    <h5 key={payment.id}
                        dangerouslySetInnerHTML={{ __html: payment.comment.replace(/(?:\r\n|\r|\n)/g, '<br>') }}>
                    </h5>
                ))}
                <hr />
                Daşınma haqqı: <strong>{formatPrice('AZN').format(this.props.costs.shippingCost)}</strong> <br />
                Kuryer xidməti: <strong>{formatPrice('AZN').format(this.props.costs.courierCost)}</strong> <br />
                Məhsul qiyməti: <strong>{formatPrice('AZN').format(this.props.costs.productPrice)}</strong> <br />
                Ekstra servis: <strong>{formatPrice('AZN').format(this.props.costs.extraSellingCost)}</strong> <br />
                <hr />
                <h5>Toplam: <strong>{formatPrice('AZN').format(this.props.costs.totalCost)}</strong></h5>
                <hr />
                <p>Imza: </p>
            </div>
        )
    }
}

export default Receipt;
