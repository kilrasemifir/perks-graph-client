import React, { CSSProperties } from 'react';

interface Props {
    label:string,
    perks:any
}

const colors = ['red', 'orange', 'yellow', 'green']

export const FrameworkNode = (props:Props) => {
    const style: CSSProperties = {
        backgroundColor: colors[props.perks?.niveau||0],
        width: '80px',
        height: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    return <div style={style}>
        <div>
            {props.label}
        </div>
    </div>
}