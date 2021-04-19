import React from "react";
import { useField } from "formik";
import "./radio.scss";
import classNames from "classnames";

interface IProps {
  id: string;
  label: string;
  className?: string;
  customClass?: string;
  name: string;
  value: string;
}

export default function Radio({ id, label, className, customClass, ...props }: IProps): React.ReactElement {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;
  const error = meta.error;

  const wrapperClass = classNames("wrapper-classes-go-here", className, {
    "error-inp": hasError
  });
  return (
    <div className={wrapperClass}>
      <label htmlFor={id}>{label} </label>
      <input type="radio" id={id} value={field.value} name={field.name} {...field} {...props} />
      {hasError ? <div className="error">{error}</div> : null}
    </div>
  );
}
