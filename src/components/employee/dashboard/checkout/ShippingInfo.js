import React from "react";
import PrintLabelButton from "../packages/PrintLabelButton";
import {connect} from "react-redux";
import {formatPrice} from "../../../../utilities/helpers";
import {removeFromCart} from "../../../../redux/actions/cartActions";

const ShippingInfo = ({cart, removeFromCart}) => {
    return (
        <div className="card mb-4">
            <div className="card-header">
                Bağlamalar
            </div>
            <div className="card-body">
                {cart.filter(cartItem => cartItem.paymentFor === 'Package').length > 0 ? cart.map(cartItem => (cartItem.paymentFor === 'Package'
                    ?
                    <div className={cartItem.is_paid ? 'paid-text' : null} key={cartItem.id}>
                        {console.log(cartItem)}
                        <div className="container-fluid bg-light pt-3 mb-2"
                             style={{borderRadius: 5, border: '1px solid rgba(223,215,202,.75)'}}>
                            <div className="row">
                                <div className="col-md-3 align-self-center">
                                    <span style={{fontSize: 20}}>Bağlama kodu: <strong>{cartItem.id}</strong></span>
                                </div>
                                <div className="col-md-5 align-self-center">
                                    {cartItem.is_postpaid ?
                                        <div className="badge badge-info">Qarşı ödəməli məhsul</div> : null}
                                    {cartItem.will_receiver_pay
                                        ? <div className="badge badge-warning">Alan ödəyir</div>
                                        : <div className="badge badge-warning">Göndərən ödəyir</div>}
                                    {cartItem.deliver_to_address ?
                                        <div className="badge badge-danger">Evə çatdırılma</div> : null}
                                </div>
                                <div className="col-md-4">
                                    <PrintLabelButton
                                        cls='btn btn-primary btn-sm'
                                        pckg={cartItem}
                                    />
                                    {/*{!cartItem.courier_id ? <button*/}
                                    {/*    onClick={() => removeFromCart(cartItem)}*/}
                                    {/*    className="btn btn-info btn-sm ml-2">*/}
                                    {/*    Kuryer artır*/}
                                    {/*</button> : null}*/}
                                    <button
                                        onClick={() => removeFromCart(cartItem)}
                                        className="btn btn-danger btn-sm ml-2">
                                        Ləvğ et
                                    </button>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-md-6">
                                    <p>Daşınma haqqı: <strong>{formatPrice('AZN').format(cartItem.amount)}</strong></p>
                                    <p>Kuryer
                                        xidməti: <strong>{formatPrice('AZN').format(cartItem.courier_cost)}</strong>
                                    </p>
                                    <p>Məhsul qiyməti: <strong>{formatPrice('AZN').format(cartItem.price)}</strong></p>
                                </div>
                                <div className="col-md-6">
                                    <p>Ədəd: <strong>{cartItem.quantity}</strong></p>
                                    <p>Çəki (KQ): <strong>{cartItem.weight}</strong></p>
                                    <p>Toplam: <strong>{formatPrice('AZN').format(
                                        cartItem.amount + cartItem.courier_cost
                                    )}</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null)) : <div className="alert alert-primary">Bağlama tapılmadı</div>}
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    removeFromCart
}

const mapStateToProps = state => ({
    cart: state.cartReducer
});


export default connect(mapStateToProps, mapDispatchToProps)(ShippingInfo);