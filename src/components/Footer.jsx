import React from 'react'
import { css } from 'glamor'

const footer = css({
  textAlign: 'center',
  marginTop: '200px'
})

const Footer = () => {
  return (
    <div className="u-full-width" {...footer}>
      <a href="https://join.coronadenktank.be/" target="_blanc">Structureel meehelpen aan dit initiatief?</a><br />
      <a href="https://github.com/MakeInBelgium/coronadenktank/issues/new" target="_blanc">Werkt er iets niet?</a>

    </div>
  )
}

export default Footer