import React from 'react';
import NumberInput from "../../../toolbox/NumberInput";
import PasswordInput from "../../../toolbox/PasswordInput";

const SignIn = ({onSubmit, employeeCredentials, errors, onChange}) => {
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
                                        name="employeeId"
                                        onChange={onChange}
                                        error={errors.employeeId}
                                        value={employeeCredentials.employeeId}
                                    />
                                    <PasswordInput
                                        label="Şifrə"
                                        placeHolder="Şifrə"
                                        name="employeePassword"
                                        onChange={onChange}
                                        error={errors.employeePassword}
                                        value={employeeCredentials.employeePassword}
                                    />
                                    <button className="btn btn-primary btn-block" type="submit">Təsdiqlə</button>
                                </form>
                            </div>
                            <div className="card-footer text-center">
                                <span>© Yeni Kargo MMC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;