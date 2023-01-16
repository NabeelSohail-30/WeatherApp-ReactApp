import { useState, useEffect } from "react";
import axios from "axios";
import rateLimit from 'axios-rate-limit';


function Current() {
    const [data, setData] = useState([])

    useEffect(() => {

        const getCurrentWeather = async () => {
            const options = {
                method: 'GET',
                url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
                params: { lon: '38.5', lat: '-78.5' },
                headers: {
                    'X-RapidAPI-Key': 'f1c3708e10msh1b4ab8a9141c588p1345cejsndd176f0e412d',
                    'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
                }
            };

            const api = rateLimit(axios.create(), { maxRequests: 5, perMilliseconds: 1000 });

            try {
                const response = await api.get(options);
                setData(response.data);
            } catch (error) {
                if (error.response.status === 429) {
                    console.log("Too many requests, please try again later.");
                }
            }
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
