import React from 'react'
import { render } from 'react-dom'
// import 'tachyons'
// import './main.css'
import {
  setupPage,
  normalize,
  horizontallySpaced,
  horizontal,
  padding,
} from 'csstips'
normalize()
setupPage('#root')

import { style, classes } from 'typestyle'
import { rem } from 'csx'

export const FCol: React.FC = ({ children }) => (
  <div className="flex flex-col">{children}</div>
)

const frow = (margin: string | number) =>
  style(horizontal, horizontallySpaced(margin))

const space1 = rem(0.25)
const space2 = rem(0.5)
const space3 = rem(1)

const frow1 = frow(space1)
const frow2 = frow(space2)
const frow3 = frow(space3)

const pa = (sp: string | number) => style(padding(sp))

const pa1 = pa(space1)
const pa2 = pa(space2)
const pa3 = pa(space3)

const App: React.FC = function() {
  return (
    <div className={classes(pa3)}>
      <div>Hello World</div>
      <h1>Hello Header</h1>
      <div className={classes(frow2)}>
        <div>a</div>
        <div>a</div>
        <div>a</div>
      </div>
    </div>
  )
}

render(<App />, document.getElementById('root'))
