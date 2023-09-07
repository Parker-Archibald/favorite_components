import {useEffect, useState} from 'react';
import { collection, doc, onSnapshot, query, setDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from '../TodoFirebase';
import { EllipsisVerticalIcon, PencilSquareIcon, TrashIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

const Todo = () => {

    const [sectionData, setSectionData] = useState();
    const [tasks, setTasks] = useState();
    const [selectedSection, setSelectedSection] = useState('');
    const [newItem, setNewItem] = useState()
    const [nowAdding, setNowAdding] = useState(false)
    const [newSection, setNewSection] = useState();
    const [addingSection, setAddingSection] = useState(false)
    const [areYouSure, setAreYouSure] = useState(false)

  useEffect(() => {
    onSnapshot(query(collection(db, 'sections')), snapshot => {
        let snap = snapshot.docs;

        let section = [];

        for(let i = 0; i < snap.length; i++) {
            let completedAmount = 0;
            for(let j = 0; j < snap[i].data()?.tasks?.length; j++) {
                if(snap[i].data().tasks[j].completed) {
                    completedAmount++;
                }
            }
            section.push({
                sectionName: snap[i].id,
                completedAmount: completedAmount,
                totalTasks: snap[i]?.data()?.tasks?.length
            })
        }

        for(let i = 0; i < snap.length; i++) {
            if(snap[i].id === `${selectedSection}`) {
                setTasks(snap[i].data().tasks)
            }
        }

        setSectionData(section)
        if(section.length < 1) {
            setSelectedSection('No')
        }
        else if(selectedSection === '' && section.length > 0) {
            setSelectedSection(section[0]?.sectionName)
        }
        else {
            setSelectedSection(selectedSection)
        }
    })
  }, [selectedSection])

  const handleCheck = async (taskName) => {
    let tempTasks = tasks;
    for(let i = 0; i < tempTasks.length; i++) {
        if(tempTasks[i].taskName === taskName) {
            tempTasks[i].completed = true
        }
    }

    await updateDoc(doc(db, 'sections', selectedSection), {
        tasks: tempTasks
    })
  }

  const handleUncheck = async (taskName) => {
    let tempTasks = tasks;
    for(let i = 0; i < tempTasks.length; i++) {
        if(tempTasks[i].taskName === taskName) {
            tempTasks[i].completed = false
        }
    }

    await updateDoc(doc(db, 'sections', selectedSection), {
        tasks: tempTasks
    })
  }

  const handleEditOpen = (task, status) => {
    if(status === 'open') {
        document.getElementById(`${task}Dots`).style.width = '0px';
        document.getElementById(`${task}Edit`).style.display = 'flex';
    }
    else {
        document.getElementById(`${task}Edit`).style.display = 'none';
        document.getElementById(`${task}Dots`).style.width = '25px';
    }
  }

  const handleEdit = () => {
    console.log('edit')
  }

  const handleDelete = async (taskName) => {
    let oldTasks = tasks;
    let newTasks = [];
    for(let i = 0; i < oldTasks.length; i++) {
        if(oldTasks[i].taskName !== taskName) {
            newTasks.push(oldTasks[i])
        }
    }

    await updateDoc(doc(db, 'sections', selectedSection), {
        tasks: newTasks
    })
  }

  const handleAdd = async (e) => {
    e.preventDefault();
    document.getElementById('addInput').value = '';
    let tempTasks = tasks;
    tempTasks.push({
        completed: false,
        taskName: newItem
    })

    await updateDoc(doc(db, 'sections', selectedSection), {
        tasks: tempTasks
    })
  }

  const addSection = async (e) => {
    e.preventDefault();

    setDoc(doc(db, 'sections', newSection), {
        tasks: []
    })
    setSelectedSection(newSection)
    setAddingSection(false)
  }

  const deleteSection = async () => {
        await deleteDoc(doc(db, 'sections', selectedSection))
        setSelectedSection(sectionData[0].sectionName)
        setTasks(selectedSection[0].tasks)
        
        setAreYouSure(false)
  }

    return (
        <div className='flex justify-center overflow-hidden'>
            <div className="w-screen h-screen bg-gray-100 max-w-[800px]">
                <div className='w-full pt-[10%] pl-[10%] text-4xl font-bold'>Hello Friend!</div>
                <div className='w-screen pt-6 pl-6 text-2xl'>Sections</div>
                <div className="flex w-screen mt-6 overflow-x-scroll pl-10 pb-4 scrollbar-thin scrollbar-thumb-blue-200 px-10">
                    {sectionData?.map(section => {

                        let name = section?.sectionName
                        let completedAmount = ((section?.completedAmount/section?.totalTasks) * 100);

                        setTimeout(() => {
                            if(section?.completedAmount === 0 || section?.completedAmount === 'NaN' || section?.completedAmount === '0') {
                                document.getElementById(`${name}Completed`).style.width = `0px`
                            }
                            else {
                                document.getElementById(`${name}Completed`).style.width = `${completedAmount}%`
                            }
                        }, 100)

                        return (
                            <div id={name} className='w-[120px] h-[80px] bg-white rounded-xl flex flex-col mr-4 flex-shrink-0 z-10 cursor-pointer' onClick={() => setSelectedSection(name)}>
                                <div className='indent-4 mt-2' pointerEvents='none'>{name}</div>
                                <div className='text-right mr-4'pointerEvents='none'>{section?.completedAmount}/{section?.totalTasks}</div>
                                <div className='w-[80%] ml-[10%] mt-2'pointerEvents='none'>
                                    <hr className='w-[100%] h-1 border-0 bg-gray-100 rounded-full'/>
                                    <hr id={`${name}Completed`} className={` h-1 border-0 bg-blue-200 rounded-full -mt-1 transition-width ease-in-out duration-200`}/>
                                </div>
                            </div>
                        )
                    })}
                    {addingSection ? (
                        <form className='flex bg-white rounded-xl w-[120px] h-[80px] flex-shrink-0 justify-center items-center mr-10' onBlur={() => setTimeout(() => {setAddingSection(false)}, 100)} onSubmit={addSection}>
                            <input id='sectionAdd' className='focus:outline-none indent-4 w-full h-[50%]' onChange={(e) => setNewSection(e.target.value)}/>
                            <button type='submit' className=''><PaperAirplaneIcon className='w-6 h-6'/></button>
                        </form>
                    ) : (
                        <div className='w-[120px] h-[80px] flex flex-col mr-4 flex-shrink-0 z-10 items-center justify-center cursor-pointer' onClick={() => {setAddingSection(true); setTimeout(() => {document.getElementById('sectionAdd').focus()}, 100)}}>
                            <div>+</div>
                            <div>Add Section</div>
                        </div>
                    )}
                    
                </div>
                <div className="flex flex-col mt-2 indent-4">
                    <div className='flex'>
                        {selectedSection === 'No' ? (
                            <div className='text-2xl md:w-[90%]'>No Sections!</div>
                        ) : (
                            <div className='text-2xl md:w-[90%]'>{selectedSection}'s Tasks</div>
                        )}
                        <TrashIcon className='w-6 absolute right-0 mr-[10%] md:relative cursor-pointer' onClick={() => {sectionData.length > 0 && setAreYouSure(true)}}/>
                    </div>
                    <div className='flex flex-col space-y-4 mt-4 ml-[10%]'>
                        {tasks?.map(task => {
                            if(!task.completed) {
                                return (
                                    <div>
                                        <div key={task.taskName} className='bg-white w-[90%] py-2 rounded-xl flex pl-4'>
                                            <input type='checkbox' className=' cursor-pointer' onChange={() => handleCheck(task.taskName)}/>
                                            <div id={`${task.taskName}`} className='text-lg w-[85%] transition-width ease-in-out truncate'>{task.taskName}</div>
                                            <EllipsisVerticalIcon id={`${task.taskName}Dots`} className='w-6 cursor-pointer' onClick={() => handleEditOpen(task.taskName, 'open')}/>
                                            <div id={`${task.taskName}Edit`} className='hidden pr-4'>
                                                <div className='flex items-center'>
                                                    {/* <div className='bg-blue-400 w-10 h-[150%] flex justify-center items-center' onClick={handleEdit}><PencilSquareIcon className='w-4'/></div> */}
                                                    <div className='bg-red-600 w-10 h-[150%] flex justify-center items-center cursor-pointer' onClick={() => handleDelete(task.taskName)}><TrashIcon className='w-4'/></div>
                                                    <div className=' cursor-pointer' onClick={() => handleEditOpen(task.taskName, 'close')}>X</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                )
                            }
                        })}
                        <form id='addNew' onSubmit={handleAdd} className='hidden' onBlur={() => {setTimeout(() => {document.getElementById('addNew').style.display = 'none'; setNowAdding(false)}, 100)}}>
                            <input id='addInput' className='bg-white w-[90%] py-2 rounded-xl flex pl-4 focus:outline-none mr-2' onChange={(e) => setNewItem(e.target.value)}/>
                            <button type='submit' className='mr-[10%] bg-white rounded-lg w-10 flex justify-center items-center'><PaperAirplaneIcon className='w-6 h-6'/></button>
                        </form>
                        {!nowAdding && sectionData?.length !== 0 ? (
                            <div className='flex justify-center items-center -ml-8 text-xl cursor-pointer' onClick={() => {document.getElementById('addNew').style.display = 'flex'; setNowAdding(true); document.getElementById('addInput').focus()}}>
                                <div>+</div>
                                <div className='text-center'>Add new task</div>
                            </div>
                        ) : (
                            <div>Please add a section!</div>
                        )}
                    </div>
                    <div className='mt-6 ml-[10%]'>
                        <div className='text-xl'>Completed</div>
                        {tasks?.map(task => {
                            if(task.completed) {
                                return (
                                    <div key={task.taskName} className='bg-white w-[90%] py-2 rounded-xl flex pl-4  mt-4'>
                                        <input type='checkbox' className=' cursor-pointer' defaultChecked onChange={() => handleUncheck(task.taskName)}/>
                                        <div className='text-lg w-[85%]'>{task.taskName}</div>
                                        <EllipsisVerticalIcon id={`${task.taskName}Dots`} className='w-6 cursor-pointer' onClick={() => handleEditOpen(task.taskName, 'open')}/>
                                        <div id={`${task.taskName}Edit`} className='hidden pr-4'>
                                                <div className='flex items-center'>
                                                    {/* <div className='bg-blue-400 w-10 h-[150%] flex justify-center items-center' onClick={handleEdit}><PencilSquareIcon className='w-4'/></div> */}
                                                    <div className='bg-red-600 w-10 h-[150%] flex justify-center items-center cursor-pointer' onClick={() => handleDelete(task.taskName)}><TrashIcon className='w-4'/></div>
                                                    <div className=' cursor-pointer' onClick={() => handleEditOpen(task.taskName, 'close')}>X</div>
                                                </div>
                                            </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
                {areYouSure && (
                <div className='w-full flex items-center justify-center fixed top-[50%] left-[0%]'>
                    <div className='w-[80%] bg-white p-4 py-4 rounded-xl text-center max-w-[400px]'>
                        <p className='font-bold text-xl'>Are you sure you want to delete this section?</p>
                        <div className='flex space-x-2 w-full justify-center mt-4'>
                            <button className='bg-blue-300 py-1 px-4 rounded-xl' onClick={() => setAreYouSure(false)}>Cancel</button>
                            <button className='bg-gray-400 py-1 px-4 rounded-xl' onClick={deleteSection}>Delete</button>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Todo;