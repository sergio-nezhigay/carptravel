"use client";
import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
require("dotenv").config();
import { schema } from "./helpers/schema";
import FormField from "./FormField";

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
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Your message sent successfully");
        setFormSubmitted(true);
      } else {
        toast.error("Error during sending message");
      }
    } catch (error) {
      toast.error("Error during sending message");
    }
  };

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="font-extralight  text-xs tracking-[0.20em] leading-6 md:grid md:grid-cols-[221px,auto] xl:block xl:w-1/2 md:gap-5"
      >
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
            className="link font-medium outline-none text-[30px] xl:text-[32px] leading-9 ml-auto block"
          >
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
