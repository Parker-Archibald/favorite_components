import {ArrowRightCircleIcon} from '@heroicons/react/24/outline';

const Card = ({info}) => {

    const c = {
        name: info.name,
        cost: info.cost,
        desc: info.desc,
        checks: info.checks,
        button: info.button,
        priceType: info.priceType
    }

    return (
        <div className="border rounded-md h-[500px] mx-4 mt-10 bg-white md:max-w-[400px] md:flex-row px-2 sm:max-w-[400px]">
            <div className="text-center text-3xl mt-4 font-bold">{c?.name}</div>
            <div className="text-xl ml-4 mt-6" id='cost'>{c.priceType === 'Annually' ? c.cost.annually : c.cost.monthly}/{c?.priceType}</div>
            <div className="text-xs w-[90%] ml-4 mt-2">{c?.desc}</div>
            <hr className="w-[90%] ml-[5%] mt-2"/>
            <div className="w-full h-[55%] mt-5">{c?.checks.map((data) => {
                return (
                    <div className="flex flex-row align-center mt-4 ml-4 text-lg">
                        <ArrowRightCircleIcon className="text-green-600 w-6"/>
                        <div className="ml-2">{data}</div>
                    </div>
                )
            })}</div>
            <div className="w-full text-center">
                <button className="border rounded-lg w-[150px] h-8 bg-blue-300 items-center" onClick={() => alert(`Redirect to ${c?.button} page`)}>Get {info.button}</button>
            </div>
        </div>
    )
}

export default Card;