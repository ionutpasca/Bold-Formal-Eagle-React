import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <h1>{props.heading}</h1>
      <h1>{props.heading1}</h1>
      <h1>{props.heading2}</h1>
    </div>
  )
}

AppComponent.defaultProps = {
  heading1: 'Heading',
  heading: 'Heading',
  heading2: 'Heading',
}

AppComponent.propTypes = {
  heading1: PropTypes.string,
  heading: PropTypes.string,
  heading2: PropTypes.string,
}

export default AppComponent
