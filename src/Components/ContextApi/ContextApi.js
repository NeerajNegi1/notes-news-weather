import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const NewsContext = createContext();

export const NewsProvider = props => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('https://gnews.io/api/v4/top-headlines?token=b6e530ffca218c5e6b842b8927c3f6f9').then((res) => {
            console.log("res", res);
            setNews(res.data.articles);
            console.log(news);
        })
    }, [])

    return (
        <NewsContext.Provider value={[news, setNews]}>
            {props.children}
        </NewsContext.Provider>
    )
}

export const WeatherContext = createContext();

export const WeatherProvider = props => {

    const [wheatherData, setwheatherData] = useState({
        temp: '',
        humidity: '',
        description: '',
        icon: ''
    });

    useEffect(() => {
        let location = null;
        let latitude = null;
        let longitude = null;
        let lat;
        let lon;
        if (window.navigator && window.navigator.geolocation) {
            location = window.navigator.geolocation
        }
        if (location) {
            location.getCurrentPosition(function (position) {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                lat = Math.trunc(latitude);
                lon = Math.trunc(longitude);
                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a3971676025ca82bde23f3c29c099bc4`)
                    .then(response => {
                        wheatherData.temp = response.data.main.temp;
                        wheatherData.humidity = response.data.main.humidity;
                        wheatherData.description = response.data.weather[0].description;
                        wheatherData.icon = response.data.weather[0].icon;
                    })
                    .catch(err => console.log("err", err))
            })
        }
    }, [])

    return (
        <WeatherContext.Provider value={[wheatherData, setwheatherData]}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export const NotesContext = createContext();

export const NotesProvider = props => {
    const [Notes, setNotes] = useState([]);
    return (
        <NotesContext.Provider value={[Notes, setNotes]}>
            {props.children}
        </NotesContext.Provider>
    )
}