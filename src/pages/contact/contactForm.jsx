import { AnimatePresence, motion } from "framer-motion";
import { scaleAnim } from "../../utils/animation";
import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import * as yup from "yup";

const ContactForm = () => {
  const PUBLIC_KEY = "W0_1f7BwrmtsMtjAx";
  const TEMPLATE_ID = "template_la2t6vm";
  const SERVICE_ID = "service_r2ydv6h";
  const [message, setMessage] = useState("");

  const form = useRef();
  const schema = yup.object().shape({
    user_name: yup.string().required("Username is required"),
    user_phone: yup
      .string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Please enter a valid phone number")
      .min(10, "Phone number must be at least 10 digits"),
    subject: yup.string().required("Subject is required"),
    user_email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    message: yup.string().required("Message is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendEmail = async () => {
    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      );

      if (result.text === "OK") {
        setMessage("Sent email successfully");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      setMessage(error.message || "Error sending email");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      <div className="bg-white py-12 md:pb-16 lg:pb-24 px-6 md:px-12 lg:px-16 text-neutral-800 bg-white">
        <div className="w-full max-w-[1164px] mx-auto h-full">
          <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl capitalize font-black tracking-tight text-neutral-800 mb-3">
                Get In Touch
              </h3>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold max-w-[50rem] mx-auto text-neutral-600">
                Drop us a message, and we'll get back to you shortly
              </h1>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(sendEmail)}
            className="w-full mx-auto py-6 pt-12 relative"
            ref={form}
          >
            <div className="grid md:grid-cols-2 gap-6 w-full">
              <div className="w-full relative">
                <input
                  className={`${
                    errors.user_name ? "!outline-red-500" : ""
                  } bg-neutral-100 py-3 px-4 rounded-md w-full outline outline-1 outline-neutral-300 focus:outline-blue-500`}
                  type="text"
                  name="user_name"
                  {...register("user_name")}
                  placeholder="Full name"
                />
                <p className="absolute text-xs text-red-500">
                  {errors.user_name?.message}
                </p>
              </div>

              <div className="w-full relative">
                <input
                  className={`${
                    errors.user_phone ? "!outline-red-500" : ""
                  } bg-neutral-100 py-3 px-4 rounded-md w-full outline outline-1 outline-neutral-300 focus:outline-blue-500`}
                  type="tel"
                  name="user_phone"
                  {...register("user_phone")}
                  placeholder="Phone number"
                />
                <p className="absolute text-xs text-red-500">
                  {errors.user_phone?.message}
                </p>
              </div>
              <div className="w-full relative">
                <input
                  className={`${
                    errors.subject ? "!outline-red-500" : ""
                  } bg-neutral-100 py-3 px-4 rounded-md w-full outline outline-1 outline-neutral-300 focus:outline-blue-500`}
                  type="text"
                  id="subject"
                  name="subject"
                  {...register("subject")}
                  placeholder="Subject"
                />
                <p className="absolute text-xs text-red-500">
                  {errors.subject?.message}
                </p>
              </div>
              <div className="w-full relative">
                <input
                  className={`${
                    errors.user_email ? "!outline-red-500" : ""
                  } bg-neutral-100 py-3 px-4 rounded-md w-full outline outline-1 outline-neutral-300 focus:outline-blue-500`}
                  type="email"
                  id="email"
                  name="user_email"
                  {...register("user_email")}
                  placeholder="Email"
                />
                <p className="absolute text-xs text-red-500">
                  {errors.user_email?.message}
                </p>
              </div>
              <div className="w-full relative col-span-full">
                <textarea
                  className={`${
                    errors.message ? "!outline-red-500" : ""
                  } bg-neutral-100 py-3 px-4 rounded-md w-full outline outline-1 outline-neutral-300 focus:outline-blue-500`}
                  id="message"
                  name="message"
                  {...register("message")}
                  placeholder="Message"
                  rows={7}
                ></textarea>
                <p className="absolute text-xs text-red-500">
                  {errors.message?.message}
                </p>
              </div>
              {message && (
                <motion.p
                  className="absolute bottom-[5rem] text-lg text-green-700 font-semibold text-center w-full"
                  initial="hidden"
                  animate={message ? "visible" : "hidden"}
                  exit="hidden"
                  variants={scaleAnim(0, 0.2)}
                  key="message"
                >
                  {message}
                </motion.p>
              )}
              <input
                className="relative transform transition duration-100 bg-blue-500 text-blue-100 rounded-full py-3 px-10 cursor-pointer capitalize  mx-auto col-span-full hover:scale-[1.02] mt-4"
                type="submit"
                value="Send message"
              />
            </div>
          </form>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ContactForm;
