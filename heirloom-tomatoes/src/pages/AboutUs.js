import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// As a potential client, when I visit your site, I can see an About Me page with your name and information


class AboutUs extends Component {
  render() {
    return(
      <div>
      <h1>About Us</h1>
        <ul>
          <li>Daniel Lagos</li>
          <li> email:  lagos.d@gmail.com</li>
        </ul>
      </div>
    )
  }
}

export default AboutUs
