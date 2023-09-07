import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'

const Login = () => {

    const closeInput = (e) => {
        if(document.getElementById(e.target.id).value === '') {
            document.getElementById(e.target.id).style.height = '0px'
            document.getElementById(e.target.id).style.marginTop = '0px'
        }
    }

    return (
        <div className="bg-signupBg h-screen w-screen object-cover object-center justify-center text-white pt-10 flex items-center ">
            <div className="w-[90%] ml-[5%] py-6 bg-opacity-60 backdrop-blur-sm rounded-xl">
                <section className="flex flex-col items-center space-y-4">
                    <div className="flex items-center space-x-4">
                        <img src='/templogo.png' className="w-[60px] h-[60px] rounded-full object-center object-cover"/>
                        <div className="text-4xl font-thin tracking-[2px]">JrWebDev</div>
                    </div>
                    <div className="text-xl">Sign in</div>
                </section>
                <section>
                    <form className="flex flex-col items-center space-y-8 mt-[100px] text-2xl">
                        <div className="flex flex-col w-[80%]" onClick={() => {document.getElementById('emailInput').style.height='30px'; document.getElementById('emailInput').style.marginTop='10px'; document.getElementById('emailInput').focus()}}>
                            <div>Email</div>
                            <input id='emailInput' className="h-0 border-b focus:outline-none transition-height ease-in-out duration-300 bg-transparent indent-2" onBlur={closeInput}/>
                        </div>
                        <div className="flex flex-col w-[80%]">
                            <div>Password</div>
                            <input className="h-0 border-b focus:outline-none"/>
                        </div>
                        <button className="w-[80%] rounded-xl py-1 bg-blue-400">Login</button>
                    </form>
                    <div className="flex w-full justify-center items-center space-x-4 text-xs my-4">
                        <hr className="w-[20%]"/>
                        <p>or sign up with</p>
                        <hr className="w-[20%]"/>   
                    </div>
                    <section className="flex flex-col space-y-4 w-full items-center pb-4">
                        <div className="border w-[80%] text-center rounded-xl py-1 flex justify-center"><FcGoogle className='w-10 text-2xl'/></div>
                        <div className="border w-[80%] text-center rounded-xl py-1 flex justify-center"><FaFacebook className='w-10 text-2xl'/></div>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default Login;