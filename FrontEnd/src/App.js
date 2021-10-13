import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginTest from './Test/Login Test'
//import Home from './AppHome'
import AdminHome from './Test/AdminHome'
import UserHome from './Test/UserDash'
import Topbar from './components/Admin/topbar/Topbar'
import Sidebar from './components/Admin/Sidebar/Sidebar'
import Home from './components/Admin/Pages/Home/Home'
import UserList from './components/Admin/Pages/UserList/UserList'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/login'>
            <LoginTest />
          </Route>
          <Route exact path='/admin'>
            <AdminHome />
          </Route>
          <Route exact path='/user'>
            <UserHome />
          </Route>
          <Route>
            <Topbar />
            <div className='container'>
              <Sidebar />
              <Switch>
                <Route exact path='/admin1'>
                  <Home />
                </Route>
                <Route path='/admin1/users'>
                  <UserList />
                </Route>
              </Switch>
            </div>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
