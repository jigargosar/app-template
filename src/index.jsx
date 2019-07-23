import React from 'react'
import { render } from 'react-dom'
import './main.css'

const App = function() {
  return (
    <div className="center pa3 vs3">
      <div className="pa3 bg-black whtie">Hello World</div>
    </div>
  )
}

render(<App />, document.getElementById('root'))
