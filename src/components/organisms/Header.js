import React from 'react'
import Button from '../atoms/Button'
import Navigation from '../molecules/Navigation'

const Header = () => (
  <header className="header">
    <a className="app-logo" href="https://blueprism.com/" title="Visit Blue Prism website">
      <img src="./images/blueprism-logo.svg"/>
    </a>
    <span className="app-title">Design Challenge</span>
    <Navigation />
    <div className="options">
      <Button href="https://github.com/Ninowis/react-alt-boilerplate" label="Fork on GitHub"/>
    </div>
  </header>
)

export default Header