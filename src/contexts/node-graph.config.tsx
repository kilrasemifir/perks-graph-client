import React from 'react'
import { FrameworkNode } from '../features/nodes/FrameworkNode'
import { LanguageNode } from '../features/nodes/LanguageNode'

export const NodeGraphConfig:any = {
    nodeTypes: {
        language: (config:any)=><LanguageNode 
            label={config.label}
            perks={config.perk}/>,
        framework: (config:any)=><FrameworkNode 
            label={config.label}
            perks={config.perk}/>
    }
}