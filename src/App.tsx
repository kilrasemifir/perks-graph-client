import React from 'react';
import './App.css';
import { PerkGraph } from './features/graph/PerkGraph';
import { WindowBar } from './ui/window/WindowBar';
import { WindowBarItem } from './ui/window/WindowBarItem';


function App() {
  return (
    <div className="App">
      <PerkGraph/>
      <WindowBar buttonWidth='200px'>
        <WindowBarItem label="Edition du graph">
          <div>
            <h2>Panel d'edition du Graph</h2>
            <p>Test d'un panel</p>
          </div>
        </WindowBarItem>
        <WindowBarItem label="Informations">
          Hello B
        </WindowBarItem>
      </WindowBar>
    </div>
  );
}

export default App;
