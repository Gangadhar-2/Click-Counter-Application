// Write your code here
import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}
  increment = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    return (
      <div className="bg">
        <h1 className="head">
          The Button has been clicked {this.state.count} times
        </h1>
        <p className="para">Click the button to increase the count.</p>
        <button className="btn" onClick={this.increment}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
