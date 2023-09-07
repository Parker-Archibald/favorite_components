import { useEffect, useState } from "react"


const Launch = () => {

    const [year, setYear] = useState(new Date().getFullYear())
    const [endDate, setEndDate] = useState(new Date(`Jan 1, ${year + 1} 08:00:00`).getTime());
    // const [currDate, setCurrDate] = useState(new Date().getTime());
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
    

    useEffect(() => {
        if(days === 0) {
            const currDate = new Date().getTime();
            let distance = endDate - currDate

            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))))
            setMinutes(Math.floor((distance % (1000 * 60 * 60) / (1000 * 60))))
            setSeconds(Math.floor((distance % (1000 * 60) / 1000)))
        }

        setInterval(() => {
            const currDate = new Date().getTime();
            let distance = endDate - currDate

            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))))
            setMinutes(Math.floor((distance % (1000 * 60 * 60) / (1000 * 60))))
            setSeconds(Math.floor((distance % (1000 * 60) / 1000)))
        }, 1000)
        
    })
    

   return (
    <div className="bg-earth h-screen w-screen bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center">
        <section className="flex justify-center -mt-[340px] mb-10 md:-mt-[550px]">
            <div className="text-6xl font-thin mt-10 screen text-center text-white md:tracking-[40px]">Coming soon</div>
        </section>
        <section className="text-3xl flex space-x-6  text-white bg-transparent bg-opacity-20 backdrop-blur-sm p-4 mt-10 rounded-xl md:bg-opacity-100 md:backdrop-blur-none md:space-x-[200px]">
            <div className="flex flex-col items-center">
                <div className="text-white text-6xl font-bold">{days}</div>
                <div className="text-sm mt-2 md:mt-4 md:text-xl">Days</div>
            </div>
            <div className="w-[1px] border-r-2 md:hidden"/>
            <div className="flex flex-col items-center">
                <div className="text-white text-6xl font-bold">{hours < 10 ? (
                    <div>0{hours}</div>
                ) : (
                    <div>{hours}</div>
                )}</div>
                <div className="text-sm mt-2 md:mt-4 md:text-xl">Hours</div>
            </div>
            <div className="w-[1px] border-r-2 md:hidden"/>
            <div className="flex flex-col items-center">
                <div className="text-white text-6xl font-bold">{minutes < 10 ? (
                    <div>0{minutes}</div>
                ) : (
                    <div>{minutes}</div>
                )}</div>
                <div className="text-sm mt-2 md:mt-4 md:text-xl">Minutes</div>
            </div>
        </section>
        <div className="absolute mt-[100px] text-2xl text-white text-center tracking-[6px] md:text-4xl md:tracking-[20px] md:mt-[400px]">{`January 1st, ${year}`} <br className="md:hidden"/> 8AM MST</div>
    </div>
   )
}

export default Launch