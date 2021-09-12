import { GraphConfiguration } from "react-d3-graph";

export const graphConfig: Partial<GraphConfiguration<any, any>> = {
    node: {
        size: 800,
        
    },
    link: {},
    d3:{
        gravity: -1000
    },
    automaticRearrangeAfterDropNode: true,
    collapsible: false,
    nodeHighlightBehavior: true,
    directed: false,
    staticGraph: false,
    
}