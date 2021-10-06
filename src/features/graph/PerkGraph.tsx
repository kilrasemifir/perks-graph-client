import * as React from 'react';
import { Graph } from 'react-d3-graph';
import { graphConfig } from '../../configs/GraphConfg';
import { NodeGraphConfig } from '../../contexts/node-graph.config';
import { BasicGraphData } from '../../types/graph';

interface Props {
    width?: string,
    height?: string,
    userPerks: any[],
    data: BasicGraphData,
    onClickNode?: (nodeId:string)=>void
}
/**
 * Composant permettant de d'afficher un graph avec les competences des utilisateurs.
 * @param props 
 * @returns 
 */
export const PerkGraph = (props:Props) => {

    const graphRef:any = React.useRef<HTMLHeadingElement>();

    const dataGraph = props.data;
    const buildGraph = () => {
        dataGraph.nodes = dataGraph.nodes.map(node=>{
            let tperk = props.userPerks.filter(p=>p.id===node.id);
            const perk = tperk.length? tperk[0]:undefined
            return {
                ...node,
                viewGenerator: ()=>NodeGraphConfig.nodeTypes[node.nodeType]({label:node.id, perk}), 
                renderLabel:false
            }
        })
    }
    React.useEffect(() => {
        buildGraph()
    }, [props.data, props.userPerks])
    buildGraph();

    const config:any = {
        ...graphConfig,
        width: window.innerWidth,
        height: window.innerHeight
    }
    
    return (
        <div style={{ width:"100vw", height:"99%", padding:"2px", backgroundColor:'lightcoral'}} 
        ref={graphRef}>
            <Graph
                id="mygraph"
                data={dataGraph}
                config={config}
                onClickNode={props.onClickNode}
            />
        </div>
    )
}