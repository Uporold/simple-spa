import React from "react";
import "./form.scss";
import { InputField } from "../common/input-field/input-field";
import { FormUser } from "../../api/types";
import { useForm } from "react-hook-form";
import { Textarea } from "../common/textarea/textarea";

interface Props {
  userData: FormUser;
  disabled: boolean;
}

export const Form: React.FC<Props> = ({ userData, disabled }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormUser>({
    defaultValues: userData,
  });
  const onSubmit = (data: FormUser) => console.log(JSON.stringify(data));

  return (
    <form
      className={`form${disabled ? ` form--disabled` : ""}`}
      id="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        label="Name"
        inputKey="name"
        register={register}
        required
        isError={!!errors.name}
        disabled={disabled}
      />
      <InputField
        label="User name"
        inputKey="username"
        register={register}
        required
        isError={!!errors.username}
        disabled={disabled}
      />
      <InputField
        label="E-mail"
        inputKey="email"
        register={register}
        required
        isError={!!errors.email}
        disabled={disabled}
      />
      <InputField
        label="Street"
        inputKey="street"
        register={register}
        required
        isError={!!errors.street}
        disabled={disabled}
      />
      <InputField
        label="City"
        inputKey="city"
        register={register}
        required
        isError={!!errors.city}
        disabled={disabled}
      />
      <InputField
        label="Zip code"
        inputKey="zipcode"
        register={register}
        required
        isError={!!errors.zipcode}
        disabled={disabled}
      />
      <InputField
        label="Phone"
        inputKey="phone"
        register={register}
        required
        isError={!!errors.phone}
        disabled={disabled}
      />
      <InputField
        label="Website"
        inputKey="website"
        register={register}
        required
        isError={!!errors.website}
        disabled={disabled}
      />
      <Textarea inputKey="comment" register={register} disabled={disabled} />
    </form>
  );
};
