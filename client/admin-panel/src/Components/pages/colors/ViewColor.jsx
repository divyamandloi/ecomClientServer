import React, { useEffect, useState } from 'react'
import { FaSearchengin } from "react-icons/fa6";
import { BiSolidVolume } from "react-icons/bi";
import { ImVolumeMute2 } from "react-icons/im";
import { LuPencilLine } from "react-icons/lu";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router';
import BreadCrum from '../../common/BreadCrum';

export default function ViewColor() {
    let funObj = "View Color"
    let [search, setSearch] = useState(false)
    let [colorData, setColorData] = useState([])
    let [ids, setIds] = useState([])

    let [allCheck, setAllChecked] = useState(false)
    let [currentPage, setCurrentPage] = useState(1)
     let [limit, setLimit] = useState(5)
    let [totalPages,settotalPages] = useState(0) //3
    let apiBaseUrl = import.meta.env.VITE_APIBASEURL ?? 'http://localhost:8000/admin/'

    let getColor = () => {
        axios.get(`${apiBaseUrl}color/view`, {
            params: {
                page: currentPage,
                limit
            }
        })
            .then((res) => res.data)
            .then((finalRes) => {
                setColorData(finalRes.colorData);
                settotalPages(finalRes.totPages) //3
            })
    }


    useEffect(() => {
        getColor()
    }, [currentPage,limit])


    let getChecked = (e) => {
        if (e.target.checked) {
            if (!ids.includes(e.target.value)) {
                setIds([...ids, e.target.value])
            }
        }
        else {
            let filterData = ids.filter((v) => v != e.target.value)
            setIds(filterData)
        }

    }

    //All allChecked
    let allChecked = (e) => {
        if (e.target.checked) {
            let finalAns = colorData.map((v) => v._id) //Array
            setIds(finalAns)
        }
        else {
            setIds([])
        }
        setAllChecked(!allCheck)

    }


    useEffect(() => {
        if (ids.length == colorData.length && colorData.length >= 1) {
            setAllChecked(true)
        }
        else {
            setAllChecked(false)
        }
    }, [ids])


    let multiDelete = () => {
        if (ids.length >= 1) {
            axios.post(`${apiBaseUrl}color/multi-delete`,
                {
                    ids
                }
            )
                .then((res) => res.data)
                .then((finalRes) => {
                    getColor()
                })
        }
        else {
            toast.error("Please select one checkbox")
        }

    }

    let statusUpdate = () => {
        if (ids.length >= 1) {
            axios.post(`${apiBaseUrl}color/status-update`,
                {
                    ids
                }
            )
                .then((res) => res.data)
                .then((finalRes) => {
                    getColor()
                    setIds([])
                })
        }
        else {
            toast.error("Please select one checkbox")
        }

    }

    return (
        <div className='mx-[20px]'>
            <ToastContainer />
            <BreadCrum funObj={funObj} />
            <div className={`my-[20px] border border-gray-300 rounded-[5px] p-[20px] flex items-center gap-[15px] ${search ? ' ' : 'hidden'} `}>
                <input type=' text' className='p-[8px] text-[14px] text-gray-[300px] rounded-[5px] border border-gray-300 w-[250px]' placeholder='search here' />
                <div className='bg-blue-400 rounded-[5px] p-[8px] cursor-pointer hover:bg-green-400 border hover:border-red-500 duration-300'><FaSearchengin className='text-white ' /></div>
            </div>
            <div className='border border-gray-500 rounded-[5px]  '>
                <div className='p-[20px] flex justify-between items-center bg-gray-300 rounded-[5px]'>
                    <h2 className='text-[35px] font-bold font-serif'>{funObj}</h2>

                    <select className='border-1' onChange={(e)=>setLimit(e.target.value)}>
                        <option>Select Limit</option>

                         <option value={5}>5</option>
                         <option value={7}>7</option>
                         <option value={10}>10</option>
                    </select>

                    <div className='flex justify-between items-center gap-[20px]'>
                        <div className='p-[10px_10px] bg-sky-400 rounded-[5px] hover:bg-green-400 border hover:border-red-500 cursor-pointer'>
                            {
                                search ?

                                    <ImVolumeMute2 className='text-white ' onClick={() => setSearch(false)} />
                                    : <BiSolidVolume className='text-white ' onClick={() => setSearch(true)} />

                            }
                        </div>

                        <button onClick={multiDelete} className='p-[10px_16px] bg-green-500 text-white rounded-[8px] duration-200 hover:bg-green-400 border hover:border-red-500 cursor-pointer'>Delete</button>

                        <button onClick={statusUpdate} className='p-[10px_16px] bg-blue-500 text-white rounded-[8px] duration-200 hover:bg-green-400 border hover:border-red-500 cursor-pointer '>Update</button>

                    </div>
                </div>

                {/*table draw */}

                <div class="relative overflow-x-auto ">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr className='uppercase text-[15px]'>
                                <th>Sr no  <input type='checkbox' onChange={allChecked}
                                    checked={allCheck}
                                /></th>
                                <th scope="col" class="px-6 py-3 rounded-s-lg flex gap-[10px] items-center ">

                                    <h3>Product name</h3>
                                </th>
                                <th scope="col" class="px-6 py-3 text-center">
                                    code
                                </th>
                                <th scope="col" class="px-6 py-3 text-center ">
                                    order
                                </th>

                                <th scope="col" class="px-6 py-3  text-center">
                                    status
                                </th>
                                <th scope="col" class="px-6 py-3  text-center">
                                    action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                colorData.length >= 1 ?

                                    colorData.map((colorObj, index) => {
                                        return (
                                            <tr class="bg-white dark:bg-gray-800">
                                                <th className='p-3'>
                                                    <div className='flex gap-3'>
                                                        <input onChange={getChecked}
                                                            checked={ids.includes(colorObj._id)}

                                                            type='checkbox' value={colorObj._id} /> 
                                                             
                                                             
                                                             { 
                                                              (currentPage-1)*limit +index + 1
                                                             }

                                                    </div>

                                                </th>
                                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-[10px] items-center">

                                                    <h3 className='text-[14px]'>
                                                        {colorObj.colorName}
                                                    </h3>
                                                </th>

                                                <td class="px-6 py-4 text-center">
                                                    {colorObj.colorCode}
                                                </td>
                                                <td class="px-6 py-4 text-center">
                                                    {colorObj.colorOrder}
                                                </td>

                                                <td class="px-6 py-4 text-center">

                                                    {
                                                        colorObj.colorStatus ?
                                                            <button onClick={statusUpdate} className='p-[10px_16px] bg-green-500 text-white text-[15px] rounded-[8px] cursor-pointer font-serif'>Active</button>
                                                            :
                                                            <button onClick={statusUpdate} className='p-[10px_16px] bg-red-500 text-white text-[15px] rounded-[8px] cursor-pointer font-serif'>deActive</button>

                                                    }


                                                </td>
                                                <td class="px-6 py-4 flex justify-center">
                                                    <Link to={`/edit-color/${colorObj._id}`}>
                                                        <LuPencilLine className='p-[5px] rounded-[50%] bg-blue-500 text-white text-[35px] cursor-pointer  ' />
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })


                                    :
                                    <tr>
                                        <td colSpan={6} className='text-center py-4'>No Data Found</td>
                                    </tr>


                            }

                        </tbody>
                    </table>
                <div className='flex justify-center items-center'>                   
                     <ResponsivePagination
                        current={currentPage} //1
                        total={totalPages}  //3 
                        onPageChange={setCurrentPage} //Page Change
                    />
                    </div>

                </div>

                {/* table end*/}
            </div>
        </div>
    )
}