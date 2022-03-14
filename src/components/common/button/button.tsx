import React from "react";
import "./button.scss";

interface Props {
  className: string;
  type: "submit" | "reset" | "button" | undefined;
  content: string;
  form?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  className,
  type,
  content,
  form,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={className}
      form={form}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};
