import React from 'react'
import PropTypes from 'prop-types'

const Html = ({
  assets, state, content,
}) => {
  return (
    <html lang="en" {...htmlAttrs}>
      <head />
      <body {...bodyAttrs}>
        <main id="app" dangerouslySetInnerHTML={{ __html: content }} />
        <script dangerouslySetInnerHTML={{ __html: state }} />
        {assets.js.map(path => <script key={path} src={path} />)}
      </body>
    </html>
  )
}

Html.propTypes = {
  styles: PropTypes.node.isRequired,
  assets: PropTypes.shape({
    css: PropTypes.array.isRequired,
    js: PropTypes.array.isRequired,
  }).isRequired,
  state: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Html
