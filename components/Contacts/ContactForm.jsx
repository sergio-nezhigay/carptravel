import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { schema } from '@helpers/schema';
import { yupResolver } from '@hookform/resolvers/yup';

import FormField from './FormField';

import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const formSpreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    try {
      const response = await fetch(formSpreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Your message sent successfully');
        setFormSubmitted(true);
      } else {
        toast.error('Error during sending message');
      }
    } catch (error) {
      toast.error('Error during sending message');
    }
  };

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-xs  font-extralight leading-6 tracking-[0.20em] md:grid md:grid-cols-[221px,auto] md:gap-5 xl:block xl:w-1/2">
        <div className="xl:flex xl:w-full xl:gap-5">
          <FormField
            label="Full name"
            name="name"
            register={register}
            errors={errors}
          />

          <FormField
            label="Email"
            name="email"
            register={register}
            errors={errors}
          />
        </div>
        <div>
          <FormField
            label="Message"
            name="message"
            register={register}
            errors={errors}
            textarea
          />
          <button
            type="submit"
            className="link ml-auto block text-[30px] font-medium leading-9 focus:outline-8 active:outline-2 xl:text-[32px]">
            SEND
          </button>
        </div>
      </form>
      {isFormSubmitted && (
        <div role="status" aria-live="polite" className="sr-only">
          Your message has been sent successfully
        </div>
      )}
    </>
  );
}
