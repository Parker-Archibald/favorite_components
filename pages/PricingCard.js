import '../components/Card';
import Card from '../components/Card';
import {useState} from 'react';

const PricingCard = () => {

    const [priceType, setPriceType] = useState('Monthly');

    const updatePrice = () => {
        if(priceType === 'Monthly') {
            setPriceType('Annually')
        }
        else {
            setPriceType('Monthly')
        }
    }

    return (
        <div className="flex flex-col justify-center bg-gray-100 h-[100%] md:h-[100vh]">
            <div className="text-center">
                <h1 className="font-bold text-4xl mt-10"><span className="text-blue-400">Flexible</span> Plans</h1>
                <div className="w-[100%] flex justify-center"><div className="text-sm w-[50%]">Choose a plan that works best for you and your team.</div></div>
            </div>
            <div className="flex space-x-6 justify-center mt-10">
                <div>Bill Monthly</div>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type='checkbox' value='' className="sr-only peer" onClick={updatePrice}></input>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none
                    peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800
                    rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full
                    peer-checked:after:border-white after:content-[''] after:absolute
                    after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300
                    after:border after:rounded-full after:h-5 after:w-5
                    after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
                <div>Bill Annually</div>
            </div>
            <div className='flex mb-8 flex-col md:flex-row justify-center items-center'>
                <Card info={{
                    name:'Basic',
                    cost: {
                        monthly: '$29',
                        annually: '$348'
                    },
                    desc:'Best option for personal use and for your next project.',
                    checks: [
                        'Individual setup',
                        'Team size: 1 Developer'
                    ],
                    button: 'Basic',
                    priceType: priceType
                }}/>
                <Card info={{
                    name:'Advanced',
                    cost: {
                        monthly: '$60',
                        annually: '$720'
                    },
                    desc:'Great for multiple users, extended and premium support.',
                    checks: [
                        'Individual setup',
                        'Team size: 5 Developers',
                        'Premium 24/hr support for 1 year'
                    ],
                    button: 'Advanced',
                    priceType: priceType
                }}/>
                <Card info={{
                    name:'Enterprise',
                    cost: {
                        monthly: '$140',
                        annually: '$1,680'
                    },
                    desc:'Perfect for large scale uses and extended redistribution rights.',
                    checks: [
                        'Individual setup',
                        'Team size: 10 Developers',
                        'Premium 24/hr support, unlimited',
                        'Custom requests'
                    ],
                    button: 'Enterprise',
                    priceType: priceType
                }}/>
            </div>
        </div>
    )
}

export default PricingCard;