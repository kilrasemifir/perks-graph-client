import React, { Children, createContext, useState } from 'react';
import { WindowLayout } from './panel/WindowLayout';

interface Props {
    children: any[],
    buttonWidth?: string
}

const windOpenContext = createContext('default');

export const WindowBar = (props:Props) => {
    const [winOpen, setwinOpen] = useState('default');
    const builtChildren = Children.map(props.children, (child:any, index)=>{
        return <WindowLayout 
            key={index} 
            label={child.props.label} 
            position={index+1} 
            open={winOpen}
            setOpen={setwinOpen}
            buttonWidth={props.buttonWidth}>
            {child.props.children}
        </WindowLayout>
    })
    return <div>
        <windOpenContext.Provider value={winOpen}>
            {builtChildren}
        </windOpenContext.Provider>
    </div>
}
