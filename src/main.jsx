import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import TaskPage from './pages/TaskPage.jsx'

const root = document.getElementById("root");

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path ="/" element={<App/>}/>
      <Route path ="/Task" element={<TaskPage/>}/>
    </Routes>
  </BrowserRouter>,
)
