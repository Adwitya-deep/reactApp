import React from 'react'
import Navbar from './components/navbar'
import Highlight from './components/Highlight'
import Hero from './components/Hero'


const App = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlight />
    </main>
  )
}

export default App