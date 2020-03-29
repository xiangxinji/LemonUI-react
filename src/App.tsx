import React from "react";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/item";
function App() {
  return (
    <div className="App">
      <Menu defaultIndex={0} mode="horizontal" onSelect={(index) => {
        console.log('你成功点击了 :' + index)
      }}>
        <MenuItem index={0}>Default</MenuItem>
        <MenuItem index={1} disabled={true}>
          Disabled
        </MenuItem>
        <MenuItem index={2}> Others </MenuItem>
      </Menu>
    </div>
  );
}

export default App;
