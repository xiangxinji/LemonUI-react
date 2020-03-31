import React from "react";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/item";
import SubMenu from './components/Menu/subMenu'
import Badge from './components/Badge/badge'
function App() {
  return (
    <div className="App">
      <Badge value={100} max={99} >
         
      </Badge>
    </div>
  );
}

export default App;
