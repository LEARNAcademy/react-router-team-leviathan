import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// As a potential client, I can see a link to your Skills page


class Projects extends Component {
  render() {
    return(
      <div>
        <ul>
          <li>
            <Link to="/projectOne/">Project 1</Link>
          </li>
          <li>
            <Link to="/projectTwo/">Project 2</Link>
          </li>
          <li>
            <Link to="/projectThree/">Project 3</Link>
          </li>

        </ul>

      </div>
    )
  }
}

export default Projects
