import React from 'react'
import { render } from 'react-dom'
import './index.css'

const App = function() {
  return (
    <div className="center pa3 vs3 w-100">
      <div className="pa3 br3 bg-black white">Hello World</div>
    </div>
  )
}

render(<App />, document.getElementById('root'))
