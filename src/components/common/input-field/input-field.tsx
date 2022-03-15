import React from "react";
import "./input-field.scss";
import { UseFormRegister } from "react-hook-form";
import { FormUser } from "../../../api/types";

interface Props {
  label: string;
  inputKey: keyof FormUser;
  register: UseFormRegister<FormUser>;
  required: boolean;
  isError: boolean;
  disabled: boolean;
  value?: string;
}

export const InputField: React.FC<Props> = ({
  label,
  register,
  required,
  isError,
  inputKey,
  value,
  disabled,
}) => {
  return (
    <div className={`input-field ${isError && `input-field--error`}`}>
      <label>{label}</label>
      <input
        value={value}
        disabled={disabled}
        {...register(inputKey, { required })}
      />
    </div>
  );
};
