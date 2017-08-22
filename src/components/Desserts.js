import React, { Component } from 'react'

export default class Desserts extends Component {
  render() {
    let items = this.props.items
    let key = 0
    let desserts = items.map(item => {
      key++
      console.log(key)
      console.log(items)
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
          <h4>Desserts</h4>
          <table className="table">
            <thead>
              <tr>
                <th className="col-md-3">Dish</th>
                <th className="col-md-8">Description</th>
                <th className="col-md-1">Price</th>
              </tr>
            </thead>
            {desserts}
          </table>
        </div>
      </div>
    )
  }
}
