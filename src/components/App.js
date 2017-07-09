import React, { Component } from 'react'
import SelectForcast from './SelectForcast'
import ForcastDisplay from './ForcastDisplay'
import Input from './Input'

class App extends Component {
  state = {
    forcastType: null,
    forcastData: null,
    userInput: ''
  }

  forcastTypeBtnClick = (e) => {
    if(this.state.forcastType) {
      this.setState({ forcastType: null })
    }
    else {
      this.setState({ forcastType: e.target.name })
    }
  }

  onChange = (e) => {
    this.setState({ userInput: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.state.userInput ? this.getForcast() : alert('Please enter a city')
  }

  getForcast = () => {
    const apiKey = 'eaf18ed4081c3113e6f5ab8081991e98'
    const city = this.state.userInput.trim()
    const apiCall = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    window.fetch(apiCall)
      .then(response => response.json())
      .then(data => {
        this.setState({ forcastData: data.name })
        console.log(data)
      })
      .catch(err => console.log(`There was an error ${err}`))
  }

  render() {
    return (
     <div className='container' style={{textAlign: 'center'}}>
       <div>Weather App</div>
       {this.state.forcastType ? (
         <ForcastDisplay handleClick={this.forcastTypeBtnClick} />
       ) : (
         <SelectForcast handleClick={this.forcastTypeBtnClick} />
       )}
       <Input userInput={this.state.userInput}
              handleSubmit={this.onSubmit}
              onChange={this.onChange} />
     </div>
   )
  }
}

export default App
