import React from "react";
import { useField } from "formik";
import classNames from "classnames";
import "./textArea.scss";

interface IProps {
  label: string;
  placeholder: string;
  id: string;
  name: string;
  rows: number;
  cols: number;
  autofocus?: boolean;
  className?: string;
  disabled?: boolean;
  wrap?: "soft" | "hard";
}
export const TextArea = (props: IProps): React.ReactElement => {
  const { label, placeholder, className = "", id = "", disabled = false, rows, cols, autofocus = true, wrap = "soft" } = props;
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;
  const error = meta.error;
  const wrapperClass = classNames("textArea-className", className, {
    "error-inp": hasError
  });

  return (
    <div className={wrapperClass} key={id || field.name}>
      <label htmlFor={id || field.name}>{label}</label>
      <textarea id={id || field.name} placeholder={placeholder} {...field} {...props} name={field.name} rows={rows} cols={cols} disabled={disabled} autoFocus={autofocus} wrap={wrap} />
      {hasError ? <div className="error">{error}</div> : null}
    </div>
  );
};
export default TextArea;
