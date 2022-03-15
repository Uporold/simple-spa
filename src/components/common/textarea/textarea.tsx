import React from "react";
import "./textarea.scss";
import { UseFormRegister } from "react-hook-form";
import { FormUser } from "../../../api/types";

interface Props {
  register: UseFormRegister<FormUser>;
  inputKey: keyof FormUser;
  disabled: boolean;
}
export const Textarea: React.FC<Props> = ({ register, inputKey, disabled }) => {
  return (
    <div className="textarea">
      <p className="textarea__label">Comment</p>
      <textarea {...register(inputKey)} disabled={disabled} />
    </div>
  );
};
