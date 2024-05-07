import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const NavBar = props => {
  const onRedirect = () => {
    const {history} = props
    history.replace('/login')
    Cookies.remove('jwt_token')
  }

  return (
    <div className="nav-container">
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.Ir8bd3JnIRX7uM10xYh9qwHaHa&pid=Api&P=0&h=180"
        alt="nav-img"
        className="nav-img"
      />
      <button type="button" className="nav-btn" onClick={onRedirect}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(NavBar)
