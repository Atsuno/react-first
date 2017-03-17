import React from 'react'

const ClickCount = ({ handleClick }) => (
  <p className="App-intro">
    <input type="button" onClick={handleClick} value="Click Me" />
  </p>
)

export default ClickCount

