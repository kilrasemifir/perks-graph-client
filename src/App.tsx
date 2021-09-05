import React from 'react';
import './App.css';
import { DashboardLayout, PanelLayout } from './features/dashboard';
import { PerkGraph } from './features/graph/PerkGraph';


function App() {
  return (
    <div className="App">
      <DashboardLayout width={60} height={60}>
        <PanelLayout x={1} y={1} w={8} h={0}>
          <PerkGraph/>
        </PanelLayout>
        <PanelLayout x={9} y={1} w={2} h={0}>
          <p>Goodbye</p>
        </PanelLayout>
      </DashboardLayout>
    </div>
  );
}

export default App;
