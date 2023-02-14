import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'

class Particles extends Component {
  render () {
    return (
      <>
        <div>...</div>
        <ParticlesBg className='particles' color='#d7e6f7' num={300} type="cobweb" bg={true} />
      </>
    )
  }
}

export default Particles;