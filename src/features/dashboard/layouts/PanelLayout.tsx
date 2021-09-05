import React, { CSSProperties } from 'react';
import { JsxElement } from 'typescript';

interface Props {
    children: any;
    x: number;
    y: number;
    w: number;
    h: number;
    width?: number,
    height?: number
}

export const _PanelLayout = (props:Props) => {

    const styles:CSSProperties = {
        backgroundColor: "rgba(250, 250, 250, 250)",
        borderRadius: "2px",
        // boxShadow: "2px 2px rgba(225, 225, 225, 225)",
        // width: `${props.width}`,
        margin: "2px",
        padding:"2px",
        width: `${props.width||0-4}px`,
        height: `${props.height||0-4}px`,
        gridColumn: `${props.x} / ${props.x+props.w}`,
        gridRow: `${props.y} / ${props.y+props.h}`,
    }

    console.log(styles);

    return <div style={styles}>
        {props.children}
    </div>
}
