import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

const Calendar = () => {

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]

    // Colors for each month
    let colors = [
        'bg-blue-200',
        'bg-pink-600',
        'bg-green-600',
        'bg-purple-200',
        'bg-yellow-300',
        'bg-red-300',
        'bg-sky-700',
        'bg-amber-500',
        'bg-pink-700',
        'bg-purple-600',
        'bg-amber-800',
        'bg-red-600'
    ]

    const date = new Date()
    const [year, setYear] = useState(date.getFullYear())
    const [month, setMonth] = useState(date.getMonth())
    const [lastDateOfMonth, setLastDayOfMonth] = useState(new Date(year, month + 1, 0).getDate())
    const [numberOfDays, setNumberOfDays] = useState([]);
    const [firstDayOfMonth, setFirstDayOfMonth] = useState(new Date(year, month, 1).getDay())
    const [lastDayOfPreviousMonth, setLastDayOfPreviousMonth] = useState(new Date(year, month, 0).getDate())
    const [firstDayOfNextMonth, setFirstDayOfNextMonth] = useState(new Date(year, month, lastDateOfMonth).getDay())
    const [selectedDay, setSelectedDay] = useState(date.getDate());
    const [color, setColor] = useState(colors[date.getMonth()]);

    useEffect(() => {
        let amount = [];
        let lastMonth = [];
        // set amount of days in array
        for(let i = 1; i <= lastDateOfMonth; i++) {
            amount.push(i)
        }
        // 
        for(let i = firstDayOfMonth; i > 0; i--) {
            lastMonth.unshift(lastDayOfPreviousMonth - i + 1)
        }
        for(let i = 0; i < lastMonth.length; i++) {
            amount.unshift(lastMonth[i])
        }
        for(let i = firstDayOfNextMonth; i < 6; i++) {
            amount.push(i - firstDayOfNextMonth + 1)
        }
        setNumberOfDays(amount);
        
    }, [month])

    //handles changing the month
    const handleChangeMonth = (e) => {
        if(e.target.id === 'minus') {
            setLastDayOfMonth(new Date(year, month, 0).getDate())
            setFirstDayOfMonth(new Date(year, month - 1, 1).getDay())
            setLastDayOfPreviousMonth(new Date(year, month - 1, 0).getDate())
            setFirstDayOfNextMonth(new Date(year, month - 1, lastDayOfPreviousMonth).getDay())
            setSelectedDay(date.getDate() -100)
            setColor(colors[month - 1])
            setMonth(month - 1);
        }
        else if(e.target.id === 'plus'){
            setLastDayOfMonth(new Date(year, month, 0).getDate());
            setFirstDayOfMonth(new Date(year, month + 1, 1).getDay())
            setLastDayOfPreviousMonth(new Date(year, month + 1, 0).getDate())
            setFirstDayOfNextMonth(new Date(year, month + 1, lastDayOfPreviousMonth).getDay())
            setSelectedDay(date.getDate() -100)
            setColor(colors[month + 1])
            setMonth(month + 1);
        }
        else {
            return;
        }
    }

    // highlights the date that has been clicked on
    const handleClick = (e) => {
        setSelectedDay(e.target.id - firstDayOfMonth)
    }

    return (
        <div>
            <div className=" flex flex-col w-screen overflow-none h-screen overflow-hidden">
                <div className={`flex space-x-[40px] items-center justify-center p-4 ${color} w-full`}>
                    <ChevronLeftIcon id='minus' className='w-[150px]' onClick={handleChangeMonth}/>
                    <div className='text-3xl font-bold tracking-wider flex w-[800px] justify-center'>{months[month]}, <div className='text-xl mt-2 ml-4 font-normal'>{year}</div></div>
                    <ChevronRightIcon id='plus' className='w-[150px] font-bold' onClick={handleChangeMonth}/>
                </div>
                {/* Days of week */}
                <div className='flex pt-4 text-xl font-bold w-full flex-wrap'>
                    <div className='w-[58px] text-center'>Sun</div>
                    <div className='w-[58px] text-center'>Mon</div>
                    <div className='w-[58px] text-center'>Tue</div>
                    <div className='w-[58px] text-center'>Wed</div>
                    <div className='w-[58px] text-center'>Thur</div>
                    <div className='w-[58px] text-center'>Fri</div>
                    <div className='w-[58px] text-center'>Sat</div>
                </div>
                {/* Days of month */}
                <div className='flex mt-6 text-xl font-bold w-full flex-wrap gap-y-8 bg-gray-100 py-10'>
                    {/* map through number of days to display days */}
                    {numberOfDays.map((day, i) => (
                        (selectedDay + firstDayOfMonth - 1) === i ? (
                            <div className={`w-[58px] flex justify-center ${color} rounded-full`}><div id={i + 1} className=' rounded-full w-10 h-10 flex justify-center items-center'>{day}</div></div>
                        ) : (
                            <div className='w-[58px] flex justify-center'><div id={i + 1} className=' rounded-full w-10 h-10 flex justify-center items-center' onClick={handleClick}>{day}</div></div>
                        )
                    ))}
                </div>
                {/* Tasks for each day */}
                <div className={`${color} rounded-xl h-[50%] -my-4`}>
                    tasks
                </div>
            </div>
        </div>
    )
}

export default Calendar;