import {formatPrice} from "../../../../utilities/helpers";
import IncreaseDecreaseInput from "../../../toolbox/IncreaseDecreaseInput";
import React from "react";
import RadioInputGroup from "../../../toolbox/RadioInputGroup";

export const ExtraSellingForm = ({allExtraSelling, handleChange, selectedCartItem, getRadioInputProps, onChange, handleSubmit,handleReset}) => {
    return <div className="card">
        <div className="card-header">
            Extra servislər
        </div>
        <div className="card-body" style={{overflow: 'scroll', height: 350}}>
            {allExtraSelling.map(extraSelling => (
                <div key={extraSelling.id}>
                    <div className="row bg-light pt-3 mb-2"
                         style={{borderRadius: 5, border: '1px solid rgba(0, 0, 0, 0.125)'}}>
                        <div className="col-4">
                            <IncreaseDecreaseInput
                                name={extraSelling.id}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-8 pt-1">
                            <span>{extraSelling.name} - {formatPrice('AZN').format(extraSelling.price)}</span>
                        </div>
                    </div>
                </div>
            ))}
            <div>
                <RadioInputGroup
                    radioClass="mr-3"
                    radioInputProps={getRadioInputProps()}
                    name="cartItem"
                    inline={true}
                    checkedValue={selectedCartItem}
                    onChange={onChange}
                />
            </div>
            <button className="btn btn-success" onClick={handleSubmit}>Artır</button>
            <button className="btn btn-outline-danger ml-2" onClick={handleReset}>Sıfırla</button>
        </div>
    </div>
}
