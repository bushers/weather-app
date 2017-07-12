import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const FiveDayForecast = (props) => {
  console.log(props.data)
  const data = props.data.list.filter((val, i) => {
    return i === 0 || i % 8 === 0
  })
  console.log(data)

  return (
    <div className={css(styles.wrapper)}>
      5 Day Forecast
    </div>
  )
}

export default FiveDayForecast

const styles = StyleSheet.create({
  padding: '1em 0'
})
