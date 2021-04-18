import React from "react";
import { useField } from "formik";
import classNames from "classnames";
import "./textField.scss";
interface IProps {
  label?: string;
  placeholder: string;
  name: string;
  id: string;
  type: string;
  className?: string;
  disabled?: boolean;
  value?: string;
}
export const TextField = ({ label, className = "", id = "", disabled = false, ...props }: IProps): React.ReactElement => {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;
  const error = meta.error;

  const wrapperClass = classNames("custom", className, {
    "error-inp": hasError
  });

  return (
    <div className={wrapperClass} key={id || field.name}>
      <label htmlFor={id || field.name}>{label}</label>
      <input id={id || field.name} {...field} {...props} disabled={disabled} />
      {hasError ? <div className="error">{error}</div> : null}
    </div>
  );
};
export default TextField;
