import * as React from 'react';
import { Graph } from 'react-d3-graph';
import { JsxElement } from 'typescript';
import { graphConfig } from '../../configs/GraphConfg';
import { BasicGraphData, emptyGraphData } from '../../types/graph';

interface Props {
    width?: string,
    height?: string
}
export const PerkGraph = (props:Props) => {

    const graphRef:any = React.useRef<HTMLHeadingElement>();
    let data:BasicGraphData = emptyGraphData()

    data.nodes.push({id:"toto"})
    const config:any = {
        ...graphConfig,
        width: props.width || '90vw',
        height: props.height || '90vh',
        color: "green"
    }
    console.log("config:",config)
    
    return (
        <div style={{ width:"99%", height:"99%", padding:"2px"}} 
        ref={graphRef}>
            <Graph
                id="mygraph"
                data={data}
                config={config}
            />
        </div>
    )
}