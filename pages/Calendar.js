import {ChevronLeftIcon, ChevronRightIcon, CalendarDaysIcon, PlusCircleIcon} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { calendarState, addScheduleState } from '@/Atoms/CalendarAtom';
import { collection, doc, onSnapshot, query, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import {useRouter} from 'next/router';

const Calendar = () => {

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]

    // Colors for each month
    const colors = [
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

    const days = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ]

    const router = useRouter();
    const [calendarStateAtom, setCalendarStateAtom] = useRecoilState(calendarState);
    const [addScheduleStateAtom, setAddScheduleState] = useRecoilState(addScheduleState);
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
    const [tasks, setTasks] = useState([]);
    const [taskForDate, setTaskForDate] = useState([]);
    const [newTaskDate, setNewTaskDate] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [dayOfWeek, setDayOfWeek] = useState();

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

        onSnapshot(query(collection(db, `${months[month]}, ${year}`)), snapshot => {
            let snap = snapshot.docs;
            setTasks(snap)
        })

        let date = `${year}-${months[month]}-${selectedDay}`
        let newDate = new Date(date).getDay();
        setDayOfWeek(days[newDate]);

        setNumberOfDays(amount);
        
    }, [month])

    //handles changing the month
    const handleChangeMonth = (e) => {
        if(e.target.id === 'minus') {
            setLastDayOfMonth(new Date(year, month, 0).getDate())
            setFirstDayOfMonth(new Date(year, month - 1, 1).getDay())
            setLastDayOfPreviousMonth(new Date(year, month - 1, 0).getDate())
            setFirstDayOfNextMonth(new Date(year, month - 1, lastDayOfPreviousMonth).getDay())
            setSelectedDay(lastDayOfPreviousMonth)
            setColor(colors[month - 1])
            setTaskForDate([])
            closeDaySchedule();
            if(month - 1 < 0) {
                setMonth(11);
                setColor(colors[11])
                setYear(year - 1)
            }
            else {
                setMonth(month - 1)
            }
        }
        else if(e.target.id === 'plus'){
            setLastDayOfMonth(new Date(year, month, 0).getDate());
            setFirstDayOfMonth(new Date(year, month + 1, 1).getDay())
            setLastDayOfPreviousMonth(new Date(year, month + 1, 0).getDate())
            setFirstDayOfNextMonth(new Date(year, month + 1, lastDayOfPreviousMonth).getDay())
            setSelectedDay(lastDayOfPreviousMonth)
            setColor(colors[month + 1])
            setTaskForDate([])
            closeDaySchedule();
            if(month + 1 > 11) {
                setMonth(0);
                setColor(colors[0])
                setYear(year + 1)
            }
            else {
                setMonth(month + 1);
            }
        }
        else {
            return;
        }
    }

    // highlights the date that has been clicked on
    const handleClick = (e) => {
        setSelectedDay(e.target.id - firstDayOfMonth)
        setTaskForDate([])
        for(let i = 0; i < tasks.length; i++) {
            if(tasks[i].id === `${months[month]} ${e.target.id - firstDayOfMonth}, ${year}`) {
                setTaskForDate(tasks[i].data().tasks)
            }
        }
        let date = `${year}-${months[month]}-${e.target.id - firstDayOfMonth}`
        let newDate = new Date(date).getDay();
        setDayOfWeek(days[newDate]);
    }

    //opens day schedule
    const openDaySchedule = () => {
            if(calendarStateAtom === false) {
                document.getElementById('calendarModal').style.height = '400px'
                setCalendarStateAtom(true)
                document.getElementById('daysOfMonth').className = 'flex text-xl font-bold w-full flex-wrap gap-y-2 py-10';
            } 
    }

    // closes day schedule
    const closeDaySchedule = () => {
        document.getElementById('calendarModal').style.height = '80px'
        setCalendarStateAtom(false)
        document.getElementById('daysOfMonth').className = 'flex text-xl font-bold w-full flex-wrap gap-y-10 py-10';
    }
    
    const newDescription = (e) => {
        setNewTaskDescription(e.target.value)
    }

    const newDate = (e) => {
        setNewTaskDate(e.target.value)
    }

    const submitNewTask = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const date = newTaskDate.toString().split('-');
        const newYear = date[0];
        let newMonth; //months[newMonth[1] - 1]
        let newDay;//newDay[0]
        
        if(date[1][0] === '0') {
            newMonth = date[1].split(0);
            newMonth = newMonth[1]
        }
        else {
            newMonth = date[1]
        }
        
        if(date[2][0] === '0') {
            newDay = date[2].split(0)
            newDay = newDay[1]
        }
        else{
            newDay = date[2]
        }

        let oldData;
        let newData = [newTaskDescription]

        onSnapshot(query(doc(db, `${months[newMonth - 1]}, ${newYear}`, `${months[newMonth - 1]} ${newDay}, ${newYear}`)), snapshot => {
            let snap = snapshot.data();
            if(snap === undefined) {
                return
            }
            else {
                oldData = snap.tasks
            }
        })

        setTimeout(() => {
            for(let i = 0; i < oldData?.length; i++) {
                newData.push(oldData[i])
            }
             setDoc(doc(db, `${months[newMonth - 1]}, ${newYear}`, `${months[newMonth - 1]} ${newDay}, ${newYear}`), {
                tasks: newData
            })
            setIsLoading(false)
            setAddScheduleState(false)
        }, 1000)
    }

    const deleteTask = async (e) => {
        
        let oldTasks;

        for(let i = 0; i < tasks.length; i++) {
            if(tasks[i].id === `${months[month]} ${selectedDay}, ${year}`) {
                oldTasks = tasks[i].data().tasks;
            }
        }

        let index = oldTasks.indexOf(e.target.id)
        oldTasks.splice(index, 1)

        await setDoc(doc(db, `${months[month]}, ${year}`, `${months[month]} ${selectedDay}, ${year}`), {
            tasks: oldTasks
        })
    }

    return (
        <div>
            <div className='bg-gray-100 md:hidden'>
            {addScheduleStateAtom === true && (
                <div className='fixed top-[40%] w-[60%] h-[24%] bg-white rounded-xl flex flex-col items-center ml-[20%] z-10'>
                    <div className='absolute right-0 mr-3 mt-1 text-xl' onClick={() => setAddScheduleState(false)}>X</div>
                    <h1 className={`py-3 text-2xl font-bold ${color} w-full rounded-t-xl text-center`}>New Task</h1>
                    <form className='pt-2 flex flex-col items-center' onSubmit={submitNewTask}>
                        <div className='flex space-x-3'>
                            <div>Date:</div>
                            <input type='date'  className='focus:outline-none' onChange={newDate} required/>
                        </div>
                        <input type='text' className='border mt-4 indent-2 focus:outline-none p-1' placeholder='Description' onChange={newDescription} required/>
                        {isLoading === false ? 
                            <button type='submit' className={`${color} mt-4 rounded-xl p-2`}>Add Task</button> : <button type='submit' className={`${color} mt-4 rounded-xl p-2`}>Loading...</button>
                        }
                    </form>
                </div>
            )}
            <div className="flex flex-col w-screen overflow-none h-screen overflow-hidden">
                <div className={`flex space-x-[40px] items-center justify-center p-4 ${color} w-full`}>
                    <ChevronLeftIcon id='minus' className='w-[150px]' onClick={handleChangeMonth}/>
                    <div className='text-3xl font-bold tracking-wider flex w-[800px] justify-center'>{months[month]}, <div className='text-xl mt-2 ml-4 font-normal'>{year}</div></div>
                    <ChevronRightIcon id='plus' className='w-[150px] font-bold' onClick={handleChangeMonth}/>
                </div>
                {/* Days of week */}
                <div className='flex py-4 text-xl font-bold w-full flex-wrap bg-white'>
                    <div className='w-[55px] text-center'>Sun</div>
                    <div className='w-[55px] text-center'>Mon</div>
                    <div className='w-[55px] text-center'>Tue</div>
                    <div className='w-[55px] text-center'>Wed</div>
                    <div className='w-[55px] text-center'>Thur</div>
                    <div className='w-[55px] text-center'>Fri</div>
                    <div className='w-[55px] text-center'>Sat</div>
                </div>
                {/* Days of month */}
                <div id='daysOfMonth' className='flex text-xl font-bold w-full flex-wrap gap-y-10 py-10'>
                    {/* map through number of days to display days */}
                    {numberOfDays.map((day, i) => (
                        (selectedDay + firstDayOfMonth - 1) === i ? (
                            <div key={i} className={`w-[55px] flex justify-center ${color} rounded-full`}><div id={i + 1} className=' rounded-full w-10 h-10 flex justify-center items-center'>{day}</div></div>
                        ) : (
                            <div key={i} className='w-[55px] flex justify-center'><div id={i + 1} className=' rounded-full w-10 h-10 flex justify-center items-center' onClick={handleClick}>{day}</div></div>
                        )
                    ))}
                </div>
                {/* Tasks for each day */}
                    <div className='fixed bottom-0 w-screen -mb-6 transition-height ease-in-out duration-800' onClick={openDaySchedule}>
                        <div id='calendarModal' className={`${color} rounded-xl p-2 pb-8 text-center mt-4 text-2xl font-bold flex flex-col`} onClick={openDaySchedule}>
                            <div className='flex '>
                                <div className='text-center pl-8 w-[95%]'> {selectedDay > 0 ? <span>{months[month]} {selectedDay}, {year}</span> : <span></span>}</div>
                                {calendarStateAtom === true && <div onClick={closeDaySchedule} className=''>X</div>}
                            </div>
                            {calendarStateAtom === true && (
                                <ul className='flex flex-col space-y-4 mt-8 text-left ml-4 font-normal'>
                                    
                                    {taskForDate?.map(task => (
                                        <div className='flex space-x-2'>
                                            <CalendarDaysIcon className='w-6'/>
                                            <li key={task.id}>{task}</li>
                                            <div className='absolute right-0 pr-6' onClick={deleteTask} id={task}>X</div>
                                        </div>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    {addScheduleStateAtom === false && <div className='absolute bottom-2 right-0 mr-2 text-4xl rounded-full bg-gray-400 w-[50px] pb-2 text-center z-10' onClick={() => setAddScheduleState(true)}>+</div>}
            </div>
        </div>


        <div className='hidden md:flex flex-col w-screen h-screen items-center justify-center bg-gray-50'>
        {addScheduleStateAtom === true && (
            <div className='fixed w-[300px] bg-white z-10 h-[300px] rounded-xl shadow-xl'>
                <div className={`${color} rounded-t-xl h-[50px] flex items-center justify-center text-2xl`}>
                    <div>New task</div>
                    <div className='absolute right-0 mr-4 hover:cursor-pointer' onClick={() => setAddScheduleState(false)} >X</div>
                </div>
                <form className='flex flex-col h-full' onSubmit={submitNewTask}>
                    <div className='flex  h-[38%] indent-4 items-center space-x-2'>
                        <div>Date:</div>
                        <input type='date'  className='focus:outline-none' onChange={newDate} required/>
                    </div>
                    <div className='flex flex-col -mt-6 mx-4 mb-6'>
                        <div>Description:</div>
                        <input type='text' className='border mt-4 indent-2 focus:outline-none p-1 h-[50px]' onChange={newDescription} required/>
                    </div>
                    {isLoading === false ? 
                        <button type='submit' className={`${color} w-[90%] ml-[5%] rounded-md py-1`}>Add Task</button> : <button type='submit' className={`${color} w-[90%] ml-[5%] rounded-md py-1`}>Loading...</button>
                    }
                </form>
            </div>
        )}
            <div className='w-[80%] max-w-[1500px] h-[65%] rounded-xl flex bg-white'>
                <div className={`${color} w-[30%] rounded-xl h-[100%] flex flex-col`}>
                    <div className='mt-8'>
                        <div className='w-full text-center text-6xl'>{selectedDay}</div>
                        <div className='w-full text-center text-6xl mt-2'>{dayOfWeek}</div>
                    </div>
                    <div className='mt-[100px] indent-4 h-[55%]'>
                        <div className='font-bold'>Current Events</div>
                        <ul className='flex flex-col space-y-4 mt-8 text-left ml-5 font-normal max-h-[270px] w-[90%] truncate overflow-y-scroll'>
                            {taskForDate?.map(task => (
                                <div className='flex space-x-4 hover:cursor-pointer'>
                                    <div onClick={deleteTask}>X</div>
                                    <CalendarDaysIcon className='w-6'/>
                                    <li key={task.id}>{task}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className='h-[8%] text-center flex items-center justify-center hover:cursor-pointer' onClick={() => setAddScheduleState(true)}>Create Event <PlusCircleIcon className='w-4 ml-2 mt-1'/></div>
                </div>
                <div className='flex w-[70%] justify-center items-center h-[100%]'>
                    <div className='max-w-[800px] min-w-[200px]'>
                        <div className='flex w-full mt-4 justify-end pr-6 text-2xl space-x-6'>
                            <ChevronLeftIcon id='minus' className='w-6 mt-1 hover:cursor-pointer' onClick={handleChangeMonth}/>
                            <div>{months[month]}, {year}</div>
                            <ChevronRightIcon id='plus' className='w-6 mt-1 hover:cursor-pointer z-10' onClick={handleChangeMonth}/>
                        </div>
                        <div className='flex mt-4 text-lg'>
                        <div className='w-[120px] text-center'>Sunday</div>
                            <div className='w-[120px] text-center'>Monday</div>
                            <div className='w-[120px] text-center'>Tuesday</div>
                            <div className='w-[120px] text-center'>Wednesday</div>
                            <div className='w-[120px] text-center'>Thursday</div>
                            <div className='w-[120px] text-center'>Friday</div>
                            <div className='w-[120px] text-center'>Saturday</div>
                        </div>
                        <hr className='mt-6 -mb-6 w-[90%] ml-[5%]'/>
                        <div id='daysOfMonth' className='flex text-2xl font-bold w-full flex-wrap gap-y-6 py-10 flex-shrink flex-no-wrap'>
                            {numberOfDays.map((day, i) => (
                                (selectedDay + firstDayOfMonth - 1) === i ? (
                                    <div key={i} className={`w-[14%] flex justify-center rounded-full hover:cursor-pointer pl-8`}><div id={i + 1} className={`${color} rounded-full w-[60px] h-[60px] flex justify-center items-center `}>{day}</div></div>
                                ) : (
                                    <div key={i} className='w-[14%]  flex justify-center hover:cursor-pointer'><div id={i + 1} className=' rounded-full w-[60px] h-[60px] flex justify-center items-center indent-8' onClick={handleClick}>{day}</div></div>
                                )
                            ))}
                        </div>
                </div>
                </div>
                
            </div>
            <button className='mt-6 underline' onClick={() => router.push('/')}>Back to Favorite Components</button>
        </div>
        </div>
    )
}

export default Calendar;