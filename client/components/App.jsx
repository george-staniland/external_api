import React from 'react'
import request from 'superagent'


class App extends React.Component {

  state = {
    advice: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    document.getElementById ('worriesTxt').value = ''
    this.getMyAdvice ()
  }

  getMyAdvice = () => {
    request.get("https://api.adviceslip.com/advice")
    .then (res => {
      this.setState({
        advice: JSON.parse(res.text).slip.advice
      })
    })
  }

  render() {
    return (
      <>
        <h1>AdviceGiver.com</h1>
        <form onSubmit={this.handleSubmit} >
          <label> <h2>Tell me your worries </h2> </label>
          <input type="text" id='worriesTxt'/>
          <input type="submit" />
        </form>
        {this.state.advice && <p>{this.state.advice}</p>}
      </>
    )
  }

}

export default App
