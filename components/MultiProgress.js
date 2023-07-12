import { useEffect } from "react";


const MultiProgress = ({num}) => {

    useEffect(() => {
        if(num === 'firstPage') {
            document.getElementById('numberOne').style.backgroundColor = 'black';
            document.getElementById('numberOne').style.color = 'white';
        }
        if(num === 'secondPage') {
            document.getElementById('numberTwo').style.backgroundColor = 'black';
            document.getElementById('numberTwo').style.color = 'white';
        }
    }, [])

 return (
    <div className="flex space-x-2 my-6">
        <div id="numberOne" className="border rounded-full w-6 text-center">1</div>
        <hr className="w-10 mt-3"/>
        <div id='numberTwo' className="border rounded-full w-6 text-center">2</div>
        <hr className="w-10 mt-3"/>
        <div className="border rounded-full w-6 text-center">3</div>
        <hr className="w-10 mt-3"/>
        <div className="border rounded-full w-6 text-center">4</div>
    </div>
 )
}

export default MultiProgress;