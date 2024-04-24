import React, { useEffect, useState } from 'react'
import moment from 'moment'

import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import drizzle from "../../assets/icons/drizzle.svg"
import rain from "../../assets/icons/rain.svg"
import rainthunder from "../../assets/icons/rainthunder.svg"
import snow from "../../assets/icons/snow.svg"
import sun from "../../assets/icons/sun.svg"
import suncloud from "../../assets/icons/suncloud.svg"
import atmosphere from "../../assets/icons/atmosphere.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { Context } from '../../Context/Context'
import sad from "../../assets/icons/sad.svg"

export default function WeatherInfo() {

  const { city, setCity, data, setData, symbol, setSymbol } = useContext(Context)

  const date = Date()

  const formatedated = moment(date).format("dddd, MMMM Do Y");

  useEffect(() => {
    if (typeof data.main != "undefined") {
      if (data.weather[0].main == "Clouds") {
        setSymbol(suncloud)
      }else if(data.weather[0].main == "Clear"){
        setSymbol(sun)
      }else if(data.weather[0].main == "Snow"){
        setSymbol(snow)
      }else if(data.weather[0].main == "Rain"){
        setSymbol(rain)
      }else if(data.weather[0].main == "Drizzle"){
        setSymbol(drizzle)
      }else if(data.weather[0].main == "Thunderstorm"){
        setSymbol(rainthunder)
      }else if(data.weather[0].main == "Mist" || "Smoke" || "Haze" || "	Dust" || "Fog" || "Sand" || "Dust" || "Ash" || "Squall" || "Tornado"){
        setSymbol(atmosphere)
      } else {
        setSymbol(atmosphere)
      }
    } else {
      ''
    }
  }, [data, symbol])


  return (
    <>
      {(typeof data.main != "undefined") ? (
        <div>
          <div className='IconBannerHolder'>
            <div className='locationHolder'>
              <h3><FontAwesomeIcon icon={faLocationDot} /> {data.name}</h3>
              <p><i>{formatedated}</i></p>
            </div>
            <img src={symbol} />
          </div>
        </div>
      ) : (
        <div>
          <div className='IconBannerHolder'>
            <div className='locationHolder'>
              <h3><i>Invalid !</i></h3>
            </div>
            <img src={sad} id='sad' />
          </div>
        </div>
      )}
    </>
  )
}
