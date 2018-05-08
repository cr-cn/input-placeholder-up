import React, { Component } from 'react'

class App extends Component {

  constructor() {
    super()
    this.state = {
      focus: null
    }
  }

  inputOnFocus = () => {
    this.setState({ focus: true })
    console.log(this.state.focus)
  }

  render() {
    return (
      <div style={styles.container}>
        <input style={styles.input} onFocus={this.inputOnFocus} />
        <span style={styles.upView}>abc</span>
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'relative',
    height: 500,
    backgroundColor: 'red',
    padding: 100
  },
  input: {
    border: 'none',
    height: 30,
    lineHeight: 30
  },
  upView: {
    position: 'absolute',
    lineHeight: '30px',
    left: 100,
    top: 100,
    backgroundColor: 'white'
  }
}

export default App
