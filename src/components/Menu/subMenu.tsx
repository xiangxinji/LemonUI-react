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
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>;
  // 如果 menu 的形式为 垂直的情况下, 去查看context.defaultOpenSubMenus 的属性中,确认是否默认打开
  const isOpend =
    index && context.mode === "vertical"
      ? openedSubMenus.includes(index)
      : false;
  const [open, setOpen] = useState(isOpend);
  // 当前 context 中 选中的索引 等于当前生成的索引 就将被视为 激活
  const classes = classNames("menu-item submenu-item", className, {
    active: context.index === index
  });

  // 做一些事件处理 , 当点击的情况下 , 将 改变子menu 的状态
  // CLICK
  let timmer:any = null 
  const handleMouse = (e: React.MouseEvent, flag: boolean) => {
    e.preventDefault();
    if(timmer) {
      window.clearTimeout(timmer) 
    }
    window.setTimeout(() => {
      setOpen(flag);
    }, 200)
  };
  // HOVER
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

  // 检查节点以及自动生成 x-x 的 索引给  item 组件
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
