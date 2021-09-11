import React, { CSSProperties, useState } from 'react';
import { WindowPanel } from './WindowPanel';
import { WindowPanelButton } from './WindowPanelButton';


interface Props {
    label: string,
    children: any,
    position?: number,
    open: string,
    setOpen: (label:string)=>void,
    buttonWidth?: string
}

export const WindowLayout = (props:Props) => {
    console.log(props);
    const topPosition = (props.position||1)*42
    console.log(props.label, topPosition);
    const style:CSSProperties= {
        position: 'fixed',
        top: `${topPosition}px`,
        right: '0'
    }
    const onOpen = () => {
        props.setOpen(isOpen()? '' : props.label)
    }

    const isOpen = ():boolean => {
        return props.open === props.label 
    }
    return <div style={style}>
        <WindowPanelButton 
            onClick={onOpen} 
            buttonWidth={props.buttonWidth}
            color={isOpen()? 'beige': 'lightgrey'}>
            {props.label}
        </WindowPanelButton>
        { isOpen() &&
        <WindowPanel rightOffest={props.buttonWidth}>
            {props.children}
        </WindowPanel>}
    </div>
}