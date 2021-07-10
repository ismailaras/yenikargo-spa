import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Navi from "../common/Navi";
import {useSelector, useDispatch} from 'react-redux';
import SelectInput from "../../../toolbox/SelectInput";
import DatePicker from 'react-datepicker';
import {formatDate, formatPrice, notEmpty} from '../../../../utilities/helpers';
import {useFormik} from "formik";
import "react-datepicker/dist/react-datepicker.css";
import {iterPaymentMethods} from '../../../../enums/paymentMethodEnum';
import {getReportExcelData} from '../../../../services/paymentService';
import {getStations} from '../../../../redux/actions/stationActions';
export const ReportExcel = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.authReducer);
    const stations = useSelector(state => state.getStationsReducer);
    useEffect(() => {
        if (stations.length === 0) dispatch(getStations());
    });
    const initialValues = {
        startDate: null,
        endDate: null,
        station_id: '',
        method: ''
    }
    const exportCSV = () => {
        const items = data.map(d => {
            d.amount = formatPrice('AZN').format(d.amount);
            d.created_date = formatDate(d.created_date);
            return d;
        });
        const replacer = (key, value) => value === null ? '' : value
        const header = Object.keys(items[0]);
        const csv = [
          header.join(','),
          ...items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
        ].join('\r\n');
        download(csv);
      }
    
    const download = (csv) => {
        const hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'report.csv';
        hiddenElement.click();
      }
    const [data, setData] = useState([]);
    const {
        handleSubmit,
        handleChange,
        values,
        errors,
        touched,
        setFieldTouched,
        handleBlur,
        setFieldValue,
        isSubmitting,
    } = useFormik({
        initialValues,
        enableReinitialize: true,
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(true)
            values.method = Number(values.method);
            getReportExcelData(values).then(d => {
                setData(JSON.parse(d));
                exportCSV();
                setSubmitting(false);
            }).catch(err =>  {
                setSubmitting(false)
            });
        },
    });
    return <div>
    <Navi/>
    <Container fluid={false}>
        <Row>
            {!auth.currentEmployee.is_operator_admin ?
            <Col md={12} className="mb-3">
                <div className="card mb-3">
            <div className="card-body">
                <h3>Hesabat Excel</h3>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-3">
                            <label htmlFor='date-range'>Tarix aralığı</label>
                            <DatePicker
                                selectsRange={true}
                                startDate={values.startDate}
                                endDate={values.endDate}
                                id="date-range"
                                placeholderText='Tarix aralığı seçin'
                                className="form-control"
                                onChange={update => {
                                    setFieldValue('startDate', update[0]);
                                    setFieldTouched('startDate', true);
                                    setFieldValue('endDate', update[1]);
                                    setFieldTouched('endDate', true);
                                }}
                                withPortal
                            />
                        </div>
                        <div className="col-3">
                        <SelectInput
                            label="Filial"
                            placeHolder="Filial"
                            name="station_id"
                            options={stations.map((station) => ({
                                value: station.id,
                                text: station.name,
                            }))}
                            defaultOption="Filial seçin"
                            value={values.station_id}
                            error={errors.station_id}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            touched={touched.station_id}
                        />
                        </div>
                        <div className="col-3">
                        <SelectInput
                            label="Ödəniş yolu"
                            placeHolder="Ödəniş yolu"
                            name="method"
                            options={iterPaymentMethods().map(m => ({
                                value: m.value,
                                text: m.name,
                            }))}
                            defaultOption="Ödəniş yolu seçin"
                            value={values.method}
                            error={errors.method}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            touched={touched.method}
                        />
                        </div>
                        <div className="col-2 align-self-center" style={{marginTop:12}}>
                            <button type="submit" className="btn btn-secondary"
                                disabled={isSubmitting || !notEmpty(values.startDate)
                                    || !notEmpty(values.endDate) || !notEmpty(values.station_id) || !notEmpty(values.method)}>
                                         
                                <i className={isSubmitting ? 'fa fa-spinner fa-spin' : "fa fa-search"}/>
                                <span className="ml-2">Axtar</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
            </Col> : null}
        </Row>
    </Container>
</div>
}