import classNames from "classnames";
import { useSelectedItems } from "hooks/use-selected-items";
import { SyntheticEvent, useEffect, useState } from "react";
import {
  Control,
  FieldPath,
  Path,
  RegisterOptions,
  useController,
} from "react-hook-form";

import styles from "./checkbox-group.module.scss";

export interface ICheckbox {
  label: string;
  value: string;
  disabled?: boolean;
}
/* eslint-disable-next-line */
export interface StreameyeCheckboxGroupProps<T> {
  control: Control<T>;
  name: FieldPath<T>;
  checks: ICheckbox[];
  columnWidth?: string;
  rules?: Exclude<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
  errorMessage?: string;
  helperText?: string;
}

export function CheckboxGroup<T>(props: StreameyeCheckboxGroupProps<T>) {
  const { name, control, checks, errorMessage, helperText, columnWidth } =
    props;
  const getColumnWidthStyle = columnWidth
    ? `repeat(auto-fit, minmax(${columnWidth}, 1fr))`
    : "";
  const { field } = useController({ name, control });
  const { selected, setSelected, toggle, selectAll, isSelected } =
    useSelectedItems(
      checks.map((check) => check.value),
      undefined,
      field.value as string[]
    );

  useEffect(() => {
    const checkValues = checks.map((check) => check.value);
    const selectedValues = selected.filter((val) => {
      return checkValues.includes(val);
    });
    setSelected(selectedValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checks]);

  useEffect(() => {
    field.onChange(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const handleChange = (event: SyntheticEvent) => {
    const element: HTMLInputElement = event.target as HTMLInputElement;
    toggle(element.value);
  };
  return (
    <div className={styles.container}>
      <div
        className={classNames([
          styles.checkContainer,
          { [styles.checkGridContainer]: columnWidth },
        ])}
        style={
          getColumnWidthStyle
            ? { gridTemplateColumns: getColumnWidthStyle }
            : {}
        }
      >
        {checks.map((check, i) => (
          <span key={check.value} className={styles.check}>
            <input
              type="checkbox"
              checked={isSelected(check.value)}
              value={check.value}
              onChange={handleChange}
              id={name + i}
            />
            <label htmlFor={name + i}>{check.label}</label>
          </span>
        ))}
      </div>
      {(errorMessage || helperText) && <div>{helperText ?? errorMessage}</div>}
      {errorMessage && helperText && (
        <div className="error">{errorMessage}</div>
      )}{" "}
      <div className={styles.helper}>{helperText}</div>
    </div>
  );
}

export default CheckboxGroup;
