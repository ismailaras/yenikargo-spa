import React, {useEffect} from 'react';
import {getAllExtraSelling} from "../../../../redux/actions/extraSellingActions";
import {connect} from "react-redux";
import RadioInputGroup from "../../../toolbox/RadioInputGroup";
import {formatPrice} from "../../../../utilities/helpers";

const ExtraSellingRadioButtons = ({getAllExtraSelling, allExtraSelling, values, onChange}) => {
    useEffect(() => {
        if (allExtraSelling.length === 0) {
            getAllExtraSelling();
        }
    });
    const allBagSelling = allExtraSelling.filter(extraSelling => extraSelling.selling_type === 'Bag');
    const allEnvelopeSelling = allExtraSelling.filter(extraSelling => extraSelling.selling_type === 'Envelope');
    const allPackingSelling = allExtraSelling.filter(extraSelling => extraSelling.selling_type === 'Packing');
    const allBagSellingRadioInputProps = allBagSelling.map(bagSelling => ({
        value: bagSelling.id,
        label: bagSelling.name + ' - ' + formatPrice('AZN').format(bagSelling.price)
    }));
    const allEnvelopeSellingRadioInputProps = allEnvelopeSelling.map(envelopeSelling => ({
        value: envelopeSelling.id,
        label: envelopeSelling.name + ' - ' + formatPrice('AZN').format(envelopeSelling.price)
    }));
    const allPackingSellingRadioInputProps = allPackingSelling.map(packingSelling => ({
        value: packingSelling.id,
        label: packingSelling.name + ' - ' + formatPrice('AZN').format(packingSelling.price)
    }));
    return (
        <div className="row">
            <div className="col-md-12">
                <h6><strong>Ekstra servislər</strong></h6>
            </div>
            <div className="col-md-4">
                <strong>Klyok</strong>
                <RadioInputGroup
                    radioInputProps={allBagSellingRadioInputProps}
                    name="bagSelling"
                    checkedValue={values.bagSelling}
                    onChange={onChange}
                />
            </div>
            <div className="col-md-4">
                <strong>Zərf</strong>
                <RadioInputGroup
                    radioInputProps={allEnvelopeSellingRadioInputProps}
                    name="envelopeSelling"
                    checkedValue={values.envelopeSelling}
                    onChange={onChange}
                />
            </div>
            <div className="col-md-4">
                <strong>Qablaşdırma</strong>
                <RadioInputGroup
                    radioInputProps={allPackingSellingRadioInputProps}
                    name="packingSelling"
                    checkedValue={values.packingSelling}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}


const mapDispatchToProps = {
    getAllExtraSelling
}

const mapStateToProps = state => ({
    allExtraSelling: state.getAllExtraSellingReducer
});


export default connect(mapStateToProps, mapDispatchToProps)(ExtraSellingRadioButtons);
