import React from 'react'
import PageTemplate from '../templates/PageTemplate'
import LoadingGraphic from '../atoms/LoadingGraphic'

const Demo = () => (
  <PageTemplate
    pageClass="demo-page"
    pageTitle="Loading Animation Demo"
    leadText="Using SVG and CSS only"
  >
    <center>
      <p className="lead-text">
        A scalable and lightweight loading graphic:
      </p>
      <LoadingGraphic version="v1"/>
      <p>
        The logo presented above has varied slightly from the drafted concept as the result wasn't quite as expected once the movements were put together. This is part of the process, and this one could benefits from second opinion.<br/>
        See below for a couple of variants, the last one being the same as above:
      </p>
      <div className="smaller">
        <LoadingGraphic version="v2"/>
        <LoadingGraphic version="v3"/>
        <LoadingGraphic version="v1"/>
      </div>
    </center>
  </PageTemplate>
)

export default Demo