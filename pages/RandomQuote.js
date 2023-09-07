import { useEffect, useState } from "react";
import {AiFillSound} from 'react-icons/ai';
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

//API; https://github.com/lukePeavey/quotable#get-random-quote

const RandomQuote = () => {

    const [quote, setQuote] = useState();

    const url = 'https://api.quotable.io/quotes/random';

    useEffect(() => {
        getQuote() 
    }, [])

    const getQuote = async () => {
        try {
            const results = await fetch(url)
            const data = await results.json();
            setQuote(data[0])
        }
        catch (error) {
            console.log(error)
        }
    }
    
    const handleCopy = () => {
        navigator.clipboard.writeText(quote.content)
        document.getElementById('copied').style.display = 'flex'

        setTimeout(() => {
            document.getElementById('copied').style.display = 'none'
        }, 600)
    }

    const handleRead = () => {
        const synth = window.speechSynthesis;

        const utterThis = new SpeechSynthesisUtterance(quote.content + ' ' + quote.author)

        synth.speak(utterThis);
    }

    return (
        <div className="w-screen h-screen bg-gradient-to-r from-cyan-400 to-purple-500 flex justify-center items-center">
            <section className="w-[90%] bg-white bg-opacity-20 backdrop-blur-lg rounded-xl drop-shadow-lg h-[400px] flex flex-col max-w-[600px]">
                <h1 className="text-center mt-10 text-3xl h-[15%]"><span className="text-purple-500">Random</span> <span className="text-blue-500">Quote</span></h1>
                <div className="flex flex-col text-[120%] text-center justify-center items-center h-[65%] p-2">
                    <div className="[text-shadow:_2px_2px_4px_gray]"><span className="text-2xl">"</span>{quote?.content}<span className="text-2xl">"</span></div>
                    <div className="mt-6 justify-end flex w-full mr-4">- {quote?.author}</div>
                </div>
                <hr className="border-none w-[90%] h-[.25px] ml-[5%] bg-gray-500"/>
                <div className="h-[20%] flex pt-4 pl-6">
                    <div className="rounded-lg w-[15%] h-10 flex items-center pl-2 cursor-pointer" onClick={handleRead}><AiFillSound className="w-6 h-6" pointerEvents='none'/></div>
                    <div className="rounded-lg w-[15%] h-10 flex items-center pl-2 cursor-pointer"  onClick={handleCopy}>
                        <ClipboardDocumentIcon className="w-6 h-6" pointerEvents='none'/>
                        <div id='copied' className="hidden">Copied</div>
                    </div>
                    <div className=" w-[70%] text-right pr-6 pt-2 cursor-pointer" onClick={getQuote}>New Quote</div>
                </div>
            </section>
        </div>
    )
}

export default RandomQuote;