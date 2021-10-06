import React, { CSSProperties } from 'react';

const baseStyle: CSSProperties = {
    zIndex: 3,
    backgroundColor: "beige",
    width:'30vw',
    // height: '80vh',
    position: 'fixed',
    top: '0px',
    right: '10px',
    margin: '10px 3px',
    padding: '5px',
    borderRadius:'5px',
    boxShadow: '0px 0px 10px lightgrey',
    border: '1px',
    borderBlock: '10px',
    maxHeight: '500px',
    minHeight: '100px'
}
interface Props {
    children:any,
    rightOffest?: string
}

/**
 * Cadre de fenetre
 * @param props 
 * @returns 
 */
export const WindowPanel = (props:Props) => {
    const style: CSSProperties = {
        ...baseStyle,
        right: props.rightOffest || '40px'
        // margin: ` 10px ${props.rightOffest || '40px'}`
    }
    return <div style={style}>
        {props.children}
    </div>
}