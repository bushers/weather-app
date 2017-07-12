import React, { Component } from 'react'
import SelectForecast from './SelectForecast'
import ForecastDisplay from './ForecastDisplay'
import Input from './Input'
import { StyleSheet, css } from 'aphrodite'

class App extends Component {
  state = {
    forecastType: null,
    forecastData: null,
    userInput: ''
  }

  forecastTypeBtnClick = (e) => {
    if (this.state.forecastType) {
      this.setState({
        forecastType: null,
        forecastData: null
      })
    } else {
      this.setState({ forecastType: e.target.name })
    }
  }

  onChange = (e) => {
    this.setState({ userInput: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.state.userInput ? this.getForecast() : window.alert('Please enter a city')
  }

  getForecast = () => {
    const apiKey = 'eaf18ed4081c3113e6f5ab8081991e98'
    const city = this.state.userInput.trim()
    const forecast = this.state.forecastType === '5day' ? 'forecast' : 'weather'
    const apiCall = `http://api.openweathermap.org/data/2.5/${forecast}?q=${city}&appid=${apiKey}`

    window.fetch(apiCall)
      .then(response => response.json())
      .then(data => {
        if (data.cod === '404') {
          window.alert('City not found. Please try again.')
        } else {
          this.setState({ forecastData: data })
        }
      })
      .catch(err => console.log(`There was an error ${err}`))
  }

  render () {
    return (
      <div className={css(styles.wrapper)}>
        <h1 className={css(styles.title)}>Weather App</h1>
        {this.state.forecastType ? (
          <div>
            <ForecastDisplay
              data={this.state.forecastData}
              handleClick={this.forecastTypeBtnClick}
              forecastType={this.state.forecastType} />
            <Input
              userInput={this.state.userInput}
              handleSubmit={this.onSubmit}
              onChange={this.onChange} />
          </div>
        ) : (
          <SelectForecast handleClick={this.forecastTypeBtnClick} />
        )}
      </div>
    )
  }
}

export default App

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: '580px',
    margin: '2em auto',
    padding: '2em 1em',
    textAlign: 'center',
    border: '1px solid black'
  },
  title: {
    fontSize: '2em',
    fontWeight: 'bold'
  }
})
