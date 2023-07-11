import { StarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Stars = () => {

    const [canCall, setCanCall] = useState(true);
    const [num, setNum] = useState(0);

    const responses = [
        "We're sorry to hear that you had a bad experience. We would love to hear how we can make it right.",
        "We're sorry to hear that your experience wasn't ideal. We would love to work with you to address your concerns.",
        "We are sorry to hear that your experience wasn't perfect. We would love to hear how we can improve!",
        'Thank you for your feedback! We are happy to hear that you had a good experience!',
        "Excellent! We're thrilled to hear that you had a great experience!"
    ]

    const handleHover = (e) => {
        if(canCall === true) {
            for(let i = e.target.id; i > 0; i--) {
                document.getElementById(i).children[0].style.color = 'yellow'
            }
        }
    }

    const handleBlur = () => {
        if(canCall === true) {
            for(let i = 5; i > 0; i--) {
                document.getElementById(i).children[0].style.color = 'lightgray'
            }
        }
    }

    const setStars = (e) => {
        setNum(e.target.id)
        setCanCall(false)
        for(let i = 5; i > 0; i--) {
            if(i > e.target.id) {
                document.getElementById(i).children[0].style.color = 'lightgray';
            }
            else {
                document.getElementById(i).children[0].style.color = 'yellow';
            }
        }
        
    }

    return (
        <div className="h-[100vh] bg-gray-400 flex justify-center items-center">
            <div className="bg-white mx-10 w-[80%] md:w-[800px] h-[225px] md:h-[400px] rounded-lg flex flex-col justify-center">
                <h2 className="text-xl md:text-4xl font-bold text-center">How was your experience?</h2>
                <div className="flex space-x-4 justify-center mt-4">
                    <div id={1} className="hover:cursor-pointer w-[10%] md:w-[15%]" onMouseEnter={handleHover} onMouseLeave={handleBlur} onClick={setStars}><StarIcon id='first' className="text-gray-300" pointerEvents='none'/></div>
                    <div id={2} className="hover:cursor-pointer w-[10%] md:w-[15%]" onMouseEnter={handleHover} onMouseLeave={handleBlur} onClick={setStars}><StarIcon id='second' className="text-gray-300" pointerEvents='none'/></div>
                    <div id={3} className="hover:cursor-pointer w-[10%] md:w-[15%]" onMouseEnter={handleHover} onMouseLeave={handleBlur} onClick={setStars}><StarIcon id='third' className="text-gray-300" pointerEvents='none'/></div>
                    <div id={4} className="hover:cursor-pointer w-[10%] md:w-[15%]" onMouseEnter={handleHover} onMouseLeave={handleBlur} onClick={setStars}><StarIcon id='fourth' className="text-gray-300" pointerEvents='none'/></div>
                    <div id={5} className="hover:cursor-pointer w-[10%] md:w-[15%]" onMouseEnter={handleHover} onMouseLeave={handleBlur} onClick={setStars}><StarIcon id='fifth' className="text-gray-300" pointerEvents='none'/></div>
                </div>
                <div className="flex justify-center top-4 md:top-10 relative text-center text-sm md:text-lg px-10 md:px-[150px]">{responses[num - 1]}</div>
            </div>
        </div>
    )
}

export default Stars;