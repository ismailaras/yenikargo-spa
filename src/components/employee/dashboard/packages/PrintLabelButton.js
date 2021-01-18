import React, {useRef, useState} from "react";
import ReactToPrint from "react-to-print";
import Label from "./Label";

const PrintableLabel = ({pckg}) => {
    const ref = useRef(null)
    const [toggled, setToggled] = useState(true);
    return (
        <div>
            <ReactToPrint
                trigger={() => <button>print</button>}
                content={() => ref.current}
                onAfterPrint={() => setToggled(true)}
                onPrintError={() => setToggled(true)}
                onBeforeGetContent={() => setToggled(false)}
            />
            <Label ref={ref} pckg={pckg} toggled={toggled}/>
        </div>
    );
}

export default PrintableLabel;
