import React, { Component } from 'react'
import '../styles/App.css'
import BaseLayout from './BaseLayout'
// import Appetizers from './Appetizers'
// Import BaseLayout, Appetizers, Entrees, Desserts

class App extends Component {
  // Set initial state for appetizers, entrees, and desserts.
  // All should be set to empty arrays.
  constructor(props) {
    super(props)
    this.state = {
      appetizers: [],
      entrees: [],
      desserts: []
    }
  }

  // Lifecycle method
  // Fetch from http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu.
  // The response should return an object with appetizers, entres, and desserts.
  // Set these to state.
  // YOUR CODE HERE>

  componentDidMount() {
    let url = 'http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu'

    fetch(url).then(r => r.json()).then(data => {
      this.setState({ data: data[0] })
    })
  }

  render() {
    console.log('App page')
    // Your render should consist of the BaseLayout with the following children components: Appetizers, Entrees, and Dessert.
    // Each component needs to receive state via props.
    return (
      <div>
        <h2>Hi there</h2>
        {/* <Appetizers /> */}
        <div>
          <BaseLayout />
        </div>
      </div>
    )
    /*
        BaseLayout and nested components
        */
  }
}

export default App
