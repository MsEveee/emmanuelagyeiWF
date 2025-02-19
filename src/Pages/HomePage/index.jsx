import React from 'react'
import Hero from '../../components/HomePage/Hero'
import About from '../../components/HomePage/About'
import Products from '../../components/HomePage/Products'
import Contact from '../../components/HomePage/Contact'
import TeamM from '../../components/HomePage/TeamM'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Products/>
        <Contact/>
        <TeamM/>
    </div>
  )
}

export default HomePage