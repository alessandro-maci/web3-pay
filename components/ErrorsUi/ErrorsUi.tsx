import React from "react";

type IErrorsUiProps = {
  errorMsg: string;
};

const defaultProps = {};

const ErrorsUi: React.FC<IErrorsUiProps> = (props) => {
  const { errorMsg } = props;

  return errorMsg ? (
    <div
      style={{ backgroundColor: "rgba(255,255,255, 0.3)" }}
      className="border-white border rounded-xl"
    >
      <div className="px-4 py-2 font-base text-sm">
        {"⚠️ "}
        {errorMsg}
      </div>
    </div>
  ) : null;
};

ErrorsUi.defaultProps = defaultProps;

export default ErrorsUi;
