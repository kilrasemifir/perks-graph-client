import React, { CSSProperties } from 'react';

interface Props {
    label:string,
    perks:any
}

const colors = ['red', 'orange', 'yellow', 'green']

export const LanguageNode = (props:Props) => {
    const style: CSSProperties = {
        backgroundColor: colors[props.perks?.niveau||0],
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