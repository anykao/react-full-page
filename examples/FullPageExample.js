import React from 'react'
import {FullPage, Slide} from '../src'

export default class FullPageExample extends React.Component {
  render() {
    return (
      <FullPage>
        <Slide style={{background: '#2ECC40'}}>
          #1
        </Slide>
        <Slide style={{background: '#0074D9'}}>
          #2
        </Slide>
        <Slide style={{background: 'tomato'}}>
          #3
        </Slide>
      </FullPage>
    )
  }
}
