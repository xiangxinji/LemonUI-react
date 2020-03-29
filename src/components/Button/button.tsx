import React from "react";
import classNames from "classnames";

// 按钮所有的类型
export enum buttonTypes {
  Default = "default",
  Primary = "primary",
  Dashed = "dashed",
  Link = "link"
}

// 尺寸
export enum buttonSize {
  Large = "lg",
  Small = "sm"
}

export interface IButtonProps {
  className?: string;
  btnType?: buttonTypes;
  size?: buttonSize;
  disabled?: boolean;
  href?: string;
  children: any;
  onClick ?: () => void 
}

const ButtonComp: React.FC<IButtonProps> = props => {
  const { btnType, size, disabled, children, href, className , onClick } = props;
  const classes = classNames('btn',{
    [`btn-size-${size}`]: size,
    [`btn-type-${btnType}`]: btnType,
    "disabled": disabled,
    [`${className}`]: className
  });

  if (btnType === buttonTypes.Link) {
    return (
      <a className={classes} href={href} onClick={onClick}>
        {children}
      </a>
    );
  } else {
    return (
      <button disabled={disabled} className={classes} onClick={onClick}>
        {" "}
        {children}
      </button>
    );
  }
};

ButtonComp.defaultProps = {
  btnType: buttonTypes.Default,
  disabled: false
};

export default ButtonComp;
