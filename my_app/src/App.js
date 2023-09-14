import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from "./Componenets/Navbar"
import Register from './Componenets/Register';
import Detail from './Componenets/Detail';
import Edit from './Componenets/Edit';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Componenets/Home';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/register' Component={Register} />
          <Route path='/detail/:id' Component={Detail}  />
          <Route path='/edit/:id' Component={Edit} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
