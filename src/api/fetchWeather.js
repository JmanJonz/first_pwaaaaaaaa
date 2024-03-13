import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "22aa84ca6d89fbd8ace0e1780cfbea4a";

const fetchWeather = async (query) =>{
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: "imperial",
            APPID: API_KEY
        }
    });
    return data;
}

export {fetchWeather};