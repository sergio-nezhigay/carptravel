import React from 'react';

const FormField = ({ label, name, register, errors, textarea }) => (
  <div className="mb-4 xl:basis-1/2 ">
    <label
      className={`mb-1 block ${
        errors[name]
          ? 'text-error focus:text-error'
          : 'text-white focus:text-white'
      }`}
      htmlFor={name}>
      {label}
    </label>
    {textarea ? (
      <textarea
        {...register(name)}
        aria-invalid={errors[name] ? 'true' : 'false'}
        id={name}
        className={`h-[193px] w-full resize-none px-2 py-1.5 text-xl md:h-[221px] xl:h-[174px] ${
          errors[name]
            ? 'text-error focus:text-error'
            : 'text-white text-opacity-20 focus:text-white'
        } bg-white bg-opacity-5 focus:text-white`}
      />
    ) : (
      <input
        {...register(name)}
        id={name}
        aria-invalid={errors[name] ? 'true' : 'false'}
        className={`w-full px-2 py-1.5 text-xl ${
          errors[name]
            ? 'text-error focus:text-error'
            : 'text-white text-opacity-20 focus:text-white'
        } bg-white bg-opacity-5 focus:text-white`}
      />
    )}
    {errors[name] && (
      <p role="alert" className="ml-auto w-fit text-error">
        {errors[name].message}
      </p>
    )}
  </div>
);

export default FormField;
