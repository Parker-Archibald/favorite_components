import { useState, useEffect } from "react";
import {useRouter} from "next/router";
import emailjs from 'emailjs-com';

const OTP = () => {

    const router = useRouter();
    const [email, setEmail] = useState();
    const [code, setCode] = useState();
    const [first, setFirst] = useState();
    const [second, setSecond] = useState();
    const [third, setThird] = useState();
    const [fourth, setFourth] = useState();
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        setEmail(localStorage.getItem('email'));
        setCode(localStorage.getItem('code'));
    }, [])

    // Checks if user inputted number matches and redirects to email verified page
    const verifyEmailNum = (e) => {
        e.preventDefault();
        // localStorage.clear();
        let OTP =[first, second, third, fourth];
        if(OTP == code) {
            setMatches(true)
        }
        else {
            alert('OTP does not match')
        }
    }

    // Updates state on user input
    const handleChange = (e) => {
        if(e.target.id === 'first') {
            setFirst(e.target.value)
            if(document.getElementById('first').value.length === 1) {
                document.getElementById('second').focus();
            }
        }
        else if(e.target.id === 'second') {
            setSecond(e.target.value)
            if(document.getElementById('second').value.length === 1) {
                document.getElementById('third').focus();
            }
        }
        else if(e.target.id === 'third') {
            setThird(e.target.value)
            if(document.getElementById('third').value.length === 1) {
                document.getElementById('fourth').focus();
            }
        }
        else if(e.target.id === 'fourth') {
            setFourth(e.target.value)
        }
    }

    const verifyAgain = () => {
        router.push('/VerifyEmail')
    }

    const sendAgain = async () => {
        let params = {
            given_email: email,
            message: code
        }
        await emailjs.send('service_u0fi91b', 'template_6tkf34g', params, 'AQipxXnwghBNBPHFh')
        .then(response => console.log(response.status, response.text))
    }

    return (
        <div className="bg-gray-600 h-[100vh] flex flex-col items-center justify-center">
            {matches === true ? 
            (
                <div className="text-white flex flex-col items-center">
                    Your email has been verified!
                    <button className="bg-gray-800 rounded-lg w-[100px] mt-10" onClick={verifyAgain}>Verify again</button>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-center text-2xl text-white md:text-4xl">Verify your email address</h2>
                    <p className="text-gray-300 text-xs w-[60%] text-center mt-6 md:text-md">
                        A 4-digit code has been sent to your email {email}. 
                        Please enter your code below to verify your email address.
                    </p>
                    <form className="flex flex-col items-center" onSubmit={verifyEmailNum}>
                        <div className="flex-row space-x-8 mt-8">
                            <input required id='first' type='text' maxLength='1' className="w-[50px] h-[100px] rounded-lg bg-gray-800 focus:border focus:outline-none text-white text-4xl text-center " onChange={handleChange}/>
                            <input required id='second' type='text' maxLength='1' className="w-[50px] h-[100px] rounded-lg bg-gray-800 focus:border focus:outline-none text-white text-4xl text-center " onChange={handleChange}/>
                            <input required id='third' type='text' maxLength='1' className="w-[50px] h-[100px] rounded-lg bg-gray-800 focus:border focus:outline-none text-white text-4xl text-center " onChange={handleChange}/>
                            <input required id='fourth' type='text' maxLength='1' className="w-[50px] h-[100px] rounded-lg bg-gray-800 focus:border focus:outline-none text-white text-4xl text-center" onChange={handleChange}/>
                        </div>
                        
                        <button className="mt-[100px] rounded-lg bg-gray-100 w-[100px]">Submit OTP</button>
                    </form>
                    <div className="flex mt-10">
                        <button className="text-xs text-white" onClick={sendAgain}>Resend code</button>
                    </div>
                        </div>
            )}
        </div>
    )
}

export default OTP;