import React from "react";
import classNames from "classnames";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps
} from "@fortawesome/react-fontawesome";

export interface IIconProps extends FontAwesomeIconProps {
  theme?: string;
  className?: string;
}

const Icon: React.FC<IIconProps> = props => {
  const classes = classNames(
    {
      [`icon-${props.theme}`]: props.theme
    },
    props.className
  );
  return <FontAwesomeIcon className={classes} {...props}></FontAwesomeIcon>;
};

export default Icon;
