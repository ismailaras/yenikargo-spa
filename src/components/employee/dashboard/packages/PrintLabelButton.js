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
    const ref = useRef(null)
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
                onAfterPrint={() => setToggled(true)}
                onPrintError={() => setToggled(true)}
                onBeforeGetContent={() => setToggled(false)}
                onBeforePrint={() => setToggled(true)}
            />
            <Label ref={ref} pckg={pckg} toggled={toggled} stations={stations}/>
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
