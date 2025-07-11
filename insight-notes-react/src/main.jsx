import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Dashboard from "./pages/dashboard.jsx"
import AllNotes from "./pages/all-notes.jsx"
import Creativity from './pages/creativity.jsx'
import Settings from './pages/settings.jsx'

createRoot(document.getElementById('root')).render(
    // <Dashboard/>
    // <AllNotes/>
    // <Creativity/>
    <Settings />
)
