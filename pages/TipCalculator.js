import { useState } from "react";
import { UserIcon } from '@heroicons/react/24/outline'

const TipCalculator = () => {

    const percentages = [
        5, 10, 15, 25, 50
    ]

    const [billTotal, setBillTotal] = useState(0);
    const [selectedPercent, setSelectedPercent] = useState(0)
    const [peopleAmount, setPeopleAmount] = useState(1)
    const [tipAmount, setTipAmount] = useState(0);
    const [personTotal, setPersonTotal] = useState(0)

    const handleBill = (e) => {
        setBillTotal(e.target.value)
    }

    const handleTipSelect = (percent) => {
        for(let i = 0; i < percentages.length; i++) {
            document.getElementById(`${percentages[i]}`).style.backgroundColor = 'rgb(22, 101, 52)'
        }

        document.getElementById(percent).style.backgroundColor = 'gray'
        setSelectedPercent(percent/100)
        setTipAmount(parseInt(billTotal) * (parseInt(percent) / 100))
        
        let total = parseInt(billTotal)
        let tip = parseInt(billTotal) * (parseInt(percent) / 100)
        setPersonTotal(total + tip)
    }

    const handleCustomTip = (e) => {
        for(let i = 0; i < percentages.length; i++) {
            document.getElementById(`${percentages[i]}`).style.backgroundColor = 'rgb(22, 101, 52)'
        }

        setSelectedPercent(e.target.value/100)
        setTipAmount(parseInt(billTotal) * (parseInt(e.target.value) / 100))
        
        let total = parseInt(billTotal)
        let tip = parseInt(billTotal) * (parseInt(e.target.value) / 100)
        setPersonTotal(total + tip)
    }

    const handlePeople = (e) => {
        console.log(e.target.value)
        if(e.target.value === '') {
            setPeopleAmount(1)
        }
        else {
            setPeopleAmount(e.target.value)
            let total = parseInt(billTotal)
            let tip = parseInt(tipAmount)
            setPersonTotal(total + tip)
        }
    }

    return (
        <div className="text-gray-600 body-font font-orbitron flex flex-col h-screen tracking-widest md:items-center md:justify-center">
            <section className="h-[12%] w-screen flex justify-items-center">
                <div className="text-center w-full mt-10 text-2xl md:text-4xl">Tip Calculator</div>
            </section>
            <section className="h-[88%] w-screen rounded-t-3xl bg-green-300 px-4 md:w-[90%] max-w-[1000px] md:h-[60%] md:rounded-3xl md:flex md:space-x-6">
                <div className='md:w-[50%] md:justify-center md:flex md:flex-col'>
                    <h3 className="mt-8 text-xl md:mt-0 md:text-2xl md:ml-4">Bill</h3>
                    <div className="w-full mt-2">
                        <div className="absolute left-7 mt-1 text-green-300 md:relative md:top-7 md:left-2 md:-mt-2 w-4">$</div>
                        <input className="text-right focus:outline-none pr-2 rounded-lg py-1 w-full" type='number' onChange={handleBill}></input>
                    </div>
                    <div className="mt-8 text-xl">Select Tip %</div>
                    <section className="flex flex-wrap gap-x-4 gap-y-4 pt-6 px-4">
                        {percentages.map(percent => {
                            return (
                                <div id={percent} key={percent} className="w-[46%] py-2 text-2xl text-center rounded-xl bg-green-800 text-white cursor-pointer" onClick={() => handleTipSelect(percent)}>{percent}%</div>
                            )
                        })}
                        <input id='custom' className="w-[46%] py-2 text-2xl text-center rounded-xl bg-green-800 text-white focus:outline-none cursor-pointer" placeholder="Custom %" onChange={handleCustomTip}></input>
                    </section>
                    <div className="mt-8 mb-4 text-xl">Number of People</div>
                    <div>
                        <UserIcon className="w-6 absolute left-7 mt-1 text-green-300 md:relative md:top-7 md:left-2 md:-mt-2"/>
                        <input className="text-right focus:outline-none pr-2 rounded-lg py-1 w-full" type='number' onChange={handlePeople}/>
                    </div>
                </div>

                <section className="bg-green-800 text-white rounded-xl mt-6 pb-4 md:w-[50%] md:mb-10 md:flex md:flex-col md:justify-center">
                    <div className="pt-6 ml-8 flex items-center md:mb-10 md:pt-[50px]">
                        <div className="w-[50%]">
                            <div className='md:text-2xl'>Tip amount</div>
                            <div className="text-xs mt-2 md:text-xl">/ person</div>
                        </div>
                        <div className="w-[50%] text-right pr-10 text-2xl">{peopleAmount !== 0 ? (
                            <span>{(tipAmount / peopleAmount).toFixed(2)}</span>
                        ) : (
                            <span>{(tipAmount).toFixed(2)}</span>
                        )}</div>
                    </div>
                    <div className="pt-8 ml-8 flex items-center">
                        <div className="w-[50%]">
                            <div className='md:text-2xl'>Total</div>
                            <div className="text-xs mt-2 md:text-xl">/ person</div>
                        </div>
                        {billTotal !== 0 ? (
                            <div className="w-[50%] text-right pr-10 text-2xl">{(personTotal / peopleAmount).toFixed(2)}</div>
                        ) : (
                            <div className="w-[50%] text-right pr-10 text-2xl">0.00</div>
                        )}
                    </div>
                    <div className="mt-4 text-center py-2 bg-green-950 text-green-400 w-1/2 ml-[25%] rounded-lg cursor-pointer md:mt-[80px]" onClick={() => location.reload()}>Reset</div>
                </section>
            </section>
        </div>
    )
}

export default TipCalculator;