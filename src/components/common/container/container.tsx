import React from "react";
import "./container.scss";

export const Container: React.FC = ({ children }) => {
  return <div className="container">{children}</div>;
};
