import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import theme from "../../src/styles/theme"
import "../../src/static/fonts/fonts.css"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      {children}
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
