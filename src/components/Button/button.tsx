import React from "react";
import classNames from "classnames";
 
// 按钮所有的类型
export type buttonTypes = 'default' | 'primary' | 'dashed' | 'link'

// 尺寸
export type buttonSize = 'lg' | 'sm' ; 


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

  if (btnType === 'link') {
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
  btnType: 'default',
  disabled: false
};

export default ButtonComp;
