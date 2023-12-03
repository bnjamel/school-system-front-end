import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Typography } from "@material-tailwind/react";

export default function CustomInput({
  control,
  name,
  rules,
  label,
  type,
  placeholder,
  error,
}) {
  return (
    <>
      <Typography
        dir="rtl"
        variant="h6"
        color="white"
        className="pb-2 font-cairoRegular"
      >
        {label}
      </Typography>
      <Controller
        control={control}
        rules={rules}
        name={name}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            <Input
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              containerProps={{
                className: "min-w-0",
              }}
              type={type}
              size="lg"
              dir="rtl"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              className="text-black bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
            />
            {error && <h1 className="font-bold pt-2">{error.message}</h1>}
          </>
        )}
      />
    </>
  );
}
