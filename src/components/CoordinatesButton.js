import React from 'react'

export default class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props)
  }

  click = (e) => {
    const ans = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(ans)
  }
  render() {
    return <button onClick={this.click}></button>
  }
}
