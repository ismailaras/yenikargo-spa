import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import SignInForm from "./SignInForm";
import * as authActions from '../../../../redux/actions/authActions'
import {useFormik} from "formik";
import {signInFormValidationSchema} from '../../../../utilities/formValidationSchemas';
import {Routes} from "../../../../routes";

const SignIn = ({auth, signIn, history}) => {
    useEffect(() => {
        if (auth.isAuthenticated) {
            history.push(Routes.dashboard);
        }
    }, [auth.isAuthenticated, history]);

    const {handleSubmit, handleChange, values, errors, handleBlur, isSubmitting, touched} = useFormik({
        initialValues: {_id: '', password: ''},
        validationSchema: signInFormValidationSchema,
        onSubmit: (values, {setSubmitting}) => {
            signIn(values, history);
            setSubmitting(false);
        }
    });
    return (
        <SignInForm
            onChange={handleChange}
            touched={touched}
            onBlur={handleBlur}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
            values={values}
            errors={errors}
        />
    )
}

const mapDispatchToProps = {signIn: authActions.signIn}

const mapStateToProps = state => ({auth: state.authReducer})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);