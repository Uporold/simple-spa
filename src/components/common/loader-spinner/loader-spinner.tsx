import React from "react";
import "./loader-spinner.scss";
import { Watch } from "react-loader-spinner";

export const LoaderSpinner = () => {
  return (
    <div className="loader-spinner__container">
      <Watch color="#4B51EF" height={100} width={100} />
    </div>
  );
};
