
import { Routes, Route } from 'react-router-dom'
import Nofound from './pages/nofound'
import Gallery from './components/Gallery'
import Nonext from './pages/Nonext'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Gallery />} />
        <Route path='/Nonext' element={<Nonext />} />
        <Route path="*" element={<Nofound />} />
      </Routes>






    </>
  )
}

export default App
