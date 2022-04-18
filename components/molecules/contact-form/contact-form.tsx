import styles from "./contact-form.module.scss";
import { useForm } from "react-hook-form";
import CheckboxGroup from "@/components/atoms/checkbox-group/checkbox-group";
import classNames from "classnames";
import Button from "../Button/Button";
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
    getValues,
    control,
    formState: { errors, isValid },
  } = useForm<ContactData>({
    mode: "onChange",
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
        <h3>{interests.title}</h3>
        <div className={classNames([styles.interests, styles.twoCols])}>
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
        <h3 className={styles.twoCols}>Your details</h3>

        <div className={styles.formInput}>
          <label htmlFor="name">
            Your name
            {errors?.name && (
              <span className={styles.error}>{errors.name.message}</span>
            )}
          </label>
          <input
            className={classNames({
              [styles.filled]: getValues("name")?.length,
            })}
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
            className={classNames({
              [styles.filled]: getValues("email")?.length,
            })}
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
          <input
            className={classNames({
              [styles.filled]: getValues("phone")?.length,
            })}
            id="phone"
            type="text"
            {...register("phone")}
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="company">Company</label>
          <input
            className={classNames({
              [styles.filled]: getValues("company")?.length,
            })}
            id="company"
            type="text"
            {...register("company")}
          />
        </div>
        <div
          className={classNames([
            styles.formInput,
            styles.twoCols,
            { [styles.filled]: getValues("message")?.length },
          ])}
        >
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
