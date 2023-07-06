import { useState, useEffect } from "react";
import {useRouter} from "next/router";

const OTP = () => {

    const {data} = useRouter();

    useEffect(() => {
        console.log(localStorage.getItem('code'))
    }, [])

    const [first, setFirst] = useState();
    const [second, setSecond] = useState();
    const [third, setThird] = useState();
    const [fourth, setFourth] = useState();

    const emailNum = '1234';

    // Checks if user inputted number matches and redirects to email verified page
    const verifyEmailNum = (e) => {
        e.preventDefault();
        const OTP = first + second + third + fourth;
        if(OTP === emailNum) {
            alert('OTP matches')
        }
        else {
            alert('OTP does not match')
        }
    }

    // Updates state on user input
    const handleChange = (e) => {
        if(e.target.id === 'first') {
            setFirst(e.target.value)
        }
        else if(e.target.id === 'second') {
            setSecond(e.target.value)
        }
        else if(e.target.id === 'third') {
            setThird(e.target.value)
        }
        else if(e.target.id === 'fourth') {
            setFourth(e.target.value)
        }
    }

    return (
        <div className="bg-gray-600 h-[100vh] flex flex-col items-center justify-center">
            <h2 className="text-center text-2xl text-white md:text-4xl">Verify your email address</h2>
            <p className="text-gray-300 text-xs w-[60%] text-center mt-6 md:text-md">
                A 4-digit code has been sent to your email email@email.com. 
                Please enter your code below to verify your email address.
            </p>
            <form className="flex flex-col items-center" onSubmit={verifyEmailNum}>
                <div className="flex-row space-x-8 mt-8">
                    <input required id='first' type='number' className="w-[50px] h-[100px] rounded-lg bg-gray-800 focus:border focus:outline-none text-white text-4xl text-center appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" onChange={handleChange}/>
                    <input required id='second' type='number' className="w-[50px] h-[100px] rounded-lg bg-gray-800 focus:border focus:outline-none text-white text-4xl text-center appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" onChange={handleChange}/>
                    <input required id='third' type='number' className="w-[50px] h-[100px] rounded-lg bg-gray-800 focus:border focus:outline-none text-white text-4xl text-center appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" onChange={handleChange}/>
                    <input required id='fourth' type='number' className="w-[50px] h-[100px] rounded-lg bg-gray-800 focus:border focus:outline-none text-white text-4xl text-center appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" onChange={handleChange}/>
                </div>
                <button className="mt-[100px] rounded-lg bg-gray-100 w-[100px]">Submit OTP</button>
            </form>
        </div>
    )
}

export default OTP;