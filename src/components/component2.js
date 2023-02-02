import React from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className={`component2-container ${props.rootClassName} `}>
      {props.children}
      <h1>{props.heading}</h1>
      <button className="component2-button button">{props.button}</button>
      <div className="component2-container1">
        <div className="component2-container2"></div>
        <h1>{props.heading1}</h1>
        <h1>{props.heading2}</h1>
        <h1>{props.heading3}</h1>
        <h1>{props.heading4}</h1>
        <h1>{props.heading5}</h1>
        <h1>{props.heading6}</h1>
        <h1>{props.heading7}</h1>
        <h1>{props.heading8}</h1>
      </div>
    </div>
  )
}

Component2.defaultProps = {
  heading4: 'Heading',
  heading6: 'Heading',
  heading3: 'Heading',
  heading8: 'Heading',
  heading7: 'Heading',
  heading1: 'Heading',
  heading2: 'Heading',
  heading5: 'Heading',
  heading: 'Heading',
  rootClassName: '',
  button: 'Button',
}

Component2.propTypes = {
  heading4: PropTypes.string,
  heading6: PropTypes.string,
  heading3: PropTypes.string,
  heading8: PropTypes.string,
  heading7: PropTypes.string,
  heading1: PropTypes.string,
  heading2: PropTypes.string,
  heading5: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default Component2
