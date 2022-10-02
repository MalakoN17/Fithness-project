import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import ExcisedDetail from './Pages/ExcisedDetail'
import {Box} from '@mui/material'
import Footer from './Components/Footer';
function App() {
  return (
    <Box width='400px' sx={{width: {x1: '1488px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExcisedDetail/>}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
