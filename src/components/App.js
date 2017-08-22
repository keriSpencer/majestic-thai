import React, { Component } from 'react'
import '../styles/App.css'
import BaseLayout from './BaseLayout'
import Appetizers from './Appetizers'
import Desserts from './Desserts'
import Entrees from './Entrees'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      appetizers: [],
      entrees: [],
      desserts: []
    }
  }

  componentDidMount() {
    let url = 'http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu'

    fetch(url).then(r => r.json()).then(data => {
      this.setState({ appetizers: data[0].Appetizers, entrees: data[0].Entrees, desserts: data[0].Desserts })
    })
    console.log(this.state)
  }

  render() {
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
  }
}

export default App
