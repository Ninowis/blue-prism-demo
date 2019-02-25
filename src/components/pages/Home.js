import React from 'react'
import PageTemplate from '../templates/PageTemplate'
import Button from '../atoms/Button'

const Home = () => (
  <PageTemplate
    pageClass="home-page"
    pageTitle="Blue Prism UI Design Challenge"
    leadText="A demo project by Guillaume Simonin"
  >
    <p class="lead-text">
      You mentioned your team workflow being based on Yarn, Webpack and React rather than my usual Vue.js + Gulp, so for the pupose of this demo I thought I'd get familiar with these technologies, and present you my animation using them.
    </p>
    <p>
      This project based on my own <a href="https://github.com/Ninowis/react-alt-boilerplate" title="view on GitHub">React Alt Boilerplate</a> created for the purpose of this demo, feel free to browse, clone and test my workflow, it's open-source. I've done a lot of reading about some development approaches and tech you mentioned and I was not familiar with, see the about section to learn about my process and choices in making this app.
    </p>
    <Button to='/about' label='About the making of this app'/>
  </PageTemplate>
)

export default Home