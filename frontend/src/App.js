import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/usermaster/dashboardComponent/About';
import Navbar from './components/usermaster/dashboardComponent/Navbar';
import Dashboard from './components/usermaster/dashboardComponent/Dashboard';
import Shipments from './components/usermaster/dashboardComponent/Shipments';
import Register from './components/usermaster/dashboardComponent/Register';
import Login from './components/usermaster/dashboardComponent/Login';
import Fpassword from './components/usermaster/dashboardComponent/Fpassword';
import Header from './components/usermaster/dashboardComponent/Header';

function App() {
  const auth = localStorage.getItem('user')
  if (auth) {
    return (
      <div className="App">
        <BrowserRouter>
        <Header/>
        <Navbar>
          <Routes>
           <Route path='/dashboard' element={<Dashboard/>} />
            <Route path="/shipments" element={<Shipments/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/logout"/>
          </Routes>
          </Navbar>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div className="App">
        <BrowserRouter>
       
          <Routes>
          <Route path='/' element={ <Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path='/fpass' element={<Fpassword/>} />
          </Routes>
        </BrowserRouter>
        </div>
  );
    }
}

export default App;
