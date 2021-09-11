import React, { Children, cloneElement, CSSProperties } from 'react';
import { DashboardLayout } from '..';

interface Props {
    children: any[];
    height?: number,
    width?: number,
    padding?: number
}

interface InnerProps {
    children: any[];
    height: number,
    width: number,
    padding: number
}

const defaultProps:Partial<InnerProps> = {
    height: 100,
    width: 100,
    padding: 2,
}

export const _DashboardLayout = (_props:Props) => {
    const props: Props = {...defaultProps, ..._props};
    const dashboardWidth = window.innerWidth*(props.width||100)/100;
    const dashboardHeight = window.innerHeight*(props.height||100)/100;
    const styleDashboard: CSSProperties = {
        backgroundColor: "red",
        display: "grid",
        padding: `${props.padding}px`,
        height: `${dashboardHeight}px`,
        width: `${dashboardWidth}px`,
    }
    let colCount = 0;
    let rowCount = 0;
    props.children.forEach(child=>{
        colCount += child.props.w;
        rowCount += child.props.h;
    })
    const childrenWithSize = Children.map(props.children, child=>{
        const panelColumn = child.props.w;
        const panelRows = child.props.h;
        const width = (dashboardWidth*panelColumn/colCount)-4*(props.padding||0);
        const height = (dashboardHeight*panelRows/rowCount)-4*(props.padding||0);
        const newProps = {...child.props, width, height};
        return cloneElement(child, newProps);
    })
    return <div style={styleDashboard}>
        {childrenWithSize}
    </div>
}
