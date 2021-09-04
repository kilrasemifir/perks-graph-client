import * as React from 'react';
import { Graph } from 'react-d3-graph';
import { BasicGraphData, emptyGraphData } from '../../types/graph';
export const PerkGraph = () => {

    let data:BasicGraphData = emptyGraphData()
    
    return (
        <Graph
            id="mygraph"
            data={data}
            config={{}}
        />
    )
}