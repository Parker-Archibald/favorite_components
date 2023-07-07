import { useState, useEffect } from "react";
import {useRouter} from "next/router";
import emailjs from 'emailjs-com';

const VerifyEmail = () => {

    const router = useRouter();
    // const {query : }

    const [email, setEmail] = useState();
    const [emailNum, setEmailNum] = useState(1234)

    useEffect(() => {
        localStorage.clear();
        let code = [];
        for(let i = 4; i > 0; i--) {
            code.push(Math.floor(Math.random() * 10))
        }
        setEmailNum(code);
    }, [])

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        localStorage.setItem('code', emailNum)
        localStorage.setItem('email', email);
        let params = {
            given_email: email,
            message: emailNum
        }
        await emailjs.send('service_u0fi91b', 'template_6tkf34g', params, 'AQipxXnwghBNBPHFh')
        .then(response => console.log(response.status, response.text))
        router.push('/OTP')
    }

    return (
        <div className="bg-gray-600 h-[100vh] flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl mb-4">Verify your email:</h2>
            <form className="flex flex-col space-y-4 items-center" onSubmit={handleSubmit}>
                <input required type='email' placeholder="Your Email" className="indent-2 text-black focus:outline-none" onChange={handleEmail}/>
                <button type='submit' className="bg-gray-800 rounded-lg w-[150px]">Verify email</button>
            </form>
        </div>
    )
}

export default VerifyEmail;

// export async function getServerSideProps(context) {
//     return {
//         redirect: {
//             permanent: false,
//             destination: `/OTP/?${context}`
//         }
//     }
// }