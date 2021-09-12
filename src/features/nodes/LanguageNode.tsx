import React, { CSSProperties } from 'react';

interface Props {
    label:string
}

export const LanguageNode = (props:Props) => {
    const style: CSSProperties = {
        backgroundColor: 'red',
        width: '80px',
        height: '80px',
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return <div style={style}>
        <div>
            {props.label}
        </div>
    </div>
}