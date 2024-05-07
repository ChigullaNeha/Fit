import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: true,
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangepassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSucces = jwtToken => {
    const {history} = this.props
    history.replace('/')
    Cookies.set('jwt_token', jwtToken, {expires: 30})
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSucces(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onClickShowPassword = () => {
    const {showPassword} = this.state
    this.setState({showPassword: !showPassword})
    console.log(showPassword)
  }

  render() {
    const {
      username,
      password,
      showPassword,
      showErrorMsg,
      errorMsg,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <div className="first-login-container">
          <div className="contaienr">
            <h1 className="heading">Fitness Calculator</h1>
          </div>
          <form onSubmit={this.onSubmitForm}>
            <label htmlFor="username">USERNAME</label>
            <br />
            <input
              type="text"
              className="input-el"
              onChange={this.onChangeUsername}
              value={username}
            />
            <br />
            <label htmlFor="password">PASSWORD</label>
            <br />
            {showPassword ? (
              <input
                type="password"
                className="input-el"
                onChange={this.onChangepassword}
                value={password}
              />
            ) : (
              <input
                type="text"
                className="input-el"
                onChange={this.onChangepassword}
                value={password}
              />
            )}
            <div className="show-password-container">
              <input
                type="checkbox"
                className="input-checkbox"
                onChange={this.onClickShowPassword}
              />
              <p className="checkbox-text">show password</p>
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
            {showErrorMsg && <p className="error-msg">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
