import { GraphConfiguration } from "react-d3-graph";

export const graphConfig: Partial<GraphConfiguration<any, any>> = {
    node: {
        size: 800,
        
    },
    link: {},
    d3:{
        gravity: -2000,
        // linkLength: 400
    },
    automaticRearrangeAfterDropNode: true,
    collapsible: false,
    
    nodeHighlightBehavior: true,
    directed: false,
    staticGraph: false,
    initialZoom:0.5
    
}