import React, { Component, useContext, Children, useState } from "react";
import classNames from "classnames";
import Menu, { MenuContext } from "./menu";
import { IItemProps } from "./item";

export interface ISubMenuProps {
  title: string;
  index?: string;
  className?: string;
}

const SubMenu: React.FC<ISubMenuProps> = ({
  title,
  index,
  className,
  children
}) => {
  const context = useContext(MenuContext);
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpend =
    index && context.mode === "vertical"
      ? openedSubMenus.includes(index)
      : false;
  const [open, setOpen] = useState(isOpend);

  const classes = classNames("menu-item submenu-item", classNames, {
    active: context.index === index
  });

  const handleMouse = (e: React.MouseEvent, flag: boolean) => {
    e.preventDefault();
    setOpen(flag);
  };

  const renderMouseEvents =
    context.mode !== "vertical"
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          }
        }
      : {};

  const renderChildren = () => {
    return React.Children.map(children, (child: any, childIndex) => {
      const childElement = child as React.FunctionComponentElement<IItemProps>;
      if (childElement.type.displayName === "menu-item") {
        return React.cloneElement(child, {
          index: `${index}-${childIndex}`
        });
      } else {
        console.warn("请在submenu组件中使用menu-item组件");
      }
    });
  };

  const subMenuClasses = classNames("submenu", {
    "menu-opened": open
  });

  return (
    <li className={classes} {...renderMouseEvents}>
      <div
        className="menu-title"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {title}
      </div>
      <ul className={subMenuClasses}>{renderChildren()}</ul>
    </li>
  );
};

SubMenu.displayName = "submenu";

export default SubMenu;
