import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Bold Formal Eagle</title>
        <meta property="og:title" content="Bold Formal Eagle" />
      </Helmet>
      <h1>Heading</h1>
      <button className="button">Button</button>
      <button className="home-button1 button">
        <span>Text</span>
        <span>Butdsadsaton</span>
      </button>
      <svg viewBox="0 0 1024 1024" className="home-icon">
        <path d="M554 554v-256h-84v256h84zM554 726v-86h-84v86h84zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
      </svg>
      <div data-thq="thq-dropdown" className="home-thq-dropdown list-item">
        <div data-thq="thq-dropdown-toggle" className="home-dropdown-toggle">
          <span className="home-text03">Menu Item</span>
          <div data-thq="thq-dropdown-arrow" className="home-dropdown-arrow">
            <svg viewBox="0 0 1024 1024" className="home-icon2">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
          </div>
        </div>
        <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
          <li data-thq="thq-dropdown" className="home-dropdown list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle1"
            >
              <span className="home-text04">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="home-dropdown1 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle2"
            >
              <span className="home-text05">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="home-dropdown2 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle3"
            >
              <span className="home-text06">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
      <h1>Heading</h1>
      <h1>Heading</h1>
      <h1>Heading</h1>
      <h1>Heading</h1>
      <div className="home-container1"></div>
      <div className="home-container2"></div>
    </div>
  )
}

export default Home
