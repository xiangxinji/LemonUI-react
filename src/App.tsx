import React from "react";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/item";
import SubMenu from './components/Menu/subMenu'
function App() {
  return (
    <div className="App">
      <Menu defaultIndex="3"  mode="vertical"  onSelect={(index) => {
        console.log('你成功点击了 :' + index)
      }} defaultOpenSubMenus={['3']} >
        <MenuItem>Default</MenuItem>
        <MenuItem disabled={true}>
          Disabled
        </MenuItem>
        <MenuItem> Others </MenuItem>
        <SubMenu title="子导航">
          <MenuItem>子导航1</MenuItem>
          <MenuItem>子导航2</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default App;
