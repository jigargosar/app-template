import React from 'react'
import { render } from 'react-dom'
// import 'tachyons'
// import './main.css'
import { setupPage, normalize, vertical } from 'csstips'
normalize()
setupPage('#root')

import { classes } from 'typestyle'
import { pa3, frow2 } from './fcss'

const App: React.FC = function() {
  return (
    <div className={classes(pa3, vertical)}>
      <div>Hello World</div>
      <div className={classes(frow2)}>
        <div>a</div>
        <div>a</div>
        <div>a</div>
      </div>
    </div>
  )
}

render(<App />, document.getElementById('root'))
