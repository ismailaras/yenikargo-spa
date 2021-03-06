import React from 'react';
import NumberInput from "../../../toolbox/NumberInput";
import PasswordInput from "../../../toolbox/PasswordInput";

const SignInForm = ({onSubmit, values, errors, onChange, onBlur, isSubmitting, touched}) => {
    return (
        <div>
            <div className="container" style={{marginTop: 150}}>
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <strong style={{fontSize: 20}}><i className="fa fa-lock"/> Daxil ol</strong>
                            </div>
                            <div className="card-body">
                                <form onSubmit={onSubmit}>
                                    <NumberInput
                                        label="Əməkdaş pin kodu"
                                        placeHolder="4 rəqəmli pin kod"
                                        name="_id"
                                        touched={touched._id}
                                        onBlur={onBlur}
                                        onChange={onChange}
                                        error={errors._id}
                                        value={values._id}
                                    />
                                    <PasswordInput
                                        label="Şifrə"
                                        placeHolder="Şifrə"
                                        name="password"
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        touched={touched.password}
                                        error={errors.password}
                                        value={values.password}
                                    />
                                    <button
                                        className="btn btn-primary btn-block"
                                        disabled={isSubmitting}
                                        type="submit">Təsdiqlə
                                    </button>
                                </form>
                            </div>
                            <div className="card-footer text-center">
                                <span>© Yeni Kargo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInForm;