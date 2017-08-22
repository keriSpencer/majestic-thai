import React, { Component } from 'react'
import '../styles/App.css'
import BaseLayout from './BaseLayout'
import Appetizers from './Appetizers'
import Desserts from './Desserts'
import Entrees from './Entrees'

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

    // fetch(url).then(r => r.json()).then(data => {
    //   this.setState({ Appetizers: data[0].Appetizers, entrees: data[0].Entrees, desserts: data[0].Desserts })
    // })

    fetch(url).then(r => r.json()).then(data => {
      this.setState({ appetizers: data[0].Appetizers, entrees: data[0].Entrees, desserts: data[0].Desserts })
    })
    console.log(this.state)
  }

  render() {
    // console.log(Appetizers)
    // Your render should consist of the BaseLayout with the following children components: Appetizers, Entrees, and Dessert.
    // Each component needs to receive state via props.
    return (
      <div>
        <div>
          <BaseLayout>
            <Appetizers items={this.state.appetizers} />
            <Desserts items={this.state.desserts} />
            <Entrees items={this.state.entrees} />
          </BaseLayout>
        </div>
      </div>
    )
    /*
        BaseLayout and nested components
        */
  }
}

export default App
