import React, { useEffect } from 'react'
import WeatherInfo from './WeatherInfo'
import IconBanner from './IconBanner'
import { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../../Context/Context'

export default function Info() {

    const { data, setData} = useContext(Context)

    const [theme, setTheme] = useState()

    useEffect(() => {
        if (typeof data.main != "undefined") {
            const degree = Math.round(data.main.temp - 273.15)
            if (degree <= 0) {
                setTheme("cold")
            } else if (degree <= 15) {
                setTheme("mild")
            } else if (degree <= 25) {
                setTheme("pleasent")
            } else {
                setTheme("warm")
            }
        } else {
            ''
        }
    }, [data,theme])

    return (
        <div className={theme}>
            <IconBanner />
            <WeatherInfo />
        </div>
    )
}
