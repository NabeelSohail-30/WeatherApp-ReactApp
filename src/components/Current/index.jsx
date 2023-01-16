import { useState, useEffect } from "react";
import axios from "axios";

function Current() {
    const [data, setData] = useState([])

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);

    navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
    });

    useEffect(() => {

        const getCurrentWeather = async () => {
            const options = {
                method: 'GET',
                url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
                params: { lon: lat, lat: long },
                headers: {
                    'X-RapidAPI-Key': 'f1c3708e10msh1b4ab8a9141c588p1345cejsndd176f0e412d',
                    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
                }
            };

            axios.request(options).then(function (response) {
                console.log(response.data);
                setData(response.data.data)
            }).catch(function (error) {
                console.error(error);
            });
        }

        getCurrentWeather();

    }, [])


    return <div>

        <h1>
            Current Weather
        </h1>


        <div>
            {data.map((item) => (
                <div key={item.ts}>
                    <h2>{item.city_name}</h2>
                    <p>{item.weather.description}</p>
                    <p>{item.temp}°C</p>
                    <p>{item.app_temp}°C</p>
                    <p>{item.wind_spd} m/s</p>
                    <p>{item.wind_cdir_full}</p>
                    <p>{item.rh}%</p>
                    <p>{item.pres} hPa</p>
                    <p>{item.slp} hPa</p>
                    <p>{item.dewpt}°C</p>
                    <p>{item.clouds}%</p>
                    <p>{item.vis} km</p>
                    <p>{item.snow} mm</p>
                    <p>{item.precip} mm</p>
                    <p>{item.ob_time}</p>
                </div>
            ))}
        </div>

    </div>
}

export default Current;
