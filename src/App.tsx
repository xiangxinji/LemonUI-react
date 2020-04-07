import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Input from "./components/Input/input";
// import Button from "./components/Button/button";
// import Menu from "./components/Menu/menu";
// import MenuItem from "./components/Menu/item";
// import SubMenu from "./components/Menu/subMenu";
// import Icon from "./components/Icon/icon";
// import Badge from "./components/Badge/badge";
// import Transition from "./components/Transition/transition";

library.add(fas);
function App() {
  const [str, setStr] = useState("");
  return (
    <div className="App">
      <Input
        type="textarea"
        value={str}
        onChange={(e) => {
          setStr(e);
          console.log('改变了' , e)
        }}
        onPressEnter={() => {
          alert("你按下了回车");
        }}
      ></Input>
    </div>
  );
}

export default App;
