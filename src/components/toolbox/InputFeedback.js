import React from "react";

export const InputFeedback = ({error}) => error
    ? <div className="text-danger"><small><i className="fa fa-exclamation-circle"/> {error}</small></div>
    : null;