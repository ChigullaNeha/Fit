import {Component} from 'react'
import {MdAccessTime} from 'react-icons/md'
import {AiOutlineDollar} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import Calender from '../Calender'
import NavBar from '../NavBar'
import Profile from '../Profile'
import './index.css'

class FitnessCalculator extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="cc-container">
          <Profile />
          <Calender />
          <div className="main-container">
            <Link
              to="/workout"
              style={{paddingLeft: 13, textDecoration: 'none'}}
            >
              <div>
                <div className="workout-container">
                  <div className="text-container">
                    <h1>Morning Routine</h1>
                    <div className="price-time">
                      <MdAccessTime className="img" />
                      <p>25-30 mins</p>
                    </div>
                    <div className="price-time">
                      <AiOutlineDollar className="img" />
                      <p>Free</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/gym" style={{paddingLeft: 13, textDecoration: 'none'}}>
              <div>
                <div className="Gym-container">
                  <div className="text-container">
                    <h1>Gym Workout</h1>
                    <div className="price-time">
                      <MdAccessTime className="img" />
                      <p>40-60 mins</p>
                    </div>
                    <div className="price-time">
                      <AiOutlineDollar className="img" />
                      <p>15$/ month</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/yoga" style={{paddingLeft: 13, textDecoration: 'none'}}>
              <div>
                <div className="yoga-container">
                  <div className="text-container">
                    <h1>Yoga & Health</h1>
                    <div className="price-time">
                      <MdAccessTime className="img" />
                      <p>25-30 mins</p>
                    </div>
                    <div className="price-time">
                      <AiOutlineDollar className="img" />
                      <p>Free</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              to="/swimming"
              style={{paddingLeft: 13, textDecoration: 'none'}}
            >
              <div>
                <div className="swim-container">
                  <div className="text-container">
                    <h1>Swimming</h1>
                    <div className="price-time">
                      <MdAccessTime className="img" />
                      <p>25-30 mins</p>
                    </div>
                    <div className="price-time">
                      <AiOutlineDollar className="img" />
                      <p>Free</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default FitnessCalculator
