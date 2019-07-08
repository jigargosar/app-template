import React from 'react'
import { render } from 'react-dom'
import 'tachyons'

export const FCol: React.FC = ({ children }) => (
  <div className="flex flex-col">{children}</div>
)

export const FRow: React.FC = ({ children }) => (
  <div className="flex flex-col">{children}</div>
)

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
