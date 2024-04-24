import React, { useContext } from 'react'

import humid from "../../assets/icons/humid.svg"
import wind from "../../assets/icons/wind.svg"
import pressure from "../../assets/icons/pressure.png"
import { Context } from '../../Context/Context'

export default function AdditonalInfo() {
    const { data, setData } = useContext(Context)

    return (
        <>
            {(typeof data.main != "undefined") ? (
                <div>
                    <div className='extraInfo'>
                        <div className='details'>
                            <img src={humid} />
                            <div>
                                <p>{data.main.humidity} <b>%</b></p>
                                <h4>Humidity</h4>
                            </div>
                        </div>
                        <div className='details'>
                            <img src={pressure} className='pressureimg' />
                            <div>
                                <p>{data.main.pressure} <b>Pa</b></p>
                                <h4>Pressure</h4>
                            </div>
                        </div>
                        <div className='details'>
                            <img src={wind} />
                            <div>
                                <p>{data.wind.speed} <b>Km/h</b></p>
                                <h4>Wind speed </h4>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className='extraInfo'>
                        <div className='details'>
                            <img src={humid} />
                            <div>
                                <p>__</p>
                                <h4>Humidity</h4>
                            </div>
                        </div>
                        <div className='details'>
                            <img src={pressure} className='pressureimg' />
                            <div>
                                <p>__</p>
                                <h4>Pressure</h4>
                            </div>
                        </div>
                        <div className='details'>
                            <img src={wind} />
                            <div>
                                <p>__</p>
                                <h4>Wind speed </h4>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
