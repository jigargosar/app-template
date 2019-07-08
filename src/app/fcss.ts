import { rem } from 'csx'

import { style } from 'typestyle'

import {
  horizontal,
  horizontallySpaced,
  vertical,
  verticallySpaced,
} from 'csstips'

const space1 = rem(0.25)
const space2 = rem(0.5)
const space3 = rem(1)

const frow = (margin: string | number) =>
  style(horizontal, horizontallySpaced(margin))

export const frow1 = frow(space1)
export const frow2 = frow(space2)
export const frow3 = frow(space3)

const fcol = (margin: string | number) =>
  style(vertical, verticallySpaced(margin))

export const fcol3 = fcol(space3)
