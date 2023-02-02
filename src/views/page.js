import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Bold Formal Eagle</title>
        <meta property="og:title" content="Page - Bold Formal Eagle" />
      </Helmet>
      <h1>Heading</h1>
      <h1>Heading</h1>
      <div className="page-container1">
        <h1>Heading</h1>
        <div className="page-container2"></div>
      </div>
      <h1>Heading</h1>
      <h3>Heading</h3>
      <em>
        <span>Headsa</span>
        <span className="page-text07">dsadsa</span>
        <span>dsading</span>
      </em>
      <div className="page-container3">
        <h1>Heading</h1>
        <div className="page-container4"></div>
        <h1>Heading</h1>
        <h1 className="page-text11">Heading</h1>
        <div className="page-container5"></div>
        <button className="button page-button">Button</button>
      </div>
      <div className="page-container6"></div>
      <button className="button page-button1">Button</button>
    </div>
  )
}

export default Page
