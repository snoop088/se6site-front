import Icon from "@/components/atoms/Icon/Icon";
import classNames from "classnames";

import styles from "./Button.module.scss";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  icon?: string;
  iconPosition?: "pre" | "post";
  variant?: "white" | "green";
  elevated?: boolean;
};

const Button = ({
  title,
  icon,
  iconPosition = "post",
  type,
  variant = "white",
  elevated,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={classNames([
        styles.button,
        styles[variant + "Variant"],
        { [styles.elevated]: elevated },
      ])}
      onClick={onClick}
    >
      {icon && iconPosition === "pre" && (
        <Icon icon={icon} className={styles.icon} />
      )}
      {title}
      {icon && iconPosition === "post" && (
        <Icon icon={icon} className={styles.icon} />
      )}
    </button>
  );
};

export default Button;
