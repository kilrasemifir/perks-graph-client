import React from 'react';
import { environmentGraph } from '../samples/graph/environment';
import { languageGraph } from '../samples/graph/language';
import { information } from '../samples/informations';
import { BasicGraphData } from '../types/graph';
import { WindowBar } from '../ui/window/WindowBar';
import { WindowBarItem } from '../ui/window/WindowBarItem';

interface Props {
    setGraphData: (graphData: BasicGraphData)=>void;
    nodeSelectioner:string;
}

export const RightBarLayout = (props:Props) => {
    return <WindowBar buttonWidth='200px'>
        <WindowBarItem label="Edition du graph">
            <div>
                <h2>Panel d'edition du Graph</h2>
                <p>Test d'un panel</p>
            </div>
        </WindowBarItem>
        <WindowBarItem label="Informations">
            <h2>{props.nodeSelectioner}</h2>
            <p>{information[props.nodeSelectioner]?.description || "unknown"}</p>
        </WindowBarItem>
        <WindowBarItem label="Graphs">
            <div>
                <button onClick={()=>props.setGraphData(languageGraph)}>Language</button>
                <button onClick={()=>props.setGraphData(environmentGraph)}>Environment</button>
            </div>
        </WindowBarItem>
    </WindowBar>
}