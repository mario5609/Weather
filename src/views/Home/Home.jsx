import React from 'react'
import "./Home.css"

import ContextProvider, { Context } from '../../Context/Context'

import Search from './Search'
import IconBanner from './IconBanner'
import WeatherInfo from './WeatherInfo'
import AdditonalInfo from './AdditonalInfo'
import Info from './Info'

export default function Home() {

  return (
    <ContextProvider>
      <div className='BaseColor' >
        <Search />
        <Info />
        <AdditonalInfo />
      </div>
    </ContextProvider>
  )
}
