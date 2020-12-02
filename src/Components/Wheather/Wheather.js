import React, { useContext } from 'react'
import { WeatherContext } from '../ContextApi/ContextApi'
import "../Wheather/Wheather.css"

function Wheather() {

    const [wheatherData, setwheatherData] = useContext(WeatherContext)

    let getTemp = wheatherData.temp - 273.15;

    return (
        <div className="weather_container">
            <div className="weather_image">
                <img src={`https://openweathermap.org/img/w/${wheatherData.icon}.png`} />
            </div>
            <div className="weather_container2">
                <div>
                    <h2>Humidity</h2>
                    <h3>{wheatherData.humidity}%</h3>
                </div>
                <div>
                    <h2>Description</h2>
                    <h3>{wheatherData.description}</h3>
                </div>
                <div>
                    <h2>Temperature</h2>
                    <h3>{getTemp.toFixed(2)}&#8451;</h3>
                </div>
            </div>
        </div>
    )
}

export default Wheather
