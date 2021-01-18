import {useBarcode} from "@createnextapp/react-barcode";
import React from "react";

const Barcode = ({barcode}) => {
    const {inputRef} = useBarcode({
        value: barcode,
        options: {
            width: 4,
            font: 'kanit'
        }
    });
    return (
        <svg ref={inputRef}/>
    )
}

export default Barcode;