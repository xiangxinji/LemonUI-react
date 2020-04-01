import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import Button from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/item";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon/icon";
import Badge from "./components/Badge/badge";
import Transition from "./components/Transition/transition";

library.add(fas);
function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <Button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Show" : "Close "}
      </Button>

      <Transition in={show} timeout={300} >
        <div style={{ height: "500px", background: "red" }}></div>
      </Transition>
    </div>
  );
}

export default App;
