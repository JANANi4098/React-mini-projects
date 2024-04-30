import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import searchicon from "./assets/searchicon.jpeg"
import sun from "./assets/sun.jpg"
import sunicon from "./assets/sunicon.webp"
import wind from "./assets/wind.avif"
import windicon from "./assets/windicon.png"
import snow from "./assets/snow.webp"
import snowicon from "./assets/snowicon.jpg"
import rainicon from "./assets/rainicon.jpg"
import humidityicon from "./assets/humidityicon.png"
import drizzleicon from "./assets/drizzleicon.png"
import clearicon from "./assets/clearicon.png"
import cloudicon from "./assets/cloudicon.png"
const Weatherdetails=({icon,temp,city,country,lat,log,humidity,wind})=>{
  return(
    <>
    <div className="image">
      <img src={icon} alt="Image" ></img></div>
      <div className='temp'>{temp}</div>
      <div className="location">{city}</div>
      <div className='country'>{country}</div>
      <div className="cords">
        <div><span className='latitude'>latitude</span>
        <span >{lat}</span></div>
      <div><span className='longitude'>latitude</span>
        <span >{log}</span></div>
        </div>
        <div className= "data-container"> <div className="element">
<img src={humidityicon} className= "icon" alt="humdity"></img>  
<div className="data"><div className="humidity-percent">{humidity}</div>
<div className="text">Humidity</div></div>

</div>
<div className= "element">
<img src={windicon} alt="wind" className="icon" /> <div className="data">
<div className="wind-percent">Wind</div> <div className="text">{wind}</div>
</div> </div>

</div>
        </>
  )
}
Weatherdetails.PropTypes={
  icon:PropTypes.string.isRequired,
  temp:PropTypes.number.isRequired,
  city:PropTypes.string.isRequired,
  country:PropTypes.string.isRequired,
  humidity:PropTypes.number.isRequired,
  wind:PropTypes.number.isRequired,
  lat:PropTypes.number.isRequired,
  log:PropTypes.number.isRequired
}
function App() {
const [icon,setIcon]=useState(rainicon);
const [temp,setTemp]=useState(0);
const [city,setCity]=useState("Chennai");
const [country,setCountry]=useState("India");
const [lat,setLat]=useState(0);
const [log,setLog]=useState(0);
const [humidity,setHumidity]=useState(0);
const [wind,setWind]=useState(0);
const [text,setText]=useState("Chennai");
const api_key="c7d7c148332f0fa1cff25e187564de37";
const [cityNotFound,setCityNotFound]=useState(false);
const [loading,setLoading]=useState(false);
const [error,setError]=useState(null);
const weatherIconMap=
{
"91d" : clearicon,
"gin": clearicon,
"02d": cloudicon,
"02n": cloudicon,
"83d:": drizzleicon,
"03n": drizzleicon,
"84d": drizzleicon,
"84n": drizzleicon,
"99d": rainicon, 
"09n": rainicon,
 "10d": rainicon,
"16n": rainicon,
"13d":snowicon,
"13n": snowicon,}
const search=async()=>{
  
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}`;
try{
  let res=await fetch(url);
  let data=await res.json();
  if(data.cod=="404"){
    console.log("City not found");
    setCityNotFound(true);
    setLoading(false);
    return;
  }
  setHumidity(data.main.humidity);
  setWind(data.wind.speed);
  setCity(data.name);
  setTemp(Math.floor(data.main.temp));
  setCountry(data.sys.country);
  setLat(data.coord.lat);
  setLog(data.coord.lon);
  const weatherIconCode=data.weather[0].icon;
  setIcon(weatherIconMap[weatherIconCode]||clearicon);
}
catch(error){
console.log("An error message occured", error.message);
setError("Error occured while ferching data");
}
finally{
  setLoading(flase);
}
}
const handlecity=(e)=>{
setText(e.target.value);
}
const keydownhandle=(e)=>{
  if(e.key==="Enter"){
    search();
  }
}
useEffect(function(){search();},[]);
  return (
    <>
      <div className="container">
        <div className='input-container'>
          <input type="text" className="cityInput" placeholder="Search city" value={text} onChange={handlecity}onKeyDown={ keydownhandle         }></input>
          <div className='search-icon'>
            <img src={searchicon} alt="search" className='searchimage' onClick={()=>{search()}}></img>
            </div>
       </div>
       {loading&&<div className="loading-message">Loading...</div>}
       {error&&<div className="error-message">{error}</div>}
       {cityNotFound&&<div className="city-not-found">City not found</div>}
       {!loading&&!cityNotFound&&<Weatherdetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} humidity={humidity} wind={wind}/>}
      </div>
     
    </>
  )
}

export default App
