export const languageGraph = {
    nodes: [
        { id:"language", nodeType:'language', d3:{gravity:-20000}},
        { id:"web", nodeType:'language'},
        { id:"bigdata", nodeType:'language'},
        { id:"mobile", nodeType:'language'},
        { id:"structure", nodeType:'language'},
        { id:"json", nodeType:'language'},
        { id:"yaml", nodeType:'language'},
        { id:"toml", nodeType:'language'},

        { id:"kotlin", nodeType:'language'},

        { id:"java", nodeType:'language'},
        { id:"spring", nodeType:'framework'},
        { id:"maven", nodeType:'framework'},
        { id:"junit", nodeType:'framework'},
        { id:"servlet-java", nodeType:'framework'},
        { id:"jcbd", nodeType:'framework'},
        { id:"hybernate", nodeType:'framework'},

        { id:"typescript", nodeType:'language'},
        { id:"angular2+", nodeType:'framework'},
        { id:"nest", nodeType:'framework'},

        { id:"C#", nodeType:'language'},

        { id:"javascript", nodeType:'language'},
        { id:"reactjs", nodeType:'framework'},
        { id:"express", nodeType:'framework'},

        { id:"POO", nodeType:'language'},
        { id:"html", nodeType:'language'},
        { id:"css", nodeType:'language'},
        { id:"python", nodeType:'language'},

        
        { id:"sql", nodeType:'language'},
        { id:"scala", nodeType:'language'},
        { id:"database", nodeType:'language'},
    ],
    links: [
        { source: 'POO', target:'typescript'},
        { source: 'POO', target:'java'},
        { source: 'POO', target:'C#'},
        { source: 'language', target:'POO'},
        { source: 'language', target:'web'},
        { source: 'language', target:'bigdata'},
        { source: 'language', target:'database'},
        { source: 'language', target:'mobile'},
        { source: 'language', target:'structure'},
        { source: 'web', target:'javascript'},

        { source: 'java', target:'spring'},
        { source: 'java', target:'maven'},
        { source: 'java', target:'junit'},
        { source: 'java', target:'jcbd'},
        { source: 'java', target:'servlet-java'},
        { source: 'java', target:'hybernate'},
        
        { source: 'typescript', target:'angular2+'},
        { source: 'typescript', target:'nest'},
        
        { source: 'javascript', target:'reactjs'},
        { source: 'javascript', target:'express'},
        
        { source: 'web', target:'html'},
        { source: 'web', target:'css'},
        { source: 'bigdata', target:'python'},
        { source: 'bigdata', target:'scala'},
        { source: 'database', target:'sql'},
        
        { source: 'mobile', target:'kotlin'},

        { source: 'structure', target:'json'},
        { source: 'structure', target:'yaml'},
        { source: 'structure', target:'toml'},
        
    ],
    focusedNodeId:'language',
}