import {Component} from 'react'
import './index.css'

class WorkOut extends Component {
  render() {
    return (
      <div className="work-container">
        <div className="ww-container">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.e8kuuCbeimc5SoY6fgnK8AHaEK&pid=Api&P=0&h=180"
            alt="gym"
            className="workout-image"
          />
          <div className="w-two-container">
            <h1>WorkOut Routine</h1>
            <p>
              1. <span className="span-el">Fitness Equipment:</span> Gyms have a
              variety of fitness equipment to target different muscle groups and
              cardiovascular exercises. This equipment can include treadmills,
              ellipticals, rowing machines, weightlifting machines, dumbbells,
              barbells, and more.
            </p>
            <p>
              2. <span className="span-el">Classes and Programs: </span> Many
              gyms offer fitness classes such as yoga, pilates, spin classes,
              Zumba, aerobics, and more. These classes are led by instructors
              and provide structured workouts in a group setting.
            </p>
            <p>
              3. <span className="span-el">Fitness Equipment:</span> Gyms have a
              variety of fitness equipment to target different muscle groups and
              cardiovascular exercises. This equipment can include treadmills,
              ellipticals, rowing machines, weightlifting machines, dumbbells,
              barbells, and more.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default WorkOut
