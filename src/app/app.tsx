import React from 'react'
import { render } from 'react-dom'
import 'tachyons'

const App: React.FC = function() {
  return (
    <div>
      <div>
        <h1>Hello World</h1>
      </div>
    </div>
  )
}

render(<App />, document.getElementById('root'))
