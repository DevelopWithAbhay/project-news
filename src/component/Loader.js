import React, { Component } from 'react'
import loading2 from "./loading2.gif";
export class Loader extends Component {
  render() {
    return (
      <div className='text-center my-3 
      '>
        <img src={loading2} alt="loading"  />
      </div>
    )
  }
}

export default Loader
