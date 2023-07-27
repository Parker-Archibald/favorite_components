import MultiPg1 from "@/components/MultiPg1";
import { GlobeAmericasIcon, CodeBracketIcon, UserGroupIcon, EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { personalInfoState, contentState, illustrationState } from "@/Atoms/MultiStepAtoms";
import ConfettiExplosion from 'react-confetti-explosion';
import {useRouter} from "next/router";

const MultiStepForm = () => {

    const [page, setPage] = useState(1);
    const [pageNum, setPageNum] = useState(1);
    const [personalInfo, setPersonalInfo] = useState({
        Name: '',
        Email: '',
        PhoneNumber: '',
        Portfolio: ''
    })
    const [personalInfoStateAtom, setPersonalInfoStateAtom] = useRecoilState(personalInfoState);
    const [contentStateAtom, setContentStateAtom] = useRecoilState(contentState);
    const [illustrationStateAtom, setillustrationStateAtom] = useRecoilState(illustrationState);
    const [isExploding, setIsExploding] = useState(false);
    const [animationEnded, setAnimationEnded] = useState(false);
    const [hasContact, setHasContact] = useState(false);
    const [goBack, setGoBack] = useState(false);
    const router = useRouter();

    useEffect(() => {

        if(pageNum === 1) {
            document.getElementById('numberOne').style.backgroundColor = 'lightgreen';
            document.getElementById('numberOne').style.color = 'white';
            document.getElementById('numberTwo').style.backgroundColor = 'white';
            document.getElementById('numberTwo').style.color = 'black';
            document.getElementById('numberThree').style.backgroundColor = 'white';
            document.getElementById('numberThree').style.color = 'black';
            document.getElementById('numberFour').style.backgroundColor = 'white';
            document.getElementById('numberFour').style.color = 'black';
        }
        else if(pageNum === 2) {
            document.getElementById('numberOne').style.backgroundColor = 'lightgreen';
            document.getElementById('numberOne').style.color = 'white';
            document.getElementById('numberTwo').style.backgroundColor = 'lightgreen';
            document.getElementById('numberTwo').style.color = 'white';
            document.getElementById('numberThree').style.backgroundColor = 'white';
            document.getElementById('numberThree').style.color = 'black';
            document.getElementById('numberFour').style.backgroundColor = 'white';
            document.getElementById('numberFour').style.color = 'black';
        }
        else if(pageNum === 3) {
            changeButtonColor();
            document.getElementById('numberOne').style.backgroundColor = 'lightgreen';
            document.getElementById('numberOne').style.color = 'white';
            document.getElementById('numberTwo').style.backgroundColor = 'lightgreen';
            document.getElementById('numberTwo').style.color = 'white';
            document.getElementById('numberThree').style.backgroundColor = 'lightgreen';
            document.getElementById('numberThree').style.color = 'white';
            document.getElementById('numberFour').style.backgroundColor = 'white';
            document.getElementById('numberFour').style.color = 'black';
        }
        else if(pageNum === 4) {
            if(contentStateAtom === '') {
                setContentStateAtom('No')
            }
            if(illustrationStateAtom === '') {
                setillustrationStateAtom('No')
            }
            document.getElementById('numberOne').style.backgroundColor = 'lightgreen';
            document.getElementById('numberOne').style.color = 'white';
            document.getElementById('numberTwo').style.backgroundColor = 'lightgreen';
            document.getElementById('numberTwo').style.color = 'white';
            document.getElementById('numberThree').style.backgroundColor = 'lightgreen';
            document.getElementById('numberThree').style.color = 'white';
            document.getElementById('numberFour').style.backgroundColor = 'lightgreen';
            document.getElementById('numberFour').style.color = 'white';
        }

        if(page === 5) {
            setIsExploding(true)
        }
    })

    const changePage = () => {
        if(pageNum === 1) {
            setPageNum(pageNum + 1)
            setPage(page + 1)
        }
        else if(pageNum === 2) {
            setPersonalInfoStateAtom(personalInfo)
            if(personalInfo.Email != '' || personalInfo.PhoneNumber != '') {
                setHasContact(true);
            }
            setPageNum(pageNum + 1)
            setPage(page + 1)
        }
        else if(pageNum === 3) {
            document.getElementById('contentNo').style.backgroundColor = 'white';
            document.getElementById('contentYes').style.backgroundColor = 'white';
            document.getElementById('illustrationNo').style.backgroundColor = 'white';
            document.getElementById('illustrationYes').style.backgroundColor = 'white';
            setPageNum(pageNum + 1)
            setPage(page + 1)
        }
        else if(pageNum === 4) {
            if(hasContact === false) {
                setGoBack(true)
                setPageNum(page - 2)
                setPage(page - 2)
            }
            else {
                setPageNum(pageNum + 1)
                setPage(page + 1)
            }
        }
        // setPage(page + 1)
    }

    const handleInputChange = (e) => {
        const {id, value} = e.target;
        setPersonalInfo(previousData => {
            return {...previousData, [id]: value}
        })
    }

    const previousPage = () => {
        setPageNum(pageNum - 1)
        setPage(page - 1)
    }

    const changeButtonColor = () => {
            if(page === 3) {
                if(contentStateAtom === 'Yes') {
                    document.getElementById('contentNo').style.backgroundColor = 'white';
                    document.getElementById('contentYes').style.backgroundColor = 'lightGreen';
                }
                else if(contentStateAtom === 'No') {
                    document.getElementById('contentYes').style.backgroundColor = 'white';
                    document.getElementById('contentNo').style.backgroundColor = 'lightGreen';
                }
        
                if(illustrationStateAtom === 'Yes') {
                    document.getElementById('illustrationNo').style.backgroundColor = 'white';
                    document.getElementById('illustrationYes').style.backgroundColor = 'lightGreen';
                }
                else if(illustrationStateAtom === 'No') {
                    document.getElementById('illustrationNo').style.backgroundColor = 'lightGreen';
                    document.getElementById('illustrationYes').style.backgroundColor = 'white';
                }
            }
    }

    if(page === 1) {
        return (
            <div className="flex flex-col h-[100vh] bg-gray-100 items-center justify-center">
                <h2 className="text-xl font-bold mb-10 md:text-4xl">We are a team of Web Developers</h2>
                <div className="border w-[80%] mx-[10%] bg-white rounded-lg flex flex-col items-center max-w-[800px]">
                    <h3 className="text-lg mt-2 md:text-2xl md:mt-6">What services do you need?</h3>
                    <div className="flex space-x-2 my-6 md:space-x-10">
                        <div id="numberOne" className="border rounded-full w-6 text-center md:w-10 md:h-10 flex justify-center items-center">1</div>
                        <hr className="w-10 mt-3 md:mt-5 md:w-[100px]"/>
                        <div id='numberTwo' className="border rounded-full w-6 text-center md:w-10 md:h-10 flex justify-center items-center">2</div>
                        <hr className="w-10 mt-3 md:mt-5 md:w-[100px]"/>
                        <div id='numberThree' className="border rounded-full w-6 text-center md:w-10 md:h-10 flex justify-center items-center">3</div>
                        <hr className="w-10 mt-3 md:mt-5 md:w-[100px]"/>
                        <div id='numberFour' className="border rounded-full w-6 text-center md:w-10 md:h-10 flex justify-center items-center">4</div>
                    </div>
                    <hr className="w-[90%] mb-6"/>
                    <div className="flex gap-4 flex-wrap justify-center mb-4">
                        <MultiPg1 image={<GlobeAmericasIcon pointerEvents='none'/>} text='Web Design'/>
                        <MultiPg1 image={<CodeBracketIcon pointerEvents='none'/>} text='Web Development'/>
                        <MultiPg1 image={<UserGroupIcon pointerEvents='none'/>} text='SEO'/>
                        <MultiPg1 image={<EllipsisHorizontalCircleIcon pointerEvents='none'/>} text='Other'/>
                    </div>
                    <button type='submit' onClick={changePage} className="bg-green-200 w-[100px] rounded-xl hover:cursor-pointer mb-6 md:text-xl md:w-[150px] md:h-10">Next</button>
                </div>
            </div>
        )
    }

    else if(page === 2) {
        return (
            <div className="flex flex-col h-[100vh] bg-gray-100 items-center justify-center">
                <h2 className="text-xl font-bold mb-10 md:text-4xl">We are excited to meet you!</h2>
                <div className="border w-[80%] mx-[10%] bg-white rounded-lg flex flex-col items-center max-w-[800px]">
                    <h3 className="text-lg mt-2 md:text-xl md:mt-4">Personal Information:</h3>
                    <div className="flex space-x-2 my-6 md:space-x-10">
                    <div id="numberOne" className="border rounded-full w-6 text-center md:w-10 md:h-10 flex justify-center items-center">1</div>
                        <hr className="w-10 mt-3 md:mt-5 md:w-[100px]"/>
                        <div id='numberTwo' className="border rounded-full w-6 text-center md:w-10 md:h-10 flex justify-center items-center">2</div>
                        <hr className="w-10 mt-3 md:mt-5 md:w-[100px]"/>
                        <div id='numberThree' className="border rounded-full w-6 text-center md:w-10 md:h-10 flex justify-center items-center">3</div>
                        <hr className="w-10 mt-3 md:mt-5 md:w-[100px]"/>
                        <div id='numberFour' className="border rounded-full w-6 text-center md:w-10 md:h-10 flex justify-center items-center">4</div>
                    </div>
                    <hr className="w-[90%] mb-6"/>
                        <form className="flex flex-wrap gap-6 justify-center mb-6">
                            <div className="flex flex-col w-[100px] md:w-[300px]">
                                <div className="mb-2">Name:</div>
                                <input required type='name' id='Name' className="w-[100px] md:w-[300px] border focus:outline-none indent-2" onChange={handleInputChange}/>
                            </div>
                            <div className="flex flex-col w-[100px] md:w-[300px]">
                                <div className="mb-2">Email:</div>
                                <input required type='email' id='Email' className="w-[100px] md:w-[300px] border" onChange={handleInputChange}/>
                            </div>
                            <div className="flex flex-col w-[100px] md:w-[300px]">
                                <div className="mb-2">Phone Number:</div>
                                <input required type='phone' id='PhoneNumber' className="w-[100px] md:w-[300px] border" onChange={handleInputChange}/>
                            </div>
                            <div className="flex flex-col w-[100px] md:w-[300px]">
                                <div className="mb-2">Portfolio {'(optional)'}</div>
                                <input id='Portfolio' className="w-[100px] md:w-[300px] border" onChange={handleInputChange}/>
                            </div>
                        </form>
                        {hasContact === false && goBack === true && <div className="text-red-500">*We need a way to contact you!</div>}
                        <div className="flex mb-4 justify-center space-x-6 px-4 mt-4">
                            <button className="bg-green-200 rounded-lg w-[100px] md:w-[150px] md:text-xl md:h-[40px] px-4 h-8 hover:cursor-pointer" onClick={previousPage}>Previous</button>
                            <button className="bg-green-200 rounded-lg w-[100px] md:w-[150px] md:text-xl px-4 h-8 md:h-[40px] hover:cursor-pointer" onClick={changePage}>Next</button>
                        </div>
                    </div>
                </div>
        )
    }

    else if(page === 3) {
        return (
            <div className="flex flex-col h-[100vh] bg-gray-100 items-center justify-center">
                <h2 className="text-xl font-bold mb-10 md:text-4xl">What resources do you have?</h2>
                <div className="border w-[80%] mx-[10%] bg-white rounded-lg flex flex-col items-center max-w-[800px]">
                <h3 className="text-lg mt-2 md:text-xl md:mt-4">Do you have any written content or Illustrations?</h3>
                    <div className="flex space-x-2 my-6 md:space-x-10">
                        <div id="numberOne" className="border rounded-full w-6 text-center md:w-10 md:h-10 flex justify-center items-center">1</div>
                        <hr className="w-10 mt-3 md:mt-5 md:w-[100px]"/>
                        <div id='numberTwo' className="border rounded-full w-6 text-center md:w-10 md:h-10 flex justify-center items-center">2</div>
                        <hr className="w-10 mt-3 md:mt-5 md:w-[100px]"/>
                        <div id='numberThree' className="border rounded-full w-6 text-center md:w-10 md:h-10 flex justify-center items-center">3</div>
                        <hr className="w-10 mt-3 md:mt-5 md:w-[100px]"/>
                        <div id='numberFour' className="border rounded-full w-6 text-center md:w-10 md:h-10 flex justify-center items-center">4</div>
                    </div>
                    <hr className="w-[90%] mb-6"/>
                    <div className="flex flex-col w-full">
                        <div className="ml-4 md:text-2xl">Written Content?</div>
                        <div className="flex mt-4">
                            <div id='contentYes' className="border border-green-200 w-[50%] mx-6 h-[40px] rounded-xl flex items-center justify-center hover:bg-green-200 hover:cursor-pointer" onClick={() => setContentStateAtom('Yes')}>Yes</div>
                            <div id='contentNo' className="border border-green-200 w-[50%] mx-6 h-[40px] rounded-xl flex items-center justify-center hover:bg-green-200 hover:cursor-pointer" onClick={() => setContentStateAtom('No')}>No</div>
                        </div>
                        <div className="ml-4 mt-4 md:text-2xl md:mt-10">Illustrations?</div>
                        <div className="flex mt-4">
                            <div id='illustrationYes' className="border border-green-200 w-[50%] mx-6 h-[40px] rounded-xl flex items-center justify-center hover:bg-green-200 hover:cursor-pointer" onClick={() => setillustrationStateAtom('Yes')}>Yes</div>
                            <div id='illustrationNo' className="border border-green-200 w-[50%] mx-6 h-[40px] rounded-xl flex items-center justify-center hover:bg-green-200 hover:cursor-pointer" onClick={() => setillustrationStateAtom('No')}>No</div>
                        </div>
                    </div>
                    <div className="flex mb-4 justify-center space-x-10 px-4 mt-8">
                        <button className="bg-green-200 rounded-lg w-[100px] px-4 h-8 md:w-[150px] md:text-xl md:h-[40px] hover:cursor-pointer" onClick={previousPage}>Previous</button>
                        <button className="bg-green-200 rounded-lg w-[100px] px-4 h-8 md:w-[150px] md:text-xl md:h-[40px] hover:cursor-pointer" onClick={changePage}>Next</button>
                    </div>
                </div>
                </div>
        )
    }
    else if(page === 4) {
        return (
            <div className="flex flex-col h-[100vh] bg-gray-100 items-center justify-center">
                <h2 className="text-xl font-bold mb-10 md:text-4xl">Review and Confirm</h2>
                <div className="border w-[80%] mx-[10%] bg-white rounded-lg flex flex-col items-center max-w-[800px]">
                    <h3 className="text-lg mt-2 text-center md:text-xl md:mt-4">Please confirm this info is correct!</h3>
                    <div className="flex space-x-2 my-6 md:space-x-10">
                        <div id="numberOne" className="border rounded-full w-6 text-center md:w-10 md:h-10 flex justify-center items-center">1</div>
                        <hr className="w-10 mt-3 md:mt-5 md:w-[100px]"/>
                        <div id='numberTwo' className="border rounded-full w-6 text-center md:w-10 md:h-10 flex justify-center items-center">2</div>
                        <hr className="w-10 mt-3 md:mt-5 md:w-[100px]"/>
                        <div id='numberThree' className="border rounded-full w-6 text-center md:w-10 md:h-10 flex justify-center items-center">3</div>
                        <hr className="w-10 mt-3 md:mt-5 md:w-[100px]"/>
                        <div id='numberFour' className="border rounded-full w-6 text-center md:w-10 md:h-10 flex justify-center items-center">4</div>
                    </div>
                    <hr className="w-[90%] mb-6"/>
                    <div className="flex flex-col gap-4 md:gap-y-10">
                        <div className="flex flex-col md:flex-row md:space-x-10">
                            <div className="text-xl font-bold md:text-2xl md:w-[100px]">Name:</div>
                            <div className="md:text-xl md:w-[300px] md:text-right ">{personalInfoStateAtom.Name}</div>
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-10">
                            <div className="text-xl font-bold md:text-2xl md:w-[100px]">Email:</div>
                            <div className="md:text-xl md:w-[300px] md:text-right ">{personalInfoStateAtom.Email}</div>
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-10">
                            <div className="text-xl font-bold md:text-2xl md:w-[100px]">Phone:</div>
                            <div className="md:text-xl md:w-[300px] md:text-right ">{personalInfoStateAtom.PhoneNumber}</div>
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-10">
                            <div className="text-xl font-bold md:text-2xl md:w-[100px]">Site:</div>
                            <div className="md:text-xl md:w-[300px] md:text-right ">{personalInfoStateAtom.Portfolio}</div>
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-10">
                            <div className="text-xl font-bold md:text-2xl md:w-[100px]">Content?</div>
                            <div className="md:text-xl md:w-[300px] md:text-right ">{contentStateAtom}</div>
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-10">
                            <div className="text-xl font-bold md:text-2xl md:w-[100px]">Illustrations?</div>
                            <div className="md:text-xl md:w-[300px] md:text-right">{illustrationStateAtom}</div>
                        </div>
                    </div>
                    <div className="flex mb-4 justify-center space-x-10 px-4 mt-8">
                        <button className="bg-green-200 rounded-lg w-[100px] px-4 h-8 md:w-[150px] md:text-xl md:h-[40px] hover:cursor-pointer" onClick={previousPage}>Previous</button>
                        <button className="bg-green-200 rounded-lg w-[100px] px-4 h-8 md:w-[150px] md:text-xl md:h-[40px] hover:cursor-pointer" onClick={changePage}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
    else if(page === 5) {
        if(animationEnded === false) {
            return (
                <div>
                    <div>
                        {isExploding && <ConfettiExplosion particleCount={300} duration={3000} className="ml-[50%] relative top-[100px]" onComplete={() => setAnimationEnded(true)}/>}
                    </div>
                    <div className="flex flex-col h-[100vh] bg-gray-100 items-center justify-center">
                        <h2 className="text-xl font-bold mb-10">Submitted!</h2>
                        <div className="border w-[80%] mx-[10%] bg-white rounded-lg flex flex-col items-center max-w-[800px] h-[200px] justify-center">
                            <h3 className="text-lg mt-2 text-center mx-6">Thank you for your submission, we will reach out soon after we look over your information!</h3>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div className="flex flex-col h-[100vh] bg-gray-100 items-center justify-center gap-10">
                    <div>Have a great day!</div>
                    <div className="text-green-500 hover:cursor-pointer" onClick={() => router.push('/')}>Back to Favorite Components {'->'}</div>
                </div>
                
            )
        }
    }
}



export default MultiStepForm;