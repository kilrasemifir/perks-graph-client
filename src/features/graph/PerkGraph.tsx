import * as React from 'react';
import { Graph } from 'react-d3-graph';
import { JsxElement } from 'typescript';
import { graphConfig } from '../../configs/GraphConfg';
import { BasicGraphData, emptyGraphData } from '../../types/graph';

interface Props {
    width?: number,
    height?: number
}
export const PerkGraph = (props:Props) => {

    const graphRef:any = React.useRef<HTMLHeadingElement>();
    let data:BasicGraphData = emptyGraphData()
    const [dimensions, setDimensions] = React.useState({ width:0, height: 0 });
    data.nodes.push({id:"toto"})
    React.useLayoutEffect(() => {
        if (graphRef.current) {
          setDimensions({
            width: graphRef.current.offsetWidth - 4,
            height: graphRef.current.offsetHeight -4
          });
        }
      }, []);
    const config = {
        ...graphConfig,
        width: dimensions.width,
        height: dimensions.height,
        color: "green"
    }
    console.log("config:",config)
    console.log("dim", dimensions)
    
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