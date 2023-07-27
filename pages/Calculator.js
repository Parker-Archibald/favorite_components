import { useState } from "react";

const Calculator = () => {

    const [firstNum, setFirstNum] = useState(0)
    const [secondNum, setsecondNum] = useState(0)
    const [method, setMethod] = useState('')
    const [end, setEnd] = useState(false);
    const [canBackspace, setCanBackspace] = useState(true)

    const buttons = [
        {button: 'C', length: 'normal'},
        {button: 'backspace', length: 'long'},
        {button: '/', length: 'normal'},
        {button: 7, length: 'normal'},
        {button: 8, length: 'normal'},
        {button: 9, length: 'normal'},
        {button: 'X', length: 'normal'},
        {button: 4, length: 'normal'},
        {button: 5, length: 'normal'},
        {button: 6, length: 'normal'},
        {button: '-', length: 'normal'},
        {button: 1, length: 'normal'},
        {button: 2, length: 'normal'},
        {button: 3, length: 'normal'},
        {button: '+', length: 'normal'},
        {button: 0, length: 'normal'},
        {button: '.', length: 'normal'},
        {button: '=', length: 'long'},
    ]

    const handleUpdateNum = (e) => {

        //reset calculator

        if(e.target.id === 'C') {
            setFirstNum(0);
            setsecondNum(0);
            setMethod('');
        }

        //backspace logic

        else if(e.target.id === 'backspace') {

            if(firstNum === 0 && secondNum === 0) {
                console.log('called')
                setFirstNum(0);
                setsecondNum(0);
                setMethod('');
            }

            else if(canBackspace === false) {
                setFirstNum(0);
                setsecondNum(0)
                setMethod('')
                setEnd(false)
                setCanBackspace(true)
            }

            else if(secondNum === 0) {
                let num = firstNum.slice(0, -1)
                if(num === '') {
                    setFirstNum(0);
                }
                else {
                    setFirstNum(num);
                }
            }

            else if(secondNum !== 0) {
                let num = secondNum.slice(0, -1)
                if(num === '') {
                    setsecondNum(0);
                }
                else {
                    setsecondNum(num);
                }
            }
        }

         //handle if the calculation has already run

        else if(end === true && secondNum === 0 && method === '') {
            if(e.target.id === '+' || e.target.id === '-' || e.target.id === 'X' || e.target.id === '/') {
                setMethod(e.target.id)
            }
            else if(e.target.id === '=') {
                return
            }
            else {
                setFirstNum(e.target.id)
                setEnd(false)
            }
        }

        //set the calculation method

        else if(e.target.id === '+' || e.target.id === '-' || e.target.id === '/' || e.target.id === 'X') {
            setMethod(e.target.id)
        }

        else if(e.target.id === '=') {
            if(method === '+') {
                let num = parseFloat(firstNum) + parseFloat(secondNum);
                let finalNum = num;
                if(num % 1 != 0) {
                    finalNum = num.toFixed(2)
                }
                setFirstNum(finalNum)
            }

            else if(method === '-') {
                let num = parseFloat(firstNum) - parseFloat(secondNum);
                let finalNum = num;
                if(num % 1 != 0) {
                    finalNum = num.toFixed(2)
                }
                setFirstNum(finalNum)
            }

            else if(method === 'X') {
                let num = parseFloat(firstNum) * parseFloat(secondNum);
                let finalNum = num;
                if(num % 1 != 0) {
                    finalNum = num.toFixed(2)
                }
                setFirstNum(finalNum)
            }

            else if(method === '/') {
                let num = parseFloat(firstNum) / parseFloat(secondNum);
                let finalNum = num;
                if(num % 1 != 0) {
                    finalNum = num.toFixed(2)
                }
                setFirstNum(finalNum)
            }
            setMethod('');
            setsecondNum(0);
            setEnd(true)
            setCanBackspace(false)
        }

        else if(method != '') {
            if(secondNum === 0) {
                setsecondNum(e.target.id)
            }
            else {
                let num = secondNum + e.target.id;
                setsecondNum(num);
            }
        }

        else {
            if(firstNum === 0) {
                setFirstNum(e.target.id)
            }

            else {
                let num = firstNum + e.target.id;
                setFirstNum(num)
            }
        }
    }

    const CalculatorNums = ({num}) => {

        const width= '100px'
    
        if(num.length === 'normal') {
            return (
                <div id={num.button} className="bg-cyan-500 w-[70px] h-[75px] rounded-lg shadow-xl text-2xl flex items-center justify-center hover:cursor-pointer" onClick={handleUpdateNum}>
                    {num.button}
                </div>
            )
        }
        else if(num.length === 'long') {
            return (
                <div id={num.button} className="bg-cyan-500 w-[160px] h-[75px] rounded-lg shadow-xl text-2xl flex items-center justify-center hover:cursor-pointer" onClick={handleUpdateNum}>
                    {num.button}
                </div>
            )
        }
    }

    return (
        <div className="flex bg-gray-900 h-screen w-screen text-white items-center text-center justify-center">
            <div className="bg-calculatorBG w-[100%] h-[95%] max-w-[400px] max-h-[800px] bg-cover rounded-2xl flex flex-col items-center">
                <div className="w-[90%] h-[200px] text-white pr-4 mt-6 font-bold text-6xl pt-1 flex flex-col items-baseline bg-transparent shadow-lg rounded-2xl">
                    {method != '' && <div className="text-right w-full mt-[60px] mb-2 opacity-60">{firstNum}{method}</div>}
                    {method === '' ? <div className="text-right w-full mt-auto mb-2">{firstNum}</div> : <div className="text-right w-full mt-auto mb-2">{secondNum}</div>}
                </div>
                <div className="mt-[25px]">Created by Parker Archibald</div>
                <div className="flex gap-5 flex-wrap m-6 mt-[25px]">
                    {buttons.map(num => (
                        <CalculatorNums num={num} key={num.button}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Calculator;