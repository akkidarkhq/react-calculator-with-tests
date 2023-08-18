
import './App.css';
import Calculator from './components/Calculator/Calculator.jsx';
import Login from './components/Login/Login.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { Route,Routes, } from 'react-router-dom';
import Register from './components/Register/Register.jsx';
import { Profile } from './components/Profile/Profile.jsx';




function App() {
  
  return (
     <div className="App">
          <Navbar/>
    <Routes>
            {/* <Route path="*" element={<App/>}/> */}
            <Route path="*" element={<Login/>}/>
            <Route path="calc" element={<div className='calcApp'><Calculator className="calc" id={"calc1"}/></div>}/>
            <Route path="signin" element ={<Register/>}/>
            <Route path='profile' element = {<Profile/>}/>
    </Routes>
        </div> 
    
  
    //   <Routes>
    //   <Route path='/' element={<App/>} /> 
    //   <Routes path="/" element={<App/>} /> 
    //       <Route path=""/>
    //       <Route path=""/>
    //       <Route path=""/> 
    //      <div className="App">
    //       <Navbar/>
    //       <Calculator/>
    //       <Login/>
    //     </div> 
    //  </Routes> 

    
  );
}

export default App;
