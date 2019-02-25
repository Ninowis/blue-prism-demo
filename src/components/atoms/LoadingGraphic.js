import React from 'react'
import InlineSVG from 'svg-inline-react'
import loadingGraphic from '../../svg/loading-graphic.svg'

const LoadingGraphic = () => (
    <span className="loading-graphic">
        <InlineSVG src={loadingGraphic} raw={true}/>
    </span>
)

export default LoadingGraphic