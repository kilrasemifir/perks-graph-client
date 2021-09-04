export type BasicGraphData = GraphData<GraphNode, GraphLink>;
export interface BasicNode {
    id:string,
} 
export const emptyGraphData = ():BasicGraphData => {
    return {nodes:[], links:[]}
}