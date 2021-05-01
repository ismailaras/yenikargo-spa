import React, { useEffect, useState } from "react";
import NumberInput from "../../../toolbox/NumberInput";
import SelectInput from "../../../toolbox/SelectInput";
import { connect } from "react-redux";
import { getStations } from "../../../../redux/actions/stationActions";
import { setTariffInterval } from "../../../../redux/actions/tariffActions";
import { Alert } from "reactstrap";

const Calculator = ({ stations, setTariffInterval, setTariffData }) => {
  const [weight, setWeight] = useState("");
  const [amount, setAmount] = useState("");
  const [sender_station_id, setSender_station_id] = useState("");
  const [receiver_station_id, setReceiver_station_id] = useState("");

  useEffect(() => {
    function setPriceFunc() {
      if (sender_station_id && receiver_station_id) {
        if (sender_station_id === receiver_station_id) {
          return null;
        } else {
          const sendStationID = {
            sender_station_id: sender_station_id,
            receiver_station_id: receiver_station_id,
          };
          setTariffInterval(sendStationID);
        }
      }
    }
    setPriceFunc();
  }, [setTariffInterval, receiver_station_id, sender_station_id]);

  console.log(setTariffData);
  useEffect(() => {
    function setPrice() {
      if (weight >= 0 && weight <= 1) {
        setAmount(2);
      } else if (weight > 1 && weight <= 3) {
        setAmount(3);
      } else if (weight > 3 && weight <= 5) {
        setAmount(4);
      } else if (weight > 5 && weight <= 10) {
        setAmount(5);
      } else if (weight > 10 && weight <= 10000) {
        setAmount(weight * 0.5);
      }

      setTariffData.map((t) => {
        if (weight > t.from_kg && weight <= t.to_kg) {
          setAmount(t.price);
        }
        if (t.price_per_kg > 0 && weight > t.price_per_kg) {
          setAmount(weight * t.price);
        }
      });
    }
    setPrice();
  }, [setTariffData, weight]);

  return (
    <div>
      <form>
        <div className="form-row">
          <div className="col-md-6">
            <SelectInput
              name="sender_station_id"
              options={stations.map((station) => ({
                value: station.id,
                text: station.name,
              }))}
              label="Göndərən Filial"
              defaultOption="Filial seçin"
              onChange={(e) => setSender_station_id(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <SelectInput
              name="receiver_station_id"
              options={stations.map((station) => ({
                value: station.id,
                text: station.name,
              }))}
              label="Alan Filial"
              defaultOption="Filial seçin"
              onChange={(e) => setReceiver_station_id(e.target.value)}
            />
          </div>
          {sender_station_id === receiver_station_id && (
            <Alert color="danger">
              Göndərən və alan filial fərqli olmalıdır
            </Alert>
          )}
        </div>
        <div className="form-row">
          <div className="col-md-6">
            <NumberInput
              label="Çəki (KQ)"
              placeHolder="Çəki"
              name="weight"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label>Daşınma haqqı</label>
            <div className="form-control bg-success text-white">
              {Number(amount).toFixed(2)} AZN
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  getStations,
  setTariffInterval,
};

const mapStateToProps = (state) => ({
  stations: state.getStationsReducer,
  setTariffData: state.setTariffReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
