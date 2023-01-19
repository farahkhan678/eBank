import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/Login'
import ProtectedRoute from './components/ProtectRoute'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/eBank/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default App
