import styles from "./contact-form.module.scss";
import { useForm } from "react-hook-form";
import CheckboxGroup from "@/components/atoms/checkbox-group/checkbox-group";
import classNames from "classnames";
import Button from "../Button/Button";
import { FunkyCheckbox } from "@/components/atoms/funky-checkbox/funky-checkbox";
import Icon from "@/components/atoms/Icon/Icon";
interface ContactData {
  name: string;
  company: string;
  interests: string[];
  email: string;
  phone: string;
  message: string;
}
interface ContactFormProps {
  interests: { title: string; values: string[] };
}
export const ContactForm = ({ interests }: ContactFormProps) => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isValid },
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
    console.log(formValue);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className={classNames([styles.interests, styles.twoCols])}>
          <h4>{interests.title}</h4>
          <CheckboxGroup
            columnWidth="10rem"
            control={control}
            name="interests"
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
        <div className={classNames([styles.action, styles.twoCols])}>
          <Button
            title="Send"
            variant="green"
            type="submit"
            disabled={!isValid}
          />
        </div>
      </form>
    </div>
  );
};
