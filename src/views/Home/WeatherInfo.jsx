import React, { useContext } from 'react'
import { Context } from '../../Context/Context'

export default function WeatherInfo() {
    const { data, setData } = useContext(Context)
    return (
        <>
            {(typeof data.main != "undefined") ? (
                <div>
                    <div className='normalInfo'>
                        <h1>{Math.round(data.main.temp - 273.15)} &deg;C</h1>
                        <h4><i>{data.weather[0].description}</i></h4>
                        <div className='detailedInfo'>
                            <p>Feels Like &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {Math.round(data.main.feels_like - 273.15)} &deg;C</p>
                            <p>Min Temp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {Math.round(data?.main?.temp_min - 273.15)} &deg;C</p>
                            <p>Max Temp &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {Math.round(data.main.temp_max - 273.15)} &deg;C</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className='normalInfo'>
                        <h1>___</h1>
                        <h4>_______</h4>
                        <div className='detailedInfo'>
                            <p>Feels Like &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ____</p>
                            <p>Min Temp &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ____</p>
                            <p>Max Temp &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ____</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
