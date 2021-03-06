import React from 'react'
import Button from '../atoms/Button'
import Navigation from '../molecules/Navigation'
import InlineSVG from 'svg-inline-react'
import logo from '../../svg/blueprism-logo.svg'
import github from '../../svg/github-logo.svg'

const Header = () => (
  <header className="header">
    <a className="app-logo" href="https://blueprism.com/" title="Visit Blue Prism website">
      <InlineSVG src={logo} element='span'/>
    </a>
    <span className="app-title">Design Challenge</span>
    <Navigation />
    <div className="options">
      <Button href="https://github.com/Ninowis/blue-prism-demo" label="View source on GitHub">
        <InlineSVG src={github}/>
      </Button>
    </div>
  </header>
)

export default Header