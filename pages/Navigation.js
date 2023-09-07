import {HiMenuAlt2} from 'react-icons/hi';
import {MdOutlineDashboard, MdOutlineAnalytics} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {FaRegFolderOpen} from 'react-icons/fa'
import {BsCart2, BsSuitHeart} from 'react-icons/bs'
import {LuSettings, LuLogOut} from 'react-icons/lu'
import {RiDatabaseLine} from 'react-icons/ri'
import {useState} from 'react'

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [fullIsOpen, setFullIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(true)
        setTimeout(() => {
            document.getElementById('container').style.width = '60%'
        }, 100)
    }

    const closeMenu = () => {
        document.getElementById('container').style.width = '0%'
        setTimeout(() => {
            setIsOpen(false)
        }, 500)
    }

    const handleClick = e => {
        const all = document.querySelectorAll(`#selections`)
        for(let i = 0; i < all[0].children.length; i++) {
            document.getElementById(all[0].children[i].id).style.borderRight = 'none'
            
        }

        document.getElementById(e.target.id).style.borderRight = '3px solid #40E0D0'
    }

    const openFullMenu = () => {
        console.log('open')
        setFullIsOpen(true)
        setTimeout(() => {
            document.getElementById('containerFull').style.width = '25%'
        }, 100)
    }

    const closeFullMenu = () => {
        document.getElementById('containerFull').style.width = '5%'
        setTimeout(() => {
            setFullIsOpen(false)
        }, 500)
    }

    const handleFullHoverOpen = (e) => {
        document.getElementById(`${e.target.id}Bg`).style.width = '99.6%'
    }

    const handleFullHoverClose = (e) => {
        document.getElementById(`${e.target.id}Bg`).style.width = '0%'
    }

    return (
        <div className="w-screen h-screen bg-gray-200">
            {!isOpen ? (
                <div className='md:h-screen md:bg-white md:w-[4%] md:flex md:flex-col md:items-center'>
                    <HiMenuAlt2 className='md:hidden text-4xl pl-2 pt-2 md:pl-0 md:mt-2 cursor-pointer' onClick={openMenu}/>
                    {!fullIsOpen && (
                        <div className='hidden md:flex md:flex-col h-full w-full'>
                            <HiMenuAlt2 className='text-4xl pl-2 pt-2 mt-2 cursor-pointer text-center w-full' onClick={openFullMenu}/>
                            <hr className='flex w-[90%] ml-[5%] mt-6'/>
                            <div id='selections' className=' flex flex-col space-y-8 mt-8 w-full h-[85%]'>
                                <div id='dashboard' className='w-full flex justify-center cursor-pointer py-2 border-r-2 border-[#40E0D0]' onClick={handleClick}><MdOutlineDashboard className='text-4xl pointer-events-none'/></div>
                                <div id='profile' className='w-full flex justify-center cursor-pointer py-2' onClick={handleClick}><CgProfile className='text-4xl pointer-events-none' onClick={handleClick}/></div>
                                <div id='analitics' className='w-full flex justify-center cursor-pointer py-2' onClick={handleClick}><MdOutlineAnalytics className='text-4xl pointer-events-none'/></div>
                                <div id='files' className='w-full flex justify-center cursor-pointer py-2' onClick={handleClick}><FaRegFolderOpen className='text-4xl pointer-events-none'/></div>
                                <div id='saved' className='w-full flex justify-center cursor-pointer py-2' onClick={handleClick}><BsCart2 className='text-4xl pointer-events-none'/></div>
                                <div id='order' className='w-full flex justify-center cursor-pointer py-2' onClick={handleClick}><BsSuitHeart className='text-4xl pointer-events-none'/></div>
                                <div id='settings' className='w-full flex justify-center cursor-pointer py-2' onClick={handleClick}><LuSettings className='text-4xl pointer-events-none'/></div>
                            </div>
                            <div className='md:flex w-full justify-center cursor-pointer hidden'>
                                <LuLogOut className='text-4xl pointer-events-none'/>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div id='container' className='w-0 bg-white h-screen rounded-r-xl transition-width duration-500 ease-in-out overflow-hidden md:hidden'>
                    <section className='flex h-[8%] mb-2'>
                        <div className='flex ml-4 mt-4 items-center space-x-4 w-[85%]'>
                            <RiDatabaseLine className='text-2xl mt-2'/>
                            <div className='text-3xl w-[80%]'>WebDev</div>
                        </div>
                        <div className='text-xl' onClick={closeMenu}>X</div>
                    </section>
                    <hr className='w-[90%] ml-[5%]'/>
                    <section id='selections' className='flex flex-col text-2xl pt-[40px] h-[80%] space-y-5'>
                        <div id='dashboard' className='flex items-center h-[60px]' onClick={handleClick}>
                            <MdOutlineDashboard className='w-[30%] pointer-events-none'/>
                            <div className='pointer-events-none'>Dashboard</div>
                        </div>
                        <div id='profile' className='flex items-center h-[60px]' onClick={handleClick}>
                            <CgProfile className='w-[30%] pointer-events-none'/>
                            <div className='pointer-events-none'>Profile</div>
                        </div>
                        <div id='analitics' className='flex items-center h-[60px]' onClick={handleClick}>
                            <MdOutlineAnalytics className='w-[30%] pointer-events-none'/>
                            <div className='pointer-events-none'>Analitics</div>
                        </div>
                        <div id='files' className='flex items-center h-[60px]' onClick={handleClick}>
                            <FaRegFolderOpen className='w-[30%] pointer-events-none'/>
                            <div className='pointer-events-none'>File manager</div>
                        </div>
                        <div id='order' className='flex items-center h-[60px]' onClick={handleClick}>
                            <BsCart2 className='w-[30%] pointer-events-none'/>
                            <div className='pointer-events-none'>Order</div>
                        </div>
                        <div id='saved' className='flex items-center h-[60px]' onClick={handleClick}>
                            <BsSuitHeart className='w-[30%] pointer-events-none'/>
                            <div className='pointer-events-none'>Saved</div>
                        </div>
                        <div id='settings' className='flex items-center h-[60px]' onClick={handleClick}>
                            <LuSettings className='w-[30%] pointer-events-none'/>
                            <div className='pointer-events-none'>Settings</div>
                        </div>
                    </section>
                    <section className='w-full flex pt-10'>
                        <div className='w-[20%] text-[50px] ml-2'><CgProfile/></div>
                        <div className='flex flex-col ml-3 mt-1'>
                            <div className='text-md font-bold'>Elise Smith</div>
                            <div className='text-xs'>Software Engineer</div>
                        </div>
                        <LuLogOut className='ml-10 mt-4 text-2xl'/>
                    </section>
                </div>
            )}
            {fullIsOpen && (
                <div id='containerFull' className='w-0 bg-white h-screen rounded-r-xl transition-width duration-500 ease-in-out overflow-hidden fixed top-0'>
                    <section className='flex h-[8%] mb-2 ml-6'>
                        <div className='flex ml-4 mt-4 items-center space-x-4 w-[89%]'>
                            <RiDatabaseLine className='text-3xl mt-2'/>
                            <div className='text-4xl w-[80%]'>WebDev</div>
                        </div>
                        <div className=' text-2xl cursor-pointer' onClick={closeFullMenu}>X</div>
                    </section>
                    <hr className='w-[90%] ml-[5%]'/>
                    <section id='selections' className='flex flex-col text-3xl pt-[40px] h-[80%] space-y-5'>
                        <div id='dashboard' className='flex items-center h-[80px] cursor-pointer' onClick={handleClick} onMouseEnter={handleFullHoverOpen} onMouseLeave={handleFullHoverClose}>
                            <MdOutlineDashboard className='w-[30%] pointer-events-none ml-4 z-10'/>
                            <div className='pointer-events-none z-10'>Dashboard</div>
                            <div id='dashboardBg' className='absolute bg-red-300 w-0 h-[80px] pointer-events-none transition-width ease-in-out duration-200'></div>
                        </div>
                        <div id='profile' className='flex items-center h-[80px] cursor-pointer' onClick={handleClick} onMouseEnter={handleFullHoverOpen} onMouseLeave={handleFullHoverClose}>
                            <CgProfile className='w-[30%] pointer-events-none ml-4 z-10'/>
                            <div className='pointer-events-none z-10'>Profile</div>
                            <div id='profileBg' className='absolute bg-red-300 w-0 h-[80px] pointer-events-none transition-width ease-in-out duration-200'></div>
                        </div>
                        <div id='analitics' className='flex items-center h-[80px] cursor-pointer' onClick={handleClick} onMouseEnter={handleFullHoverOpen} onMouseLeave={handleFullHoverClose}>
                            <MdOutlineAnalytics className='w-[30%] pointer-events-none ml-4 z-10'/>
                            <div className='pointer-events-none z-10'>Analitics</div>
                            <div id='analiticsBg' className='absolute bg-red-300 w-0 h-[80px] pointer-events-none transition-width ease-in-out duration-200'></div>
                        </div>
                        <div id='files' className='flex items-center h-[80px] cursor-pointer' onClick={handleClick} onMouseEnter={handleFullHoverOpen} onMouseLeave={handleFullHoverClose}>
                            <FaRegFolderOpen className='w-[30%] pointer-events-none ml-4 z-10'/>
                            <div className='pointer-events-none z-10'>File manager</div>
                            <div id='filesBg' className='absolute bg-red-300 w-0 h-[80px] pointer-events-none transition-width ease-in-out duration-200'></div>
                        </div>
                        <div id='order' className='flex items-center h-[80px] cursor-pointer' onClick={handleClick} onMouseEnter={handleFullHoverOpen} onMouseLeave={handleFullHoverClose}>
                            <BsCart2 className='w-[30%] pointer-events-none ml-4 z-10'/>
                            <div className='pointer-events-none z-10'>Order</div>
                            <div id='orderBg' className='absolute bg-red-300 w-0 h-[80px] pointer-events-none transition-width ease-in-out duration-200'></div>
                        </div>
                        <div id='saved' className='flex items-center h-[80px] cursor-pointer' onClick={handleClick} onMouseEnter={handleFullHoverOpen} onMouseLeave={handleFullHoverClose}>
                            <BsSuitHeart className='w-[30%] pointer-events-none ml-4 z-10'/>
                            <div className='pointer-events-none z-10'>Saved</div>
                            <div id='savedBg' className='absolute bg-red-300 w-0 h-[80px] pointer-events-none transition-width ease-in-out duration-200'></div>
                        </div>
                        <div id='settings' className='flex items-center h-[80px] cursor-pointer' onClick={handleClick} onMouseEnter={handleFullHoverOpen} onMouseLeave={handleFullHoverClose}>
                            <LuSettings className='w-[30%] pointer-events-none ml-4 z-10'/>
                            <div className='pointer-events-none z-10'>Settings</div>
                            <div id='settingsBg' className='absolute bg-red-300 w-0 h-[80px] pointer-events-none transition-width ease-in-out duration-200'></div>
                        </div>
                    </section>
                    <section className='w-full flex pt-6'>
                        <div className='w-[15%] text-[50px] ml-4'><CgProfile/></div>
                        <div className='flex flex-col mt-1 w-[50%] ml-[5%]'>
                            <div className='text-xl font-bold'>Elise Smith</div>
                            <div className='text-xs'>Software Engineer</div>
                        </div>
                        <LuLogOut className='ml-10 mt-4 text-2xl cursor-pointer'/>
                    </section>
                </div>
            )}
        </div>
    )
}

export default Navigation;