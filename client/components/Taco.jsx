import React from 'react'
import request from 'superagent'



class Taco extends React.Component {

  state = {
    baseLayer: '',
    condiment: '',
    mixin: '',
    seasoning: '',
    shell: '',
  }

componentDidMount () {
  this.getMyTaco()
}

getMyTaco = () => {
  request.get("http://taco-randomizer.herokuapp.com/random/")
  .then (res => {
    console.log(res)
    this.setState({
      baseLayer: res.body.base_layer.name,
      condiment: res.body.condiment.name,
      mixin: res.body.mixin.name,
      seasoning: res.body.seasoning.name,
      shell: res.body.shell.name,
    })
  })
}
  render() {
    return (
      <>
        <h2>Here is Taco recipe</h2>
        <p>Base Layer: {this.state.baseLayer} </p>
        <p>Shell: {this.state.shell} </p>
        <p>Seasoning: {this.state.seasoning} </p>
        <p>Mixin: {this.state.mixin} </p>
        <p>Condiment: {this.state.condiment} </p>
      
      </>
    )

  }
}

export default Taco