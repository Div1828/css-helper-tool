import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ThemeToggle from './components/ThemeToggle'

import Home from './pages/Home'
import BoxStyler from './pages/BoxStyler'
import ButtonStyler from './pages/ButtonStyler'
import FontTweaker from './pages/FontTweaker'
import ShadowForge from './pages/ShadowForge'


function App() {
  return (
    <main className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-4xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/box-styler" element={<BoxStyler />} />
          <Route path="/button-styler" element={<ButtonStyler />} />
          <Route path="/font-tweaker" element={<FontTweaker />} />
          <Route path="/shadow-forge" element={<ShadowForge />} />
        </Routes>
      </div>
      <ThemeToggle />
    </main>
  )
}

export default App
