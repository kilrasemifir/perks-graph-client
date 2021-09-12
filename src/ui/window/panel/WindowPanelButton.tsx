import React, { CSSProperties } from 'react';


interface Props {
    buttonWidth?: string,
    onClick: ()=>void,
    children:any,
    top?: string, 
    color: string
}

export const WindowPanelButton = (props:Props) => {
    const style: CSSProperties = {
        zIndex: 4,
        width: props.buttonWidth||'40px',
        height: '40px',
        backgroundColor: props.color,
        position: 'relative',
        right: '0px',
        borderRadius: '4px 0px 0px 4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return <div style={style} onClick={props.onClick}>
        <div>
            {props.children}
        </div>
    </div>
}