import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
//import NoMach from '../Pages/NoMach'

function route () {
  return (
  <Routes>
    <Route path='/' element={<Home />} />
    {/*<Route path='*' element={<NoMach />} />*/}
  </Routes>
  )
}

export default route
