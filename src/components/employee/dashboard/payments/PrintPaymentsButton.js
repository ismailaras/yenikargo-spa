import React, {useRef, useState, useEffect} from "react";
import ReactToPrint from "react-to-print";
import PrintLabel from "./PrintLabel";
import {connect} from "react-redux";

const PrintPaymentsButton = ({pckg, disabled, cls}) => {
    const ref = useRef()
    const [toggled, setToggled] = useState(true);
    return (
        <span>
            <ReactToPrint
                trigger={() => <button
                    className={cls}
                    disabled={disabled}>
                    Export File
                </button>}
                content={() => ref.current}
                onAfterPrint={() => setToggled(true)}
                onPrintError={() => setToggled(false)}
                onBeforeGetContent={() => setToggled(true)}
                onBeforePrint={() => setToggled(false)}
            />
            <div style={{display:'none'}}><PrintLabel ref={ref} pckg={pckg} toggled={toggled}/></div>
        </span>
    );
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(PrintPaymentsButton);
