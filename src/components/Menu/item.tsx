import React, { Component, useContext } from "react";
import classNames from "classnames";

import { MenuContext } from "./menu";

export interface IItemProps {
  className?: string;
  index?: string;
  disabled?: boolean;
}

const Item: React.FC<IItemProps> = props => {
  const { index, disabled, children, className } = props;
  const context = useContext(MenuContext);
  const classes = classNames(className , 'menu-item', {
    disabled: disabled,
    active: context.index === index
  });
  return (
    <li
      className={classes}
      onClick={() => {
        if (!disabled && context.onSelect && typeof index === 'string') {
          context.onSelect(index);
        }
      }}
    >
      {children}
    </li>
  );
};

Item.displayName = 'menu-item'

export default Item;
