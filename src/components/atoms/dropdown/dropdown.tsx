import React, { ReactElement } from "react";
import { useField } from "formik";
import classNames from "classnames";
interface IProps {
  name: string;
  id: string;
  value?: number;
  options: Array<object>;
  className?: string;
}

export default function Dropdown({ options, id, value, className, ...props }: IProps): ReactElement {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;
  const error = meta.error;
  const wrapperClass = classNames("wrapper-classes-go-here", classNames, {
    "error-inp": hasError
  });
  return (
    <div className={wrapperClass}>
      <select name={field.name} id={id} {...field} {...props}>
        <option value="">Select</option>
        {options &&
          options.map((element: { label: any; id: number }, index: number) => {
            return (
              <option value={element.id} key={index + id}>
                {element.label}
              </option>
            );
          })}
      </select>
      {hasError ? <div className="error">{error}</div> : null}
    </div>
  );
}
