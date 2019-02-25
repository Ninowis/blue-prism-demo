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
      <LoadingGraphic/>
    </center>
  </PageTemplate>
)

export default Demo