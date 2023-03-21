import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import LoginPage from './components/Login/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Landing/>} />
        <Route path='/login' element = {<LoginPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
