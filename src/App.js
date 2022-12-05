import './App.css';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import PasswordReset from './components/PasswordReset';

function App() {
  return <>
<Routes>
  <Route path='/' element={<Signup/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/forgotPassword' element={<ForgotPassword/>}/>
  <Route path='/PasswordReset/:email/:token' element={<PasswordReset/>}/>
</Routes>
  </>
}

export default App;
