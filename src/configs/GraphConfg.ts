import { GraphConfiguration } from "react-d3-graph";

export const graphConfig: Partial<GraphConfiguration<any, any>> = {
    node:{},
    link:{},
    height: 0.95*window.innerHeight,
    width: 0.95*window.innerWidth,
    automaticRearrangeAfterDropNode: false,
    collapsible: false,
    directed: false
}