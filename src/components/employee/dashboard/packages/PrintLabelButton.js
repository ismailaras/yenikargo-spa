import React, {useRef, useState, useEffect} from "react";
import ReactToPrint from "react-to-print";
import Label from "./Label";
import {connect} from "react-redux";
import {getStations} from "../../../../redux/actions/stationActions";

const PrintLabelButton = ({pckg, disabled, cls, stations, getStations}) => {
    useEffect(() => {
        if (stations.length === 0) {
            getStations();
        }
    })
    const ref = useRef()
    const [toggled, setToggled] = useState(true);
    return (
        <span>
            <ReactToPrint
                trigger={() => <button
                    className={cls}
                    disabled={disabled}>
                    Qaimə
                </button>}
                content={() => ref.current}
                onAfterPrint={() => setToggled(false)}
                onPrintError={() => setToggled(true)}
                onBeforeGetContent={() => setToggled(false)}
                onBeforePrint={() => setToggled(true)}
            />
            <div style={{display:'none'}}><Label ref={ref} pckg={pckg} toggled={toggled} stations={stations}/></div>
        </span>
    );
}


const mapStateToProps = state => ({
    stations: state.getStationsReducer
});

const mapDispatchToProps = {
    getStations
};

export default connect(mapStateToProps, mapDispatchToProps)(PrintLabelButton);
