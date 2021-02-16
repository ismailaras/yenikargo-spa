import React from "react";
import NumberInput from "../../../toolbox/NumberInput";
import CheckboxInput from "../../../toolbox/CheckboxInput";
import HiddenInput from "../../../toolbox/HiddenInput";
import TextareaInput from "../../../toolbox/TextareaInput";
import TextInput from "../../../toolbox/TextInput";

const CreateOrUpdatePackageForm = ({onSubmit, values, errors, onChange, onBlur, isSubmitting, touched, stations}) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-row">
                    <div className="col-md-12">
                        <h6><strong>İstiqamət detalları</strong></h6>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6">
                        <div className="badge badge-warning">Göndərən müştəri kodu</div>
                        <h6>{values.sender_customer_id}</h6>
                        <HiddenInput
                            name="sender_customer_id"
                            value={values.sender_customer_id}
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="badge badge-info">Alan müştəri kodu</div>
                        <h6>{values.receiver_customer_id}</h6>
                        <HiddenInput
                            name="receiver_customer_id"
                            value={values.receiver_customer_id}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6">
                        <div className="badge badge-warning">Göndərən filial adı</div>
                        <h6>{stations.map(station => station.id === values.sender_station_id ? station.name : null)}</h6>
                        <HiddenInput
                            name="sender_station_id"
                            value={values.sender_station_id}
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="badge badge-info">Alan filial adı</div>
                        <h6>{stations.map(station => station.id === values.receiver_station_id ? station.name : null)}</h6>
                        <HiddenInput
                            name="receiver_station_id"
                            value={values.receiver_station_id}
                        />
                    </div>
                </div>
                <hr/>
                <div className="form-row">
                    <div className="col-md-12">
                        <h6><strong>Bağlama detalları</strong></h6>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-4">
                        <NumberInput
                            label="Çəki (KQ)"
                            placeHolder="Çəki"
                            name="weight"
                            value={values.weight}
                            error={errors.weight}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.weight}
                        />
                    </div>
                    <div className="col-md-4">
                        <NumberInput
                            label="Ədəd"
                            placeHolder="Ədəd"
                            name="quantity"
                            value={values.quantity}
                            error={errors.quantity}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.quantity}
                        />
                    </div>
                    <div className="col-md-4">
                        <NumberInput
                            label="Daşınma haqqı (AZN)"
                            placeHolder="Daşınma haqqı"
                            name="amount"
                            readOnly={true}
                            value={values.amount}
                            error={errors.amount}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.amount}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-4">
                        <NumberInput
                            label="Genişlik (SM)"
                            placeHolder="Genişlik"
                            name="width"
                            value={values.width}
                            error={errors.width}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.width}
                        />
                    </div>
                    <div className="col-md-4">
                        <NumberInput
                            label="Hündürlük (SM)"
                            placeHolder="Hündürlük"
                            name="height"
                            value={values.height}
                            error={errors.height}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.height}
                        />
                    </div>
                    <div className="col-md-4">
                        <NumberInput
                            label="Uzunluq (SM)"
                            placeHolder="Uzunluq"
                            name="length"
                            value={values.length}
                            error={errors.length}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.length}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-12">
                        <TextareaInput
                            label="Bağlama tərkibi"
                            name="description"
                            value={values.description}
                            error={errors.description}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.description}
                        />
                    </div>
                </div>
                <hr/>
                <div className="form-row">
                    <div className="col-md-12">
                        <h6><strong>Göndərmə detalları</strong></h6>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-3">
                        <CheckboxInput
                            label="Göndərən ödəyəcək"
                            name="will_sender_pay"
                            value={!(values.will_receiver_pay) && true}
                            onChange={onChange}
                            disabled={values.will_receiver_pay}
                        />
                    </div>
                    <div className="col-md-3">
                        <CheckboxInput
                            label="Alan ödəyəcək"
                            name="will_receiver_pay"
                            value={values.will_receiver_pay}
                            onChange={onChange}
                            disabled={values.will_sender_pay}
                        />
                    </div>
                    <div className="col-md-3">
                        <CheckboxInput
                            label="Qarşı ödəməli məhsul"
                            name="is_postpaid"
                            value={values.is_postpaid}
                            onChange={onChange}
                        />
                    </div>
                    <div className="col-md-3">
                        <CheckboxInput
                            label="Evə çatdırılma"
                            name="deliver_to_address"
                            value={values.deliver_to_address}
                            onChange={onChange}
                        />
                    </div>
                </div>
                <hr/>
                {values.is_postpaid ?
                    <div className="form-row">
                        <div className="col-md-6">
                            <NumberInput
                                label="Məhsul qiyməti (AZN)"
                                placeHolder="Məhsul qiyməti"
                                name="price"
                                value={values.price}
                                error={errors.price}
                                onChange={onChange}
                                onBlur={onBlur}
                                touched={touched.price}
                            />
                        </div>
                        <div className="col-md-6">
                            <TextInput
                                label="Əlavə məlumat"
                                placeHolder="Əlavə məlumat"
                                name="comment"
                                value={values.comment}
                                error={errors.comment}
                                onChange={onChange}
                                onBlur={onBlur}
                                touched={touched.comment}
                            />
                        </div>
                    </div> : null}
                <div className="form-row">
                    <div className="col-md-12">
                        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                            <span>Təsdiqlə</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateOrUpdatePackageForm;