import MultiProgress from "@/components/MultiProgress";
import MultiPg1 from "@/components/MultiPg1";
import { GlobeAmericasIcon, CodeBracketIcon, UserGroupIcon, EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const MultiStepForm = () => {

    const [page, setPage] = useState(2);

    if(page === 1) {
        return (
            <div className="flex flex-col h-[100vh] bg-gray-100 items-center justify-center">
                <h2 className="text-xl font-bold mb-10">We are a team of Web Developers</h2>
                <div className="border w-[80%] mx-[10%] bg-white rounded-lg flex flex-col items-center">
                    <h3 className="text-lg mt-2">What services do you need?</h3>
                    <MultiProgress num='firstPage'/>
                    <hr className="w-[90%] mb-6"/>
                    <div className="flex gap-4 flex-wrap justify-center mb-4">
                        <MultiPg1 image={<GlobeAmericasIcon pointerEvents='none'/>} text='Web Design'/>
                        <MultiPg1 image={<CodeBracketIcon pointerEvents='none'/>} text='Web Development'/>
                        <MultiPg1 image={<UserGroupIcon pointerEvents='none'/>} text='SEO'/>
                        <MultiPg1 image={<EllipsisHorizontalCircleIcon pointerEvents='none'/>} text='Other'/>
                    </div>
                    <button type='submit' className="bg-green-100 w-[100px] rounded-large hover:cursor-pointer mb-6">Next</button>
                </div>
            </div>
        )
    }

    else if(page === 2) {
        return (
            <div className="flex flex-col h-[100vh] bg-gray-100 items-center justify-center">
                <h2 className="text-xl font-bold mb-10">We are excited to meet you!</h2>
                <div className="border w-[80%] mx-[10%] bg-white rounded-lg flex flex-col items-center">
                    <h3 className="text-lg mt-2">Your personal information.</h3>
                    <MultiProgress num='secondPage'/>
                    <hr className="w-[90%] mb-6"/>
                    <form className="flex flex-wrap gap-6 justify-center mb-6">
                        <div className="flex flex-col w-[100px]">
                            <div className="mb-2">Name:</div>
                            <input className="w-[100px] border focus:outline-none indent-2" />
                        </div>
                        <div className="flex flex-col w-[100px]">
                            <div className="mb-2">Email:</div>
                            <input className="w-[100px] border"/>
                        </div>
                        <div className="flex flex-col w-[100px]">
                            <div className="mb-2">Phone Number:</div>
                            <input className="w-[100px] border"/>
                        </div>
                        <div className="flex flex-col w-[100px]">
                            <div className="mb-2">Portfolio {'(optional)'}</div>
                            <input className="w-[100px] border"/>
                        </div>
                    </form>
                </div>
                </div>
        )
    }
}

export default MultiStepForm;