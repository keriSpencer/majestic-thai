import React, { Component } from 'react'
import '../styles/App.css'

export default class Appetizers extends Component {
  render() {
    let key = 0
    let appetizers = this.props.items.map(item => {
      key++
      return (
        <tbody key={key}>
          <tr>
            <td>
              {item.dish}
            </td>
            <td>
              {item.description}
            </td>
            <td>
              {item.price}
            </td>
          </tr>
        </tbody>
      )
    })
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h4>Appetizers</h4>
          <table className="table">
            <thead>
              <tr>
                <th className="col-md-3">Dish</th>
                <th className="col-md-8">Description</th>
                <th className="col-md-1">Price</th>
              </tr>
            </thead>
            {appetizers}
          </table>
        </div>
      </div>
    )
  }
}
