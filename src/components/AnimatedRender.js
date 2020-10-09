import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-transition-group'

const AnimatedRender = ({
  in: inProp,
  children,
  duration,
  transitionStyles,
  transitionProperty,
  timingFunction,
  defaultStyle,
  className,
  removeFromDOM,
  ...restProps
}) => {
  return (
    <Transition in={inProp} timeout={duration} {...restProps}>
      {state => (
        <div style={{
          ...defaultStyle,
          transitionDuration: `${duration}ms`,
          transitionProperty,
          transitionTimingFunction: timingFunction,
          ...transitionStyles[state]
        }}
        className={className}
        >
          {removeFromDOM ? state !== 'exited' ? children : '' : children}
        </div>
      )}
    </Transition>
  )
}

AnimatedRender.defaultProps = {
  duration: 300,
  transitionStyles: {
    entering: { opacity: 1, },
    entered: { opacity: 1, },
    exiting: { opacity: 0, },
    exited: { opacity: 0, },
  },
  defaultStyle: { opacity: 0, },
  transitionProperty: 'all',
  timingFunction: 'ease-in-out',
  className: '',
  removeFromDOM: true,
}

AnimatedRender.propTypes = {
  in: PropTypes.bool,
  children: PropTypes.any,
  duration: PropTypes.number,
  transitionStyles: PropTypes.object,
  defaultStyle: PropTypes.object,
  transitionProperty: PropTypes.string,
  timingFunction: PropTypes.string,
  className: PropTypes.string,
  removeFromDOM: PropTypes.bool,
}

export default AnimatedRender
