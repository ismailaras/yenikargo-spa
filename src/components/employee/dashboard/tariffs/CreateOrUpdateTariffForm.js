import React, {useState} from "react";
import TextInput from "../../../toolbox/TextInput";
import SelectInput from "../../../toolbox/SelectInput";
import CheckboxInput from "../../../toolbox/CheckboxInput";

const CreateOrUpdateTariffForm = ({ onSubmit, values, errors, onChange, onBlur, isSubmitting, touched,stations }) => {
    const [isPerKg,setIsPerKg] = useState(false)
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-row">
                    <div className="col-md-6">
                        <TextInput
                            label="Minimum çəki (KG)"
                            placeHolder="Çəki"
                            name="from_kg"
                            value={values.from_kg}
                            error={errors.from_kg}
                            onChange={onChange}
                            disabled={isPerKg}
                            onBlur={onBlur}
                            touched={touched.from_kg}
                        />
                    </div>
                    <div className="col-md-6">
                        <TextInput
                            label="Maksimum çəki (KG)"
                            placeHolder="Çəki"
                            name="to_kg"
                            value={values.to_kg}
                            error={errors.to_kg}
                            onChange={onChange}
                            disabled={isPerKg}
                            onBlur={onBlur}
                            touched={touched.to_kg}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-12">
                    <CheckboxInput label="Kiloqram limiti" name="isPerKg"  value={isPerKg} onChange={()=>setIsPerKg(!isPerKg)} />
                    </div>
                </div>
                {isPerKg && <div className="form-row">
                    <div className="col-md-12">
                        <TextInput
                            label="Son çəki"
                            placeHolder="Çəki"
                            name="price_per_kg"
                            value={values.price_per_kg}
                            error={errors.price_per_kg}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.price_per_kg}
                        />
                    </div>
                </div>}
                <div className="form-row">
                    <div className="col-md-6">
                        <SelectInput
                            label="Göndərən filial"
                            placeHolder="Filial"
                            name="sender_station_id"
                            options={stations.map(station => ({
                                value: station.id,
                                text: station.name
                            }))}
                            defaultOption="Filial seçin"
                            value={values.sender_station_id}
                            error={errors.sender_station_id}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.sender_station_id}
                        />
                    </div>
                    <div className="col-md-6">
                        <SelectInput
                            label="Alan filial"
                            placeHolder="Filial"
                            name="receiver_station_id"
                            options={stations.map(station => ({
                                value: station.id,
                                text: station.name
                            }))}
                            defaultOption="Filial seçin"
                            value={values.receiver_station_id}
                            error={errors.receiver_station_id}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.receiver_station_id}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-12">
                        <TextInput
                            label="Qiymət (azn)"
                            placeHolder="Qiymət"
                            name="price"
                            value={values.price}
                            error={errors.price}
                            onChange={onChange}
                            onBlur={onBlur}
                            touched={touched.price}
                        />
                    </div>
                </div>
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

export default CreateOrUpdateTariffForm;