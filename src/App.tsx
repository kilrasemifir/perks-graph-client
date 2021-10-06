import React, { useState } from 'react';
import './App.css';
import { PerkGraph } from './features/graph/PerkGraph';
import { RightBarLayout } from './layouts/right-bar.layout';
import { environmentGraph } from './samples/graph/environment';
import { languageGraph } from './samples/graph/language';
import { information } from './samples/informations';
import { WindowBar } from './ui/window/WindowBar';
import { WindowBarItem } from './ui/window/WindowBarItem';

const userPerks = [
  {id:'java', niveau:1},
  {id:'C#', niveau:2},
]

/**
 * Une documentation incroyable pour le composant racine de l'application
 * @returns 
 */
function App() {
  const [graphData, setGraphData] = useState(languageGraph)
  const [userPerks, setuserPerks] = useState([
    {id:'java', niveau:1},
    {id:'C#', niveau:2},
  ])
  const [nodeSelectioner, setNodeSelectioner] = useState(languageGraph.focusedNodeId)

  const incrementUserPerk = (nodeId:string) => {
    graphData.focusedNodeId = nodeId;
    setNodeSelectioner(nodeId);
    setGraphData(graphData);
  }
  return (
    <div className="App">
      <PerkGraph 
        userPerks={userPerks} 
        data={graphData} 
        onClickNode={incrementUserPerk}/>
      <RightBarLayout 
        setGraphData={(graphData:any)=>setGraphData(graphData)} 
        nodeSelectioner={nodeSelectioner}/>
    </div>
  );
}

export default App;
