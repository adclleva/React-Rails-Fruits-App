import React from "react"
import PropTypes from "prop-types"
import {BrowserRouter as Router, Route, Link } from "react-router-dom"
import Fruits from "./Fruits"

class Main extends React.Component {

  render () {
    return (
      <Router>
        <h1>This is our main component</h1>
        <Route path="/" component={Fruits}/>
      </Router>
    );
  }
}

export default Main
