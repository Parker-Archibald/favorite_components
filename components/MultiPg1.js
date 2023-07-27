import { useRecoilState } from "recoil";
import {serviceState} from '../Atoms/MultiStepAtoms';
import { useEffect } from "react";

const MultiPg1 = ({image, text}) => {

    const [services, setServices] = useRecoilState(serviceState)

    useEffect(() => {
        if(services === text) {
            document.getElementById(text).style.backgroundColor = 'lightGreen';
        }
        else {
            document.getElementById(text).style.backgroundColor = 'white';
        }
    })

    const handleClick = (e) => {
        setServices(text)
    }

    return (
        <div id={text} onClick={handleClick} className="border border-green-300 rounded-lg w-[40%] md:w-[300px] h-[100px] md:h-[150px] flex flex-col text-center items-center justify-center hover:bg-green-200 hover:cursor-pointer">
            <div className="w-10" pointerEvents='none'>{image}</div>
            <div pointerEvents='none'>{text}</div>
        </div>
    )
}

export default MultiPg1;