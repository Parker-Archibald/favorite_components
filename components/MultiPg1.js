

const MultiPg1 = ({image, text}) => {

    const handleClick = () => {
        localStorage.setItem('service', text)
    }

    return (
        <div id={text} onClick={handleClick} className="border border-green-300 rounded-lg w-[40%] h-[100px] flex flex-col text-center items-center justify-center hover:bg-green-200 hover:cursor-pointer">
            <div className="w-10" pointerEvents='none'>{image}</div>
            <div pointerEvents='none'>{text}</div>
        </div>
    )
}

export default MultiPg1;