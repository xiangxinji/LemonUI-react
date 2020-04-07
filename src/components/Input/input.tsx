import React from "react";
import classNames from "classnames";

export type InputSizeTypes = "large" | "middle" | "small";
export type InputTypeTypes = "input" | "textarea";

export interface IInputProps {
  defaultValue?: string;
  disabled?: boolean;
  id?: string;
  maxLength?: number;
  size?: InputSizeTypes;
  value: string;
  onChange?: (str: string) => void;
  onPressEnter?: (e: React.KeyboardEvent) => void;
  className?: string;
  type?: string;
  placeholder?: string;
}

const Input: React.FC<IInputProps> = (props) => {
  const { size, disabled, type } = props;
  const classes = classNames("input", `input-size-${size}`, {
    disabled: disabled,
    [`input-type-${type}`]: true,
  });

  const isTextarea = type === "textarea";
  const rendedElement = !isTextarea
    ? renderInputElement(props)
    : renderTextareaElement(props);
  return <div className={classes}>{rendedElement}</div>;
};

const renderInputElement = (props: IInputProps) => {
  const {
    disabled,
    value,
    defaultValue,
    onPressEnter,
    onChange,
    placeholder,
  } = props;
  return (
    <input
      disabled={disabled}
      value={value || defaultValue}
      onChange={(event) => onChange && onChange(event.target.value)}
      onKeyDown={(event) => {
        if (event.keyCode === 13) {
          onPressEnter && onPressEnter(event);
        }
      }}
      placeholder={placeholder}
    ></input>
  );
};
const renderTextareaElement = (props: IInputProps) => {
  const {
    disabled,
    value,
    defaultValue,
    onPressEnter,
    onChange,
    placeholder,
  } = props;
  return (  
    <textarea
      disabled={disabled}
      onChange={(event) => onChange && onChange(event.target.value)}
      onKeyDown={(event) => {
        if (event.keyCode === 13) {
          onPressEnter && onPressEnter(event);
        }
      }}
      placeholder={placeholder}
    >
      {value || defaultValue}
    </textarea>
  );
};

Input.defaultProps = {
  defaultValue: "",
  disabled: false,
  id: "",
  size: "middle",
  onChange: (e) => {},
  onPressEnter: (e) => {},
  type: "input",
  placeholder: "请输入 ",
};

export default Input;
