import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"

const AccordianMenu = () => {

    const accordian = [
        {
            title: 'What is my Favorite Components app?',
            text: 'This app is a list of my favorite components that I have worked on. Each of these projects had different challenges associated with them to help me learn new ideas.'
        },
        {
            title: 'How do I do these projects?',
            text: 'Many of my projects have been added to my youtube channel with a view of how the project was made.'
        },
        {
            title: 'What is HTML?',
            text: 'Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.'
        },
        {
            title: 'What is Javascript?',
            text: 'JavaScript is a client-side and server-side scripting language inserted into HTML pages and is understood by web browsers. JavaScript is also an Object-based Programming language'
        },
        {
            title: 'What is Reactjs/Nextjs?',
            text: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces or UI components. It lets you compose complex UIs from small and isolated pieces of code called “components”. NextJS is a Reactjs framework.'
        },
        {
            title: 'What is TailwindCSS/CSS?',
            text: "CSS stands for Cascading Style Sheets CSS describes how HTML elements are to be displayed on screen, paper, or in other media.Tailwind is designed to be component friendly. It is so much easier to separate a site's elements into smaller components and not pollute the codebase with objects or extraneous CSS classes. Furthermore, every class is inlined in the component, making it much easier to read and understand."
        },
    ]

    const open = (title) => {
        document.getElementById(title).style.height = '120px';
        document.getElementById(`${title}Plus`).style.display = 'none'
        document.getElementById(`${title}Minus`).style.display = 'flex'
    }

    const close = (title) => {
        document.getElementById(title).style.height = '0px'
        document.getElementById(`${title}Minus`).style.display = 'none'
        document.getElementById(`${title}Plus`).style.display = 'flex'
    }

    return (
        <div className="bg-gray-800 h-screen w-screen flex flex-col justify-center items-center text-gray-400 space-y-4 overflow-auto">
            {accordian.map(single => {
                return (
                    <div className="flex w-screen flex-col items-center max-w-[1000px]">
                        <div className="w-[90%] bg-gray-900 py-2 indent-10 flex">
                            <div className="w-[90%]">{single.title}</div>
                            <PlusIcon id={`${single.title}Plus`} className="w-6 hover:cursor-pointer" onClick={() => open(single.title)}/>
                            <MinusIcon id={`${single.title}Minus`}  className="w-6 hidden hover:cursor-pointer" onClick={() => close(single.title)}/>
                        </div>
                        <div id={`${single.title}`} className="w-[90%] bg-gray-700 flex h-[0px] overflow-auto transition-height duration-500 ease-in-out">
                            <div className="m-2">{single.text}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AccordianMenu;