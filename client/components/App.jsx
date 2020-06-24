import React from 'react'
import request from 'superagent'
import Taco from './Taco'
// import ximage from '../../server/public/images/x_image.png'



class App extends React.Component {

  state = {
    advice: '',
    showForm: true,
    showTaco: false,
  }

  returnHome= () => {
    this.setState({
      advice: '',
      showForm: true
    })
  }

  showTaco = ()=> {
    this.setState ({
      showTaco: !this.state.showTaco
    })
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
        advice: JSON.parse(res.text).slip.advice,
        showForm: false
      })
    })
  }

  render() {
    return (
      <>
        <h1>AdviceGiver.com</h1>

        {this.state.showForm
          ? <form onSubmit={this.handleSubmit} >
            <label> <h2>Tell me your worries </h2> </label>
            <input type="text" id='worriesTxt' />
            <input type="submit" />
          </form>
          : <div>
            <p>{this.state.advice}</p>
            <button onClick={this.returnHome}>Get More Great Advice</button>
          </div>}
        <img className='hugeX' src="/images/x_image.png" alt="" />
        <h1>TacoGiver.com</h1>
        {this.state.showTaco ?
        <>
          <Taco /> <button onClick={this.showTaco} >Home </button>
        </> :
          <button onClick={this.showTaco}> Give me Taco!</button>
        }


      </>
    )
  }

}

export default App
