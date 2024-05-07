import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginForm from './Components/LoginForm'
import FitnessCalculator from './Components/FitnessCalculator'
import Gym from './Components/Gym'
import Yoga from './Components/Yoga'
import WorkOut from './Components/WorkOut'
import Swimming from './Components/Swimming'
import YogaDetails from './Components/YogaDetails'
import ProtectedRoute from './Components/ProtectedRoute'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <ProtectedRoute exact path="/" component={FitnessCalculator} />
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/gym" component={Gym} />
      <ProtectedRoute exact path="/yoga" component={Yoga} />
      <ProtectedRoute exact path="/workout" component={WorkOut} />
      <ProtectedRoute exact path="/swimming" component={Swimming} />
      <ProtectedRoute path="/poses/:id" component={YogaDetails} />
    </Switch>
  </BrowserRouter>
)

export default App
