import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'
import { useState } from 'react'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import { useRouter } from 'next/router'

const Signup = () => {

    const router = useRouter();
    const [info, setInfo] = useState({});
    const [matches, setMatches] = useState(true)
    
    const closeInput = (e) => {
        if(e.target.value) {
            return
        }
        else {
            document.getElementById(e.target.id).style.height = '0px'
            document.getElementById(e.target.id).style.marginTop = '0px'
        }
    }

    const handleChange = (e) => {
        setInfo(previousData => {
            return {...previousData, [e.target.name]: e.target.value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(info.password === info.confirm) {
            setMatches(true)
            alert('Thank you for signing up!')
                location.reload();
        }
        else {
            setMatches(false)
        }
    }

    return (
        <div>
            <div className='bg-signupBg bg-cover bg-center w-screen h-screen text-white pt-10 flex items-center md:hidden'>
                <div className='w-[90%] ml-[5%] py-6 bg-opacity-60 backdrop-blur-sm rounded-xl'>
                    <section className="flex flex-col items-center">
                        <div className="flex items-center space-x-4">
                            <img src='/templogo.png' className="w-[60px] h-[60px] rounded-full object-center object-cover"/>
                            <div className="text-4xl font-thin tracking-[2px]">JrWebDev</div>
                        </div>
                        <div className="mt-4">
                            <div>Sign up for exclusive access!</div>
                            <div className="text-xs text-center mt-1">Alread have an account? <span className='underline' onClick={() => router.push('/Login')}>Login</span></div>
                        </div>
                    </section>
                    <section className="w-full mt-[40px] text-xl">
                        <form className="w-full flex flex-col items-center space-y-6 mb-4" onSubmit={handleSubmit}>
                            <div className="w-full pl-[10%]"
                            onClick={() => {document.getElementById('nameInput').style.height = '30px'; document.getElementById('nameInput').style.marginTop = '20px'; document.getElementById('nameInput').focus()}}>
                                <div id='nameText' className="-mb-4 pointer-events-none">Full Name</div>
                                <input name='name' id='nameInput' className="border-b h-0 focus:outline-none w-[90%] transition-height ease-in-out duration-200 indent-4 pb-2 tracking-[2px] bg-transparent" onBlur={closeInput} onChange={handleChange}/>
                            </div>
                            <div className="w-full pl-[10%]"
                            onClick={() => {document.getElementById('emailInput').style.height = '30px'; document.getElementById('emailInput').style.marginTop = '20px'; document.getElementById('emailInput').focus()}} >
                                <div id='emailText' className="-mb-4">Email</div>
                                <input id='emailInput' name='email' className="border-b h-0 focus:outline-none w-[90%] transition-height ease-in-out duration-200 indent-4 pb-2 tracking-[2px] bg-transparent" onBlur={closeInput} autoComplete='new-email' onChange={handleChange}/>
                            </div>
                            <div className="w-full pl-[10%]"
                            onClick={() => {document.getElementById('passwordInput').style.height = '30px'; document.getElementById('passwordInput').style.marginTop = '20px'; document.getElementById('passwordInput').focus()}}>
                                <div className="-mb-4">Password</div>
                                <input id='passwordInput' name='password' type='password' className="border-b h-0 focus:outline-none w-[90%] transition-height ease-in-out duration-200 indent-4 pb-2 tracking-[2px] bg-transparent" onBlur={closeInput} autoComplete='new-password' onChange={handleChange}/>
                                <div className='flex space-x-2 mt-1'>
                                    <input id='passwordCheckbox' type='checkbox' onClick={() => {document.getElementById('passwordCheckbox').checked ? document.getElementById('passwordInput').type = 'text' : document.getElementById('passwordInput').type = 'password'}}/>
                                    <div className='text-xs'>Show password</div>
                                </div>
                            </div>
                            <div className="w-full pl-[10%]"
                            onClick={() => {document.getElementById('confirmInput').style.height = '30px'; document.getElementById('confirmInput').style.marginTop = '20px'; document.getElementById('confirmInput').focus()}}>
                                <div className="-mb-4">Confirm Password</div>
                                <input id='confirmInput' name='confirm' type='password' className="border-b h-0 focus:outline-none w-[90%] transition-height ease-in-out duration-200 indent-4 pb-2 tracking-[2px] bg-transparent" onBlur={closeInput} onChange={handleChange}/>
                                <div className='flex space-x-2 mt-1'>
                                    <input id='confirmCheckbox' type='checkbox' onClick={() => {document.getElementById('confirmCheckbox').checked ? document.getElementById('confirmInput').type = 'text' : document.getElementById('confirmInput').type = 'password'}}/>
                                    <div className='text-xs'>Show password</div>
                                </div>
                                {!matches && <div className='text-red-400 mt-2 text-sm'>*Passwords do not match*</div>}
                            </div>
                            
                            <button type="submit" className="bg-blue-400 w-[80%] text-center rounded-xl py-1">Sign up</button>
                        </form>
                        <div className="flex w-full justify-center items-center space-x-4 text-xs my-4">
                            <hr className="w-[20%]"/>
                            <p>or sign up with</p>
                            <hr className="w-[20%]"/>   
                        </div>
                        <section className="flex flex-col space-y-4 w-full items-center">
                            <div className="border w-[80%] text-center rounded-xl py-1 flex justify-center"><FcGoogle className='w-10 text-2xl'/></div>
                            <div className="border w-[80%] text-center rounded-xl py-1 flex justify-center"><FaFacebook className='w-10 text-2xl'/></div>
                        </section>
                    </section>
                </div>
            </div>
            <div className='hidden md:flex h-screen'>
                <section className='w-1/2 flex flex-col justify-center items-center'>
                    <div className='flex flex-col items-center space-y-4 px-4 text-center'>
                        <div className='text-4xl tracking-[1px]'>Try JrWebDev for 30 days free!</div>
                        <div className='text-md'>JrWebDev is a custom web development company that provides custom websites with the best up to date technology</div>
                    </div>
                    <img src='/signupFull.jpg'/>
                </section>
                <section className='w-1/2 border-l rounded-l-xl bg-gray-100 flex flex-col items-center justify-center'>
                    <div className='w-[80%] flex flex-col items-center justify-center max-w-[1000px]'>
                        <div className="flex items-center space-x-4">
                            <img src='/templogo.png' className="w-[80px] h-[80px] rounded-full object-center object-cover"/>
                            <div className="text-6xl font-thin tracking-[2px]">JrWebDev</div>
                        </div>
                        <div className='flex flex-col items-center mt-4'>
                            <div className='text-2xl'>Sign up for exclusive access!</div>
                            <div className='text-sm mt-1'>Already have an account? <span className='underline cursor-pointer' onClick={() => router.push('/Login')}>Login</span></div>
                        </div>
                        <section className='w-full'>
                            <form className='py-10 flex flex-col justify-center items-center space-y-8' onSubmit={handleSubmit}>
                                <div className='w-[80%]'>
                                    <div className='text-2xl mb-2'>Full Name</div>
                                    <input id='nametext' name='name' className='border w-full rounded-lg py-1 focus:outline-none indent-2' onChange={handleChange} required/>
                                </div>
                                <div className='w-[80%]'>
                                    <div className='text-2xl mb-2'>Email</div>
                                    <input type='email' name='email' className='border w-full rounded-lg py-1 focus:outline-none indent-2' onChange={handleChange} required/>
                                </div>
                                <div className='w-[80%]'>
                                    <div className='text-2xl mb-2'>Password</div>
                                    <div className='flex items-center'>
                                        <input id='passwordInputFull' type='password' name='password' className='border w-full rounded-lg py-1 focus:outline-none indent-2' onChange={handleChange} required/>
                                        <AiOutlineEye id='passwordVisible' className='-ml-8 text-xl cursor-pointer' 
                                        onClick={() => {document.getElementById('passwordInputFull').type = 'text'; document.getElementById('passwordVisible').style.display = 'none'; document.getElementById('passwordHidden').style.display = 'flex'}}/>
                                        
                                        <AiOutlineEyeInvisible id='passwordHidden' className='hidden -ml-8 text-xl cursor-pointer'
                                        onClick={() => {document.getElementById('passwordInputFull').type = 'password'; document.getElementById('passwordVisible').style.display = 'flex'; document.getElementById('passwordHidden').style.display = 'none'}}/>
                                    </div>
                                </div>
                                <div className='w-[80%]'>
                                    <div className='text-2xl mb-2'>Confirm Password</div>
                                    <div className='flex items-center'>
                                        <input id='confirmInputFull' type='password' name='confirm' className='border w-full rounded-lg py-1 focus:outline-none indent-2' onChange={handleChange} required/>
                                        <AiOutlineEye id='confirmVisible' className='-ml-8 text-xl cursor-pointer'
                                        onClick={() => {document.getElementById('confirmInputFull').type = 'text'; document.getElementById('confirmVisible').style.display = 'none'; document.getElementById('confirmHidden').style.display = 'flex'}}/>
                                        <AiOutlineEyeInvisible id='confirmHidden' className='hidden -ml-8 text-xl cursor-pointer'
                                        onClick={() => {document.getElementById('confirmInputFull').type = 'password'; document.getElementById('confirmHidden').style.display = 'none'; document.getElementById('confirmVisible').style.display = 'flex'}}/>
                                    </div>
                                    {!matches && <div className='text-red-400 mt-4'>*Passwords do not match*</div>}
                                </div>
                                {matches && <span/>}
                                <button type='submit' className='w-[80%] bg-blue-400 py-2 rounded-xl'>Signup</button>
                            </form>
                            <div className='flex items-center justify-center space-x-4 -mt-6'>
                                <hr className='w-[35%]'/>
                                <div className='text-2xl'>or</div>
                                <hr className='w-[35%]'/>
                            </div>
                            <div className='flex flex-col items-center mt-2'>
                                <p className='text-xl'>Sign up with</p>
                                <div className='flex w-[80%] justify-center space-x-10 mt-4'>
                                    <button className='w-[20%] border py-2 flex justify-center text-3xl rounded-xl bg-gray-200'><FcGoogle/></button>
                                    <button className='w-[20%] border py-2 flex justify-center text-3xl rounded-xl bg-blue-800'><FaFacebook/></button>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Signup;