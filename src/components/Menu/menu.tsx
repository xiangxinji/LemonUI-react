import React, {
  Component,
  CSSProperties,
  createContext,
  useState
} from "react";
import classNames from "classnames";


// 导航的模式 水平或者垂直 
type MenuMode = "vertical" | "horizontal";
// 点击选中事件的类型
type selectFuncType = (selectedIndex: number) => void;

export interface IMenuProps {
  className?: string;
  mode?: MenuMode;
  style?: CSSProperties;
  onSelect?: selectFuncType;
  defaultIndex?: number;
}

type contextProps = {
  index: number;
  onSelect?: selectFuncType;
};

export const MenuContext = createContext<contextProps>({
  index: 0
});

const Menu: React.FC<IMenuProps> = props => {
  const { className, mode, style, onSelect, defaultIndex, children } = props;
  const [ current, setCurrentItem] = useState(defaultIndex);
  const classes = classNames("menu", className, {
    "menu-horizontal": mode === "horizontal"
  });

  const providerData: contextProps = {
    index: typeof current === "undefined" ? 0 : current,
    onSelect: selectedIndex => {
      setCurrentItem(selectedIndex)
      if (onSelect) {
        onSelect(selectedIndex);
      }
    }
  };

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={providerData}>
        {children}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  mode: "vertical",
  defaultIndex: 0
};

export default Menu;
