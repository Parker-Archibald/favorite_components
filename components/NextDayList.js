import { useState, useEffect } from "react";

const NextDayList = ({lat, lon}) => {

    const API_KEY = '71251eb7d645f26e9bdb97ee77601d5a';

    const days = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ]
    const [list, setList] = useState()

    useEffect(() => {
        getList();
    }, [])

    const getList = async () => {
        let tempList;
        await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        .then(results => results.json())
        .then(results => {
            setList(results.list)
            tempList = results.list
        })

        console.log(tempList)

        let newList = []
        let tempDay = today.split('-', 3)[2];
        for(let i = 0; i < tempList?.length; i++) {
            let listDate = tempList[i].dt_txt.split(' ', 1)
            let listDay = listDate[0].split('-', 3)[2];
            if(parseInt(listDay) === parseInt(tempDay) + 1) {
                newList.push(tempList[i]);
                tempDay = parseInt(tempDay) + 1
            }
        }

        let finalList = [];
        
        newList.map(date => {
            let list = {};
            list.date = date.dt_txt;
            list.icon = date.weather[0].icon;
            list.temp = date.main.temp;
            list.min = date.main.temp_min
            list.max = date.main.temp_max
            finalList.push(list)
        })
       
        setNewList(finalList)
    }

    const [today, setToday] = useState(new Date().toISOString().slice(0, 10))
    const [newList, setNewList] = useState()

    return (
        <div>
            <div className="mb-8 lg:hidden md:justify-center md:flex">
                <div className="text-gray-300 flex flex-col bg-gray-800 w-[90%] md:w-[70%] max-w-[1000px] rounded-xl mt-4 pb-5 ml-[5%] md:ml-0">
                    {newList?.map(day => {
                        let date = new Date(day?.date).getDay()
                        date = days[date - 1];
                        return (
                            <div>
                                <div className="flex items-center space-x-8">
                                    <img src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`} className="w-[33%]"/>
                                    <div className="text-2xl text-center">{date}</div>
                                    <div className="w-[33%] text-right pr-6">{((day?.temp - 273.5) * (9 / 5) + 32).toFixed(2)}&deg; / {((day?.max - 273.5) * (9 / 5) + 32).toFixed(2)}&deg;</div>
                                </div>
                                <hr className="w-[90%] ml-[5%]"/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="flex justify-center">
                <div className="hidden lg:flex text-gray-300 bg-gray-800 w-[70%] max-w-[1000px] rounded-xl mt-4 space-x-8 py-8">
                {newList?.map(day => {
                        let date = new Date(day?.date).getDay()
                        date = days[date - 1];
                        return (
                            <div className="w-[16.67%] justify-center">
                                <div className="flex flex-col items-center">
                                    <img src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`} className=""/>
                                    <div className="">{date}</div>
                                    <div className="">{((day?.min - 273.5) * (9 / 5) + 32).toFixed(2)}&deg; / {((day?.max - 273.5) * (9 / 5) + 32).toFixed(2)}&deg;</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default NextDayList;