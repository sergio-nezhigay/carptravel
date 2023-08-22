import React from "react";

const FormField = ({ label, name, register, errors, textarea }) => (
  <div className="mb-4 xl:basis-1/2 ">
    <label
      className={`block mb-1 ${
        errors[name]
          ? "text-error focus:text-error"
          : "text-white focus:text-white"
      }`}
      htmlFor={name}
    >
      {label}
    </label>
    {textarea ? (
      <textarea
        {...register(name)}
        aria-invalid={errors[name] ? "true" : "false"}
        id={name}
        className={`w-full h-[193px] md:h-[221px] xl:h-[174px] resize-none px-2 py-1.5 text-xl focus:outline-none ${
          errors[name]
            ? "text-error focus:text-error"
            : "text-white text-opacity-20 focus:text-white"
        } focus:text-white bg-white bg-opacity-5`}
      />
    ) : (
      <input
        {...register(name)}
        id={name}
        aria-invalid={errors[name] ? "true" : "false"}
        className={`w-full px-2 py-1.5 text-xl focus:outline-none ${
          errors[name]
            ? "text-error focus:text-error"
            : "text-white text-opacity-20 focus:text-white"
        } focus:text-white bg-white bg-opacity-5`}
      />
    )}
    {errors[name] && (
      <p className="text-error w-fit ml-auto">{errors[name].message}</p>
    )}
  </div>
);

export default FormField;
