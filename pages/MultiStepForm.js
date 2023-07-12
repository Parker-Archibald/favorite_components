import MultiProgress from "@/components/MultiProgress";
import MultiPg1 from "@/components/MultiPg1";
import { GlobeAmericasIcon, CodeBracketIcon, UserGroupIcon, EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";

const MultiStepForm = () => {

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

export default MultiStepForm;