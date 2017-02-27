import React, { PropTypes } from 'react'
import { Container } from 'react-responsive-grid'
import { rhythm } from '../utils/typography'

function template (props) {
  return (
    <div>
      <Container
        style={{
          maxWidth: 960,
          padding: `${rhythm(1)} ${rhythm(3/4)}`,
          //paddingTop: 0,
        }}
      >
        {props.children}
      </Container>
    </div>
  )
}

template.propTypes = { children: PropTypes.node }

module.exports = template
