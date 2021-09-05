import { GraphData, GraphLink, GraphNode } from "react-d3-graph";

export type BasicGraphData = GraphData<GraphNode, GraphLink>;
export interface BasicNode {
    id:string,
} 
export const emptyGraphData = ():BasicGraphData => {
    return {nodes:[], links:[]}
}