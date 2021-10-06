export const environmentGraph = {
    nodes: [
        { id:"java", nodeType:'language'},
        { id:"JEE", nodeType:'language'},
        { id:"Spring", nodeType:'language'},
        
    ],
    links: [
        { source: 'java', target:'JEE'},
        { source: 'java', target:'Spring'},
    ],
    focusedNodeId:'java'
}