import React, {useRef, useState} from 'react';

const IncreaseDecreaseInput = ({name, onChange}) => {
    const ref = useRef(null);
    const [val, setVal] = useState(0);

    async function increaseValue() {
        await setVal(val + 1);
        triggerInput(val);
    }

    async function decreaseValue() {
        if (val !== 0) {
            await setVal(val - 1);
            triggerInput(val);
        }
    }

    function triggerInput(enteredValue) {
        const input = ref.current;
        const lastValue = input.value;
        input.value = enteredValue;
        const event = new Event("input", {bubbles: true});
        const tracker = input._valueTracker;
        if (tracker) {
            tracker.setValue(lastValue);
        }
        input.dispatchEvent(event);
        onChange(event)
    }

    return (
        <div className="form-group">
            <div className="input-group mb-2 input-group-sm">
                <div className="input-group-prepend">
                    <button onClick={() => decreaseValue()} className="btn btn-sm btn-primary">-</button>
                </div>
                <input
                    style={{maxWidth: 26.5, border: '1px solid #325d88', padding: 0, textAlign: 'center'}}
                    type="number"
                    className="form-control"
                    name={name}
                    id={'id' + name}
                    value={val}
                    ref={ref}
                    readOnly={true}
                    onChange={onChange}
                />
                <div className="input-group-prepend" style={{marginLeft: -1}}>
                    <button className="btn btn-sm btn-primary"
                            onClick={() => increaseValue()}
                            style={{borderTopRightRadius: 3, borderBottomRightRadius: 3}}>+
                    </button>
                </div>
            </div>
        </div>
    )
}

export default IncreaseDecreaseInput;