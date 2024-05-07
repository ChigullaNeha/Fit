import {Component} from 'react'
import './index.css'

class Calender extends Component {
  state = {isClicked: false}

  onClickBtn = () => {
    this.setState({isClicked: true})
  }

  renderDaysOfMonth(monthIndex) {
    const numDays = new Date(2024, monthIndex, 0).getDate()
    const daysArray = Array.from({length: numDays}, (_, i) => i + 1)
    const {isClicked} = this.state
    console.log(isClicked)

    return daysArray.map(day => (
      <button
        type="button"
        key={day}
        className={`day ${isClicked} &&  clicked`}
        onClick={this.onClickBtn}
      >
        {day}
      </button>
    ))
  }

  renderMonths() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    return months.map((month, index) => (
      <div className="month">
        <div className="month-name">{month}</div>
        <div className="days-container">
          {this.renderDaysOfMonth(index + 1)}
        </div>
      </div>
    ))
  }

  render() {
    return <div className="horizontal-calendar">{this.renderMonths()}</div>
  }
}

export default Calender
