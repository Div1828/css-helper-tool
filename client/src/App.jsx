import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BoxStyler from './pages/BoxStyler'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-4xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/box-styler" element={<BoxStyler />} />
        </Routes>
      </div>
      <ThemeToggle />
    </main>
  )
}

export default App
