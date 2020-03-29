import React from "react";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/item";
function App() {
  return (
    <div className="App">
      <Menu defaultIndex={0} mode="horizontal" onSelect={(index) => {
        console.log('你成功点击了 :' + index)
      }}>
        <MenuItem>Default</MenuItem>
        <MenuItem disabled={true}>
          Disabled
        </MenuItem>
        <MenuItem> Others </MenuItem>
      </Menu>
    </div>
  );
}

export default App;
