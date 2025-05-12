import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Page404 from './Component/Page404';
import User from "./Component/User";
import Filter from './Component/Filter';
import Company from './Component/Company';
import Others from './Component/Others';
import Channel from './Component/Channel';
import FormWithValidation from './Component/Home';

function App() {
  return (
    <>
    <FormWithValidation/>
    {/* <Navbar/> */}
    {/* <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about/' element={<About/>}>
         <Route path='company' element={<Company/>}/>
         <Route path='others' element={<Others/>}/>
         <Route path='channel' element={<Channel/>}/>
      </Route>
      <Route path='/filter' element={<Filter/>}/>
      <Route path='/user/:name' element={<User/>}/>
      {/* <Route path='/*' element={<Page404/>}/> */}
      {/* <Route path='/*' element={<Navigate to="/"/>}/> */}
    {/* </Routes> */} 
    </>
  );
}

export default App;
