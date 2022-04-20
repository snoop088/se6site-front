import classNames from "classnames";
import React, { ReactElement } from "react";
import styles from "./funky-checkbox.module.scss";

type FunkyCheckboxProps = React.ComponentPropsWithRef<"input"> & {
  icon: ReactElement;
  label: string;
  boxClass?: string;
  boxCheckedClass?: string;
  labelClass?: string;
};

export const FunkyCheckbox = React.forwardRef<
  HTMLInputElement,
  FunkyCheckboxProps
>(
  (
    {
      icon,
      label,
      className,
      checked,
      boxClass,
      labelClass,
      boxCheckedClass,
      ...otherProps
    }: FunkyCheckboxProps,
    ref
  ) => {
    return (
      <label className={styles.container}>
        <span className={styles.boxContainer}>
          <span
            aria-hidden="true"
            className={classNames([
              styles.box,
              boxClass,
              boxCheckedClass
                ? { [boxCheckedClass]: checked }
                : { [styles.checked]: checked },
            ])}
          >
            {checked && icon}
          </span>
        </span>
        <span className={classNames([styles.label, labelClass])}>{label}</span>
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          {...otherProps}
          className={styles.hiddenCheckbox}
        />
      </label>
    );
  }
);
FunkyCheckbox.displayName = "FunkyCheckbox";
