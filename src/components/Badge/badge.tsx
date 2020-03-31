import React from "react";
import classNames from "classnames";

type ModeType = "point" | "count";
export interface IBadgeProps {
  value?: number | string;
  max?: number;
  hidden?: boolean;
  className?: string;
}

const Badge: React.FC<IBadgeProps> = ({
  value,
  className,
  mode,
  max,
  hidden,
  children
}) => {
  const classes = classNames(classNames, "badge", {
    hidden: hidden,
  });
  const pointClass = classNames("point", {
    nums: Boolean(value)
  });

  const isLt = value && max && value > max ? `${max}+` : value;

  return (
    <div className={classes}>
      {!hidden && <span className={pointClass}>{isLt}</span>}
      {children}
    </div>
  );
};

Badge.defaultProps = {
  max: 0,
  hidden: false
};

export default Badge;
