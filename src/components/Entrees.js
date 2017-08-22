import React, { Component } from 'react'

export default class Entrees extends Component {
  render() {
    // Set items' value....
    let items = this.props.items
    let key = 0
    let entrees = items.map(item => {
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
          <h4>Entrees</h4>
          <table className="table">
            <thead>
              <tr>
                <th className="col-md-3">Dish</th>
                <th className="col-md-8">Description</th>
                <th className="col-md-1">Price</th>
              </tr>
            </thead>
            {entrees}
          </table>
        </div>
      </div>
    )
  }
}
