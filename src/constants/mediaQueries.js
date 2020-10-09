import { breakpoints } from './'

const mediaQueries =  {
  // XS
  xsOnly: `(max-width: ${breakpoints.sm - 1}px)`,

  // SM
  smOnly: `(min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md - 1}px)`,
  smDown: `(max-width: ${breakpoints.md - 1}px)`,
  smUp: `(min-width: ${breakpoints.sm}px)`,

  // MD
  mdOnly: `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`,
  mdDown: `(max-width: ${breakpoints.lg - 1}px)`,
  mdUp: `(min-width: ${breakpoints.md}px)`,

  // LG
  lgOnly: `(min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl - 1}px)`,
  lgDown: `(max-width: ${breakpoints.xl - 1}px)`,
  lgUp: `(min-width: ${breakpoints.lg}px)`,

  // XL
  xlUp: `(min-width: ${breakpoints.xl}px)`,
}

export default mediaQueries
