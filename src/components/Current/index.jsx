import { useState, useEffect } from "react";
import axios from "axios";


function Current() {
    let city = "Karachi"
    const [data, setData] = useState([])

    useEffect(() => {

        const getCurrentWeather = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=6a6cb112b4746fd1d963422db62a0782&q=${city}`)
                console.log(response);
                const data = await response.data.data;
                setData(data);
            } catch (error) {
                console.log("Error getting Weather: ", error);
            }
        }
        getCurrentWeather();

    }, [city])


    return <div>

        <h1>
            Current Weather
        </h1>


        <div>
            {data?.map((data) => (
                <div key={data.id}>
                    <h2>{data.name}</h2>
                    <h3>{data.main.temp}</h3>
                    <h3>{data.main.feels_like}</h3>
                    <h3>{data.main.temp_min}</h3>
                    <h3>{data.main.temp_max}</h3>
                    <h3>{data.main.pressure}</h3>
                    <h3>{data.main.humidity}</h3>
                    <h3>{data.weather[0].main}</h3>
                    <h3>{data.weather[0].description}</h3>
                    <h3>{data.weather[0].icon}</h3>
                    <h3>{data.wind.speed}</h3>
                    <h3>{data.wind.deg}</h3>
                    <h3>{data.sys.country}</h3>
                    <h3>{data.sys.sunrise}</h3>
                    <h3>{data.sys.sunset}</h3>
                    <h3>{data.timezone}</h3>
                    <h3>{data.dt}</h3>
                    <h3>{data.id}</h3>
                    <h3>{data.cod}</h3>
                </div>
            ))}
        </div>

    </div>
}

export default Current;
