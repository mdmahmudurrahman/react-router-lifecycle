import React, { Component } from 'react';

class Life extends Component {
  // 1. get default props

  // 2. set default state 
  state = {
    title: 'Life cycles'
  }  
  
  // 3. before render
  componentWillMount() {
    console.log('3. before render') 
    // document.querySelector('h3').style.color('red') ## will through error
  }

  componentWillUpdate() {
    console.log("Will update");
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state.title)
    console.log(nextState.title)
    return this.state.title === nextState.title
  }

  componentWillReceiveProps() {
    console.log("Before receive props");
  }

  componentWillUnmount() {
    console.log("Unmounted");
  }

  // 4. render jsx
  render() {
    console.log("Render")
    return(
      <div>
        <h3>{this.state.title}</h3>
        <div 
          onClick={() => {
              this.setState({title: 'Life cycles events'})
            }
          }>
          Click to change state
        </div>
      </div>
    )
  }

  // 5. after rendering jsx
  componentDidMount() {
    console.log(' 5. after rendering jsx')
    document.querySelector('h3').style.color = 'green'
  }
}

export default Life