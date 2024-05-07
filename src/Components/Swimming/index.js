import {Component} from 'react'
import './index.css'

class WorkOut extends Component {
  render() {
    return (
      <div className="work-container">
        <div className="ww-container">
          <img
            src="https://sportsmatik.com/uploads/matik-sports-corner/matik-know-how/swimming1_1562582117.jpg"
            alt="gym"
            className="workout-image"
          />
          <div className="w-two-container">
            <h1>Swimming</h1>
            <p>
              1. <span className="span-el">Full-Body Workout:</span>Swimming
              engages multiple muscle groups simultaneously, providing a
              comprehensive full-body workout. It helps tone muscles, build
              strength, and improve endurance.
            </p>
            <p>
              2. <span className="span-el">CLow-Impact Exercise: </span>Swimming
              is a low-impact exercise, making it suitable for people of all
              ages and fitness levels. The buoyancy of water reduces stress on
              joints, which can be beneficial for individuals with arthritis or
              those recovering from injuries.
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
