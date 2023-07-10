import { StarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Stars = () => {

    const [canCall, setCanCall] = useState(true);
    const [num, setNum] = useState();

    const handleHover = (e) => {
        for(let i = e.target.id; i > 0; i--) {
            document.getElementById(i).style.color = 'yellow'
        }
    }

    const handleBlur = (e) => {
        if(canCall === true) {
            for(let i = 5; i > 0; i--) {
                document.getElementById(i).style.color = 'lightgray'
            }
        }
    }

    const handleClick = (e) => {
        setCanCall(false)
        console.log(e.target.id)
        for(let i = 5; i > 0; i--) {
            if(i > e.target.id) {
                document.getElementById(i).style.color = 'lightgray';
            }
            else {
                document.getElementById(i).style.color = 'yellow';
            }
        }
        
    }

    return (
        <div className="h-[100vh] bg-gray-400 flex justify-center items-center">
            <div className="bg-white mx-10 w-[80%] h-[200px] rounded-lg flex flex-col justify-center">
                <h2 className="text-xl text-center">How was your experience?</h2>
                <div className="flex space-x-4 justify-center mt-4">
                    <StarIcon id={1} className="w-[10%] text-gray-300 hover:cursor-pointer" onMouseEnter={handleHover} onMouseLeave={handleBlur} onClick={handleClick}/>
                    <StarIcon id={2} className="w-[10%] text-gray-300 hover:cursor-pointer" onMouseEnter={handleHover} onMouseLeave={handleBlur} onClick={handleClick}/>
                    <StarIcon id={3} className="w-[10%] text-gray-300 hover:cursor-pointer" onMouseEnter={handleHover} onMouseLeave={handleBlur} onClick={handleClick}/>
                    <StarIcon id={4} className="w-[10%] text-gray-300 hover:cursor-pointer" onMouseEnter={handleHover} onMouseLeave={handleBlur} onClick={handleClick}/>
                    <StarIcon id={5} className="w-[10%] text-gray-300 hover:cursor-pointer" onMouseEnter={handleHover} onMouseLeave={handleBlur} onClick={handleClick}/>
                </div>
            </div>
        </div>
    )
}

export default Stars;