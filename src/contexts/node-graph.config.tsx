import React from 'react'
import { LanguageNode } from '../features/nodes/LanguageNode'

export const NodeGraphConfig:any = {
    nodeTypes: {
        language: (config:any)=><LanguageNode label={config.label}/>
    }
}