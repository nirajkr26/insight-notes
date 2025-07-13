import { useState } from 'react'
import { Router,Routes,Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import AllNotes from './pages/all-notes'
import Creativity from './pages/creativity'
import Settings from './pages/settings'
import SignUp from './pages/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/notes' element={<AllNotes/>}/>
        <Route path='/creativity' element={<Creativity/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/login' element={<SignUp/>}/>
        <Route path='/*' element={<><div className='text-8xl text-center'>404</div><div className='text-5xl text-center'>Page Not Found</div></>}/>
      </Routes>
    </>
  )
}

export default App
