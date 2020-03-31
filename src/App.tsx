import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/item";
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
import Badge from './components/Badge/badge'

library.add(fas)
function App() {
  return (
    <div className="App">
      <Icon icon="coffee" size="10x" theme="primary"></Icon>
    </div>
  );
}

export default App;
