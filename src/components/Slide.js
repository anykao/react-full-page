import React from 'react'

export default class Slide extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    style: React.PropTypes.object
  }

  render() {
    return (
      <div {...this.props} style={Object.assign({}, this.props.style, {height: '100%'})}>
        {this.props.children}
      </div>
    )
  }
}

