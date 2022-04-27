import React, { useState } from "react";
import styles from "./contact-form.module.scss";
import { useForm } from "react-hook-form";
import CheckboxGroup from "@/components/atoms/checkbox-group/checkbox-group";
import classNames from "classnames";
import Button from "../Button/Button";
// import { FunkyCheckbox } from "@/components/atoms/funky-checkbox/funky-checkbox";
// import Icon from "@/components/atoms/Icon/Icon";

interface ContactData {
  name: string;
  company: string;
  interests: string[] | string;
  email: string;
  phone: string;
  message: string;
}
interface ContactFormProps {
  interests: { title: string; values: string[] };
}
export const ContactForm = ({ interests }: ContactFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  // Encoding function to format the form data for Netlify
  const encode = (data: { [key: string]: any }) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ContactData>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {
      name: "",
      company: "",
      interests: [],
      email: "",
      phone: "",
      message: "",
    },
  });
  const submitForm = (formValue: ContactData) => {
    // Submit is handled by the Netlify robots on the root url "/"
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formValue }),
    })
      .then((data) => {
        console.log(data);
        if (data.status == 200) {
          console.log("Success:", data);
          setSubmitted(true);
        } else {
          console.log("Error:", data);
        }
      })
      .catch((error) => console.log("Error: ", error));
  };

  return (
    <div className={styles.container}>
      {submitted ? (
        <div>
          <h2>Thank you for contacting us!</h2>
          <p>We will be in touch with you shortly.</p>
        </div>
      ) : (
        <form
          name="contact"
          onSubmit={handleSubmit(submitForm)}
          data-netlify="true"
          data-netlify-recaptcha="true"
          data-netlify-honeypot="bot-field"
        >
          <div className={classNames([styles.interests, styles.twoCols])}>
            <h4>{interests.title}</h4>
            <CheckboxGroup
              columnWidth="10rem"
              control={control}
              name="interests" // Netlify Form doesn't detect this so I have added a hidden input at the end of the form
              checks={interests.values.map((interest) => ({
                label: interest,
                value: interest,
              }))}
            />
          </div>

          <div className={styles.formInput}>
            <label htmlFor="name">
              Your name
              {errors?.name && (
                <span className={styles.error}>{errors.name.message}</span>
              )}
            </label>
            <input
              id="name"
              type="text"
              {...register("name", {
                required: "Please enter your name",
              })}
            />
          </div>
          <div className={styles.formInput}>
            <label htmlFor="email">
              Email
              {errors?.email && (
                <span className={styles.error}>{errors.email.message}</span>
              )}
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Email format is not valid",
                },
              })}
            />
          </div>
          <div className={styles.formInput}>
            <label htmlFor="phone">Phone</label>
            <input id="phone" type="text" {...register("phone")} />
          </div>
          <div className={styles.formInput}>
            <label htmlFor="company">Company</label>
            <input id="company" type="text" {...register("company")} />
          </div>
          <div className={classNames([styles.formInput, styles.twoCols])}>
            <label htmlFor="message">
              Tell us about your project
              {errors?.message && (
                <span className={styles.error}>{errors.message.message}</span>
              )}
            </label>
            <textarea
              id="message"
              {...register("message", {
                required: "Please describe your project below",
              })}
            ></textarea>
          </div>
          <div data-netlify-recaptcha="true" />
          <div className={classNames([styles.action, styles.twoCols])}>
            <Button
              title="Send"
              variant="green"
              type="submit"
              disabled={!isValid || isSubmitting}
            />
          </div>
          <input type="hidden" name="interests" />
          <input type="hidden" name="form-name" value="contact" />
        </form>
      )}
    </div>
  );
};
