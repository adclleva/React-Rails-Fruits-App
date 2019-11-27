import React from "react"
import PropTypes from "prop-types"
import { getFruits } from "../api"

class Fruits extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      fruits: [],
      errors: null
    }    
    this.loadFruits()
  }

  // componentWillMount = () => { // this will render on the server and on the client
  //   this.loadFruits()
  // }

  loadFruits = () => {
    getFruits()
      .then((fruits) => {
        this.setState({fruits}) // this is syntatical sugar
      })
  }

  render () {
    const { fruits } = this.state

    return (
      <React.Fragment>
        {fruits.map((fruit,index) => {
          return (<h3 key={index}>{fruit.name}</h3>)
        })}
      </React.Fragment>
    );
  }
}

export default Fruits
