import React, { Component } from 'react'
import SelectForcast from './SelectForcast'
import ForcastDisplay from './ForcastDisplay'
import Input from './Input'

class App extends Component {
  state = {
    forcastType: null,
    city: 'Leeds',
    forcastData: null
  }

  forcastTypeBtnClick = (e) => {
    if(this.state.forcastType) {
      this.setState({ forcastType: null })
    }
    else {
      this.setState({ forcastType: e.target.name })
    }
  }

  getForcast = () => {
    const apiKey = 'eaf18ed4081c3113e6f5ab8081991e98'
    const apiCall = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${apiKey}`

    window.fetch(apiCall)
      .then(response => response.json())
      .then(data => {
        this.setState({ forcastData: data.weather[0].main })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
     <div className='container' style={{textAlign: 'center'}}>
       <div>Hello World</div>
       {this.state.forcastType ? (
         <ForcastDisplay handleClick={this.forcastTypeBtnClick} />
       ) : (
         <SelectForcast handleClick={this.forcastTypeBtnClick} />
       )}
       <Input />
     </div>
   )
  }
}

export default App
