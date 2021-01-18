import {formatPrice} from "../../../../utilities/helpers";
import IncreaseDecreaseInput from "../../../toolbox/IncreaseDecreaseInput";
import React from "react";

export const ExtraSellingForm = ({allExtraSelling, handleChange}) => (
    <div className="card">
        <div className="card-header">
            Extra servislər
        </div>
        <div className="card-body" style={{overflow: 'scroll', height: 300}}>
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
        </div>
    </div>
)
