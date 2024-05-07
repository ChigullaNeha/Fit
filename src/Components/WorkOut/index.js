import {Component} from 'react'
import './index.css'

class WorkOut extends Component {
  render() {
    return (
      <div className="work-container">
        <div className="ww-container">
          <img
            src="https://images.pexels.com/photos/868483/pexels-photo-868483.jpeg?cs=srgb&dl=active-aerobics-balance-868483.jpg&fm=jpg"
            alt="workout"
            className="workout-image"
          />
          <div className="w-two-container">
            <h1>WorkOut Routine</h1>
            <p>
              Exercising regularly, every day if possible, is the single most
              important thing you can do for your health. In the short term,
              exercise helps to control appetite, boost mood, and improve sleep.
              In the long term, it reduces the risk of heart disease, stroke,
              diabetes, dementia, depression, and many cancers.
            </p>
            <ul>
              <li>improving control of blood glucose</li>
              <li>
                Weight-bearing exercise helps build strong muscles, which is
                particularly importantTrusted Source for adults as they get
                older.
              </li>
              <li>increasing the efficiency of sleep</li>
              <li>
                <span>Cardiovascular (Cardio) Workouts:</span>Running, cycling,
                swimming, dancing
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default WorkOut
