// import React, { useEffect } from "react";
// import { getStations } from "../../../../redux/actions/stationActions";
// import {
//   createCourier,
//   selectCouriers,
//   updateCourier,
// } from "../../../../redux/actions/courierActions";
// import { connect } from "react-redux";
// import { useFormik } from "formik";
// import { notEmpty } from "../../../../utilities/helpers";
// import { createOrUpdateCourierFormValidationSchema } from "../../../../utilities/formValidationSchemas";

// const SetPackageStatus = ({
//   createCourier,
//   updateCourier,
//   stations,
//   getStations,
//   selectedCouriers,
//   auth,
//   selectedPackages,
// }) => {
//   useEffect(() => {
//     if (stations.length === 0) {
//       getStations();
//     }
//   });
//   let initialValues = {
//     package_ids: selectedPackages.allSelectedPackages.map((p) => p.id),
//     tracking_state: "",
//   };
//   if (notEmpty(selectedCouriers.lastSelectedCourier)) {
//     initialValues = selectedCouriers.lastSelectedCourier;
//   }
// //   const {
// //     // handleSubmit,handleChange,values,errors,touched,handleBlur,isSubmitting,
// //   } = useFormik({
// //     initialValues,
// //     validationSchema: createOrUpdateCourierFormValidationSchema,
// //     onSubmit: (values, { setSubmitting }) => {
// //       values.is_partner = values.discount > 0;
// //       values.id
// //         ? updateCourier(values, selectedCouriers.lastSelectedCourier)
// //         : createCourier(values, selectedPackages.allSelectedPackages);
// //       setSubmitting(false);
// //     },
// //   });
//   return (
//     <form >
//       <SelectInput
//         value={values.keyword}
//         name="keyword"
//         // options={iterTrackingStates().map((trackingStateObj) => ({
//         //   value: trackingStateObj.value,
//         //   text: trackingStateObj.name,
//         // }))}
//         label="Bağlama statusu"
//         defaultOption="Status seçin"
//         touched={touched.keyword}
//         error={errors.keyword}
//         onChange={onChange}
//         onBlur={onBlur}
//       />
//       <div className="card-footer">
//         <button
//           className="btn btn-primary"
//           type="submit"
//         //   disabled={isSubmitting}
//         >
//           <i className="fa fa-search" />
//           <span> Təsdiqlə</span>
//         </button>
//       </div>
//     </form>
//   );
// };

// const mapDispatchToProps = {
//   getStations,
//   selectCouriers,
//   createCourier,
//   updateCourier,
// };

// const mapStateToProps = (state) => ({
//   selectedCouriers: state.selectCouriersReducer,
//   selectedPackages: state.selectPackagesReducer,
//   stations: state.getStationsReducer,
//   auth: state.authReducer,
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SetPackageStatus);
