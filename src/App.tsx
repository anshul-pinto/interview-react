import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home'
import { FileExplorerPage } from './pages/file-explorer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/file-explorer" element={<FileExplorerPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
