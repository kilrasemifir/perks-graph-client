import { GraphData, GraphLink, GraphNode } from "react-d3-graph";

export type CustomGraphNode = GraphNode & {nodeType:string};
export type BasicGraphData = GraphData<CustomGraphNode, GraphLink>;
export interface BasicNode {
    id:string,
} 
export const emptyGraphData = ():BasicGraphData => {
    return {nodes:[], links:[]}
}