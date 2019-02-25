import React from 'react'
import PageTemplate from '../templates/PageTemplate'

const About = () => (
  <PageTemplate
    pageClass="about-page"
    pageTitle="About this Project"
    leadText="Behind the making of the boilerplate developed for this demo"
  >
    <section>
      <h2>About the file structure</h2>
      <p className="lead-text"><strong>Disclaimer notice: this is <em>not</em> the recommended approach for single app projects.</strong></p>
      <p className="lead-text">
        This application structure breaks from recommended React practices and is the result of personal and maybe opinionated choices and practices in terms of systems architecture.
      </p>
      <p>
        It is mostly tuned to my current practices while working with pattern-libraries and as such, should not be considered it so much as a point of reference but merely as a starter kit yet to be adapted to specific workflow and projects.
      </p>
      <h3>Working with pattern libraries</h3>
      <p>
        Coming from a <a href="https://gulpjs.com/" title="visit Gulp.js website">Gulp</a> workflow, I've always used an external Sass structure for the styling of my projects, mostly relying on the <a href="https://sass-guidelin.es/#the-7-1-pattern" title="the 7-1 pattern on Sass guidelines">7-1 Pattern</a> and Jonathan Snook's <a href="https://smacss.com/" title="about SMACSS by Jonathan Snook">SMACSS</a> approach for engineering a versatile yet optimized pattern-library for complex applications.<br/>
        With the growing trends of system architectures being based on micro-services, pattern-libraries have taken some serious new turns since SMACSS, but even though most of us have nowadays adopted <a href="http://atomicdesign.bradfrost.com/" title="Atomic Design Methodolgy by Brad Frost">Brad Frost's Atomic Design methodoly</a>, its actual implementation across multiple applications and a varied range of technologies often still rely on such independent stylesheets libraries.
      </p>
      <h3>Moving forward</h3>
      <p>
        Webpack has some very interesting tools and features to facilitate the transition towards fully independent components in frameworks like Vue or React (<a href="https://www.styled-components.com/" title="visit project website">Styled Components</a>, <a href="https://css-tricks.com/css-modules-part-1-need/" title="What are CSS Modules and why do we need them? on CSS tricks">CSS modules</a>).<br/>
        As much as I look forward to adopt them, this project is <strong>not</strong> an attempt at exploring them, but the voluntary intention to develop a React boilerplate compatible with an external and technology-agnostic pattern-library approach currently in use amongst other projects I am working on.<br/>
      </p>
    </section>

    <section>
      <h2>Some of my readings</h2>
      <p className="lead-text">
        Even though this project does not use the latest technics or recommended approaches, it is the result of many readings about React, Webpack, modern front-end development stacks and best practices.<br/>
      </p>
      <p>
        The following articles have played an important part in the decision making of the approaches and methods to consider for this stack:
      </p>
      <ul>
        <li><a href="https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1" title="Read article">A tale of Webpack 4 and how to finally configure it in the right way</a> published on <a href="https://hackernoon.com/" title="visit Hackernoon website">Hackernoon</a> by <a href="https://hackernoon.com/@riittagirl" title="View her profile on Hackernoon">Margarita Obraztsova</a></li>
        <li><a href="https://medium.freecodecamp.org/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2" title="Read article">Fundamentals of React</a> published on <a href="https://www.freecodecamp.org/" title="visit FreeCodeCamp website">FreeCodeCamp</a> by <a href="https://medium.com/@samerbuna" title="View his profile on Medium">Samer Buna</a></li>
        <li><a href="https://hackernoon.com/the-100-correct-way-to-structure-a-react-app-or-why-theres-no-such-thing-3ede534ef1ed" title="Read article">The 100% correct way to structure a React app (or why there’s no such thing)</a> published on <a href="https://hackernoon.com/" title="visit Hackernoon website">Hackernoon</a> by <a href="https://hackernoon.com/@david.gilbertson" title="View his profile on Hackernoon">David Gilbertson</a></li>
        <li><a href="https://blog.usejournal.com/thinking-about-react-atomically-608c865d2262" title="Read article">Thinking About React, Atomically</a> published on <a href="https://blog.usejournal.com/" title="visit Noteworthy - the Journal">Noteworthy - the Journal</a> by <a href="https://blog.usejournal.com/@wheeler.katia" title="View her profile on the Journal">Katia Wheeler</a></li>
        <li><a href="https://blog.pshrmn.com/entry/simple-react-router-v4-tutorial/" title="Read article">A simple React Router v4 Tutorial</a> by Paul Sherman</li>
        <li><a href="https://itnext.io/sharing-sass-resources-with-sass-resources-loader-and-webpack-ca470cd11746" title="Read article">Sharing Sass resources with sass-resources-loader and webpack</a> by Paul Thomas</li>
        <li><a href="https://css-tricks.com/reboot-resets-reasoning/" title="Read article">Reboot, Resets, and Reasoning</a> published on <a href="https://css-tricks.com/" title="visit CSS-Tricks website">CSS-Tricks</a> by <a href="https://css-tricks.com/author/chriscoyier/" title="View his profile on CSS-Tricks">Chris Coyier</a></li>
      </ul>
    </section>
  </PageTemplate>
)

export default About