import Techs from "@/components/Techs";
import { useEffect, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const MultiSearch = () => {

    const [initialList, setInitialList] = useState(Techs);
    const [techList, setTechList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleAddTech = (e) => {
        if(techList.includes(e.target.innerHTML)) {
            return;
        }
        else {
            setTechList(() => {
                return [...techList, e.target.innerHTML]
            })
        }
        
    }

    const removeTech = (tech) => {
        let index = techList.indexOf(tech)

        setTechList(oldArray => {
            return oldArray.filter((value, i) => i !== index)
        })
    }

    const handleSearchChange = (e) => {
            let input = e.target.value;
            if(e.target.value !== '') {
                input = input[0].toUpperCase();
            }
            setSearch(input)

            let value = Techs.filter(tech => {
                return tech.indexOf(input) === 0;
            })
            setInitialList(value)
        
        
    }

    return (
        <div className="bg-gray-500 h-[100vh] flex flex-col justify-center items-center">

            <h2 className="-mt-10 mb-10 text-4xl"><span className="text-blue-400">Multi</span> Search</h2>
            
            {/* bar containing techs */}
            <div className="w-[65%] md:w-[600px] min-h-[40px] bg-white rounded-lg flex items-center p-3 hover:cursor-pointer"
            onClick={handleOpen}>
                {techList.length > 0 ? (
                    <div className="flex flex-wrap space-x-2">
                        {techList.map(tech => (
                            <div className="border px-2 flex rounded-lg bg-gray-400 pb-1">
                                {tech}
                                <div className="ml-2" onClick={() => removeTech(tech)}>x</div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex">
                        <div>Select your Technologies</div>
                        {isOpen === false ? 
                                <ChevronDownIcon className="w-4 ml-3 mt-1"/> : <ChevronUpIcon className="w-4 ml-3 mt-1"/>
                        }
                    </div>
                )}
            </div>

            {/* dropdown */}
            {isOpen === true && (
                <div className="bg-white w-[65%] md:w-[600px] h-[200px] overflow-y-scroll scrollbar-hide mt-8 rounded-lg">
                    <form>
                        <input className="w-full border indent-2 focus:outline-none py-2" onChange={handleSearchChange} placeholder="Search"/>
                    </form>
                    {search === '' ? (
                        <div>
                            {initialList.map(tech => (
                                <div className="indent-4 py-3 hover:bg-gray-200 hover:cursor-pointer md:text-lg" onClick={handleAddTech}>
                                    {tech}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div>
                            {initialList.map(tech => (
                                <div className="indent-4 py-3 hover:bg-gray-200 hover:cursor-pointer md:text-lg" onClick={handleAddTech}>
                                    {tech}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default MultiSearch;