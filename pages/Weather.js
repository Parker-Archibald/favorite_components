import { useEffect, useState } from "react";
import { ChevronDownIcon,ChevronUpIcon } from "@heroicons/react/24/outline";
import {BsWind, BsDropletHalf} from 'react-icons/bs';
import {TbGauge} from 'react-icons/tb';
import NextDayList from "@/components/NextDayList";

const Weather = () => {

    const API_KEY = '71251eb7d645f26e9bdb97ee77601d5a';

    const [lon, setLon] = useState()
    const [lat, setLat] = useState()
    const [temperature, setTemperature] = useState();
    const [weather, setWeather] = useState();
    const [wind, setWind] = useState();
    const [location, setLocation] = useState();
    const [icon, setIcon] = useState();
    const [loading, setLoading] = useState(true);
    const [locationError, setLocationError] = useState(false);
    const [nextDays, setNextDays] = useState();
    let tempLat;
    let tempLon;

    useEffect(() => {
        getGeoLocation();
    }, [lat])

    const setGeoLocation = async () => {

        const success = async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setLat(latitude);
            setLon(longitude);
            tempLat = latitude;
            tempLon = longitude;

            await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${tempLat}&lon=${tempLon}&appid=${API_KEY}`)
            .then(results => results.json())
            .then(results => setNextDays(results.list))

            await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${tempLat}&lon=${tempLon}&appid=${API_KEY}`)
            .then(results => results.json())
            // .then(results => console.log(results))
            .then(results => {
                setTemperature(results?.main);
                setWeather(results?.weather[0]);
                setWind(results?.wind)
                setLocation(results?.name)
                setIcon(`https://openweathermap.org/img/wn/${results?.weather[0].icon}@2x.png`)
            })
            .then(() => setTimeout(() => {
                setLoading(false)
            }, 1000))
          }

          const error = () => {
            alert("Please give permission to access location");
            setLoading(false)
            setLocationError(true)
          }

        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error)
        }
        else {
            console.log('Geo location not supported')
        }

        
    }

    const getGeoLocation = async () => {

        await setGeoLocation();

        // await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=orem,ut,us&limit=10&appid=${API_KEY}`)
        // .then(results => results.json())
        // .then(results => { 
        //     setLat(results[0]?.lat)
        //     setLon(results[0]?.lon)
        //     tempLat = results[0]?.lat;
        //     tempLon = results[0]?.lon;
        // })

        
    }

    if(locationError === true) {
        return (
            <div className="flex justify-center items-center w-screen h-screen text-center">
                App will need access to your location, please allow permission to access location
            </div>
        )
    }

    else {
        return (
            <div className="h-screen bg-gray-700 overflow-y-scroll">
                {loading === true ? (
                <div role="status" className="flex justify-center items-center h-screen">
                    <svg aria-hidden="true" className="w-[100px] h-[100px] mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>
                ) : (
                <div className=" overflow-x-none">
                    <div className="md:hidden">
                        <input type='search' className="focus:outline-none border rounded-xl absolute top-0 left-0 mt-3 ml-3 indent-2 p-1" placeholder="Search Location"/>
                        <div className="flex flex-col w-screen items-center pt-[100px]">
                            <div className="text-5xl text-white font-bold">{location}</div>
                            <div className="text-gray-300 flex flex-col bg-gray-800 w-[90%] rounded-xl justify-center mt-8 items-center pb-5">
                                <div className="flex space-x-[50px] mt-8 text-xl">
                                    <div className="flex space-x-2">
                                        <ChevronDownIcon className="text-blue-300 w-5"/>
                                        <div>{((temperature?.temp_min - 273.5) * (9 / 5) + 32).toFixed(2)}&deg;F</div>
                                    </div>
                                
                                    <div className="flex space-x-2">
                                        <ChevronUpIcon className="text-yellow-300 w-5"/>
                                        <div>{((temperature?.temp_max - 273.5) * (9 / 5) + 32).toFixed(2)}&deg;F</div>
                                    </div>
                                </div>
                                <div className="flex space-x-2 text-4xl mt-8">
                                    <div>{((temperature?.temp - 273.5) * (9 / 5) + 32).toFixed(2)}&deg;F</div>
                                </div>
                                <div className="flex flex-col text-white items-center">
                                    <img src={`${icon}`} className='w-[150px]'/>
                                    <div className="text-gray-200 -mt-[20px] mb-6">{(weather?.description)?.toUpperCase()}</div>
                                </div>
                                <div className="flex space-x-6">
                                    <div className="flex flex-col items-center space-y-1">
                                        <BsDropletHalf className="w-[80px] h-8"/>
                                        <div>Humidity</div>
                                        <div>{temperature?.humidity}%</div>
                                    </div>
                                    <div className="flex flex-col items-center space-y-1">
                                        <BsWind className='w-[80px] h-8'/>
                                        <div>Wind</div>
                                        <div>{wind?.speed}</div>
                                    </div>
                                    <div className="flex flex-col items-center space-y-1">
                                        <TbGauge className='w-[80px] h-8'/>
                                        <div>Pressure</div>
                                        <div>{temperature?.pressure}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-screen">
                                <NextDayList lat={lat} lon={lon}/>
                            </div>
                        </div>
                    </div>


                    <div className="w-screen h-screen overflow-x-none md:flex-col items-center text-gray-200 hidden md:flex">
                        <div className="w-screen flex justify-center">
                            <input type='text' className="w-[60%] max-w-[900px] rounded-2xl bg-gray-200 mt-10 indent-4 focus:outline-none text-black py-1" placeholder="Search"/>
                        </div>
                        <div className="bg-gray-800 w-[70%] max-w-[1000px] mt-10 rounded-xl flex h-[50%] items-center">
                            <div className="flex flex-col items-center ml-4 h-[100%] w-[50%] justify-center pb-10">
                                <div className="text-4xl mt-10">{location}</div>
                                <img src={`${icon}`} className='w-[200px] -mt-4'/>
                                <div className="text-6xl -mt-8">{((temperature?.temp - 273.5) * (9 / 5) + 32).toFixed(2)}&deg;</div>
                                <div className="mt-4 text-gray-400">{(weather?.description)?.toUpperCase()}</div>
                                <div className="mt-2 flex flex-col items-center text-gray-400">
                                    <div>Feels Like:</div>
                                    <div>{((temperature?.feels_like - 273.5) * (9 / 5) + 32).toFixed(2)}&deg;</div>
                                </div>
                            </div>
                            <div className="w-[40%] mx-4 flex flex-col space-y-4 text-2xl">
                                <div className="flex w-[100%] space-x-8  justify-center">
                                    <ChevronDownIcon className="w-6 text-blue-300"/>
                                    <div>{((temperature?.temp_min - 273.5) * (9 / 5) + 32).toFixed(2)}&deg;F</div>
                                </div>
                                <div className="flex w-[100%] space-x-8 justify-center">
                                    <ChevronUpIcon className="w-6 text-yellow-300"/>
                                    <div>{((temperature?.temp_max - 273.5) * (9 / 5) + 32).toFixed(2)}&deg;F</div>
                                </div>
                                <div className="flex w-[100%] justify-center items-center space-x-4">
                                    <BsDropletHalf className="w-6"/>
                                    <div className="w-[110px] text-center">Humidity</div>
                                    <div className="w-[60px]">{temperature?.humidity}%</div>
                                </div>
                                <div className="flex w-[100%] justify-center items-center  space-x-4">
                                    <BsWind className="w-6"/>
                                    <div className="w-[110px] text-center">Wind</div>
                                    <div className="w-[60px]">{wind?.speed}</div>
                                </div>
                                <div className="flex w-[100%] justify-center items-center  space-x-4">
                                    <TbGauge className="w-6"/>
                                    <div className="w-[110px] text-center">Pressure</div>
                                    <div className="w-[60px]">{temperature?.pressure}</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-screen">
                            <NextDayList lat={lat} lon={lon}/>
                        </div>
                    </div>
                </div>
            )}
            
            </div>
        )
    }
}

export default Weather