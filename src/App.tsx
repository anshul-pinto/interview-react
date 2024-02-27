import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home'
import { FileExplorerPage } from './pages/file-explorer'
import { Stepper } from './pages/stepper'
import { ProgressPage } from './pages/progress'
import { InfiniteScrollPage } from './pages/infinite-scroll'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/file-explorer" element={<FileExplorerPage />} />
        <Route path="/stepper" element={<Stepper />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/infinite-scroll" element={<InfiniteScrollPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
