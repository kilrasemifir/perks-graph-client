import * as React from 'react';
import { Graph } from 'react-d3-graph';
import { graphConfig } from '../../configs/GraphConfg';
import { NodeGraphConfig } from '../../contexts/node-graph.config';
import { BasicGraphData, emptyGraphData } from '../../types/graph';

interface Props {
    width?: string,
    height?: string
}
export const PerkGraph = (props:Props) => {

    const graphRef:any = React.useRef<HTMLHeadingElement>();
    let data:BasicGraphData = emptyGraphData()

    data.nodes= [
        { id:"POO", nodeType:'language'},
        { id:"java", nodeType:'language'},
        { id:"typescript", nodeType:'language'},
        { id:"C#", nodeType:'language'},
        { id:"Javascript", nodeType:'language'},
    ]

    data.links = [
        { source: 'POO', target:'typescript'},
        { source: 'POO', target:'java'},
        { source: 'POO', target:'C#'},
    ]

    data.focusedNodeId='POO'

    const buildGraph = () => {
        data.nodes = data.nodes.map(node=>{
            return {
                ...node,
                viewGenerator: ()=>NodeGraphConfig.nodeTypes[node.nodeType]({label:node.id}), 
                renderLabel:false
            }
        })
    }
    buildGraph();
    const config:any = {
        ...graphConfig,
        width: window.innerWidth,
        height: window.innerHeight
    }
    console.log("config:",config)
    
    return (
        <div style={{ width:"100vw", height:"99%", padding:"2px", backgroundColor:'lightcoral'}} 
        ref={graphRef}>
            <Graph
                id="mygraph"
                data={data}
                config={config}
            />
        </div>
    )
}