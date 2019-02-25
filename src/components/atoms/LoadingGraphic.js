import React from 'react'
import InlineSVG from 'svg-inline-react'
import loadingGraphic from '../../svg/loading-graphic.svg'

const LoadingGraphic = ({ version }) => (
    <span className={"loading-graphic " + version}>
        <InlineSVG src={loadingGraphic} raw={true}/>
    </span>
)

export default LoadingGraphic