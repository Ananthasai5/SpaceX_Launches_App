import React from "react";
import { useField } from "formik";
import "./checkbox.scss";
import classNames from "classnames";

interface IProps {
  id: string;
  label: string;
  className?: string;
  customClass?: string;
  name: string;
  value: string | boolean;
}

export default function Checkbox({ id, label, className, value, customClass, ...props }: IProps): React.ReactElement {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;
  const error = meta.error;

  const wrapperClass = classNames("checkbox", className, {
    "error-inp": hasError
  });
  return (
    <div className={wrapperClass}>
      <label htmlFor={id}>{label} </label>
      <input type="checkbox" id={id} value={field.value} name={field.name} {...field} {...props} />
      {hasError ? <div className="error">{error}</div> : null}
    </div>
  );
}
