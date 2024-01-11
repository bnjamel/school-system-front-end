import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Typography } from "@material-tailwind/react";
import { HiOutlineUpload } from "react-icons/hi";

const types = ["image/png", "image/jpeg"];

export default function CustomInput({
  control,
  name,
  rules,
  label,
  type,
  placeholder,
  error,
  max,
  options,
  min,
  defaultV,
  disabled,
}) {
  const inputView = (type, value, onChange, onBlur) => {
    switch (type) {
      case "select":
        return (
          <select
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className="w-full px-4 text-right py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-300"
            name={name}
            defaultChecked={defaultV}
            defaultValue={defaultV}
            // defaultValue={defaultV}
          >
            <option value="">{placeholder}</option>
            {options.map((option) => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        );

      case "number":
        return (
          <Input
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            containerProps={{
              className: "min-w-0",
            }}
            defaultValue={defaultV}
            min={min}
            type={type}
            name={name}
            size="lg"
            dir="rtl"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className="w-full px-4 text-right py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-300"
            // className="text-black text-right bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
          />
        );

      case "date":
        return (
          <Input
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            containerProps={{
              className: "min-w-0",
            }}
            max={max}
            type={type}
            name={name}
            size="lg"
            dir="rtl"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className="w-full px-4 text-right py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-300"
            // className="text-black text-right bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
          />
        );

      case "textArea":
        return (
          <textarea
            className="w-full lg:w-full rounded-lg border-gray-400 border align-top shadow-sm sm:text-sm p-4 max-h-[400px] min-h-[200px] focus:border-dark-100 outline-none focus:border-transparent transition ease-in-out"
            rows="8"
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            type={type}
          ></textarea>
        );

      case "password":
        return (
          <Input
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            containerProps={{
              className: "min-w-0",
            }}
            type={type}
            name={name}
            size="lg"
            dir="rtl"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className="w-full px-4 text-right py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-300"
            // className="text-black text-right bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
          />
        );

      default:
        return (
          <Input
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            containerProps={{
              className: "min-w-0",
            }}
            type={"text"}
            name={name}
            size="lg"
            dir="rtl"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            className="w-full px-4 text-right py-2 mt-2 text-gray-900 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-gray-300"
            // className="text-black text-right bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
          />
        );
    }
  };

  return (
    <>
      {label && (
        <Typography
          dir="rtl"
          variant="h6"
          color="white"
          className="font-cairoRegular mix-blend- text-black mt-6"
        >
          {label}
        </Typography>
      )}
      <Controller
        control={control}
        rules={rules}
        name={name}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <>
            {inputView(type, value, onChange, onBlur)}
            {error && (
              <h1 className="font-bold pt-2 text-green-800 mix-blend-difference">
                {error.message}
              </h1>
            )}
          </>
        )}
      />
    </>
  );
}
