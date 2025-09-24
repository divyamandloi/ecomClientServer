import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import BreadCrum from '../../common/BreadCrum';
export default function AddColor() {

  let { id } = useParams() //Object = { id:value}
  let apiBaseUrl = import.meta.env.VITE_APIBASEURL ?? 'http://localhost:8000/admin/'
  console.log('API Base URL:', apiBaseUrl);
  let navigate = useNavigate()
  let [formValue, setformValue] = useState({
    colorName: '',
    colorCode: '',
    colorOrder: ''
  })
  let [loading, setLoading] = useState(false)
 

  let colorSave = (e) => {
    e.preventDefault()
    
    // Form validation
    if (!formValue.colorName.trim()) {
      toast.error('Color name is required');
      return;
    }
    if (!formValue.colorCode) {
      toast.error('Color code is required');
      return;
    }
    if (!formValue.colorOrder) {
      toast.error('Color order is required');
      return;
    }
    
    console.log('Form data being submitted:', formValue);
    
    setLoading(true);
    
    if (id) {
      //Update
      axios.put(`${apiBaseUrl}color/update/${id}`, formValue)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status == 1) {
            toast.success(finalRes.msg)
            setformValue({
              colorName: '',
              colorCode: '',
              colorOrder: ''
            })
            setTimeout(() => {
              navigate("/view-color")
            }, 3000)
          }
          else {
            toast.error(finalRes.errorMessage)
          }

        })
        .catch((error) => {
          console.error('Error updating color:', error);
          toast.error('Failed to update color. Please check your connection and try again.');
        })
        .finally(() => {
          setLoading(false);
        })
    }
    else {
      //Insert
      
      axios.post(`${apiBaseUrl}color/create`,formValue)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.status == 1) {
            toast.success(finalRes.msg)
            setformValue({
              colorName: '',
              colorCode: '',
              colorOrder: ''
            })
            setTimeout(() => {
              navigate("/view-color")
            }, 3000)
          }
          else {
            toast.error(finalRes.errorMessage)
          }

        })
        .catch((error) => {
          console.error('Error adding color:', error);
          toast.error('Failed to add color. Please check your connection and try again.');
        })
        .finally(() => {
          setLoading(false);
        })
    }



  }


  let getValueorSetvalue = (e) => {
    let obj = { ...formValue }
    let inputName = e.target.name //colorName
    let inputValue = e.target.value
    obj[inputName] = inputValue
    setformValue(obj)
  }

  let funObj = id ? "Edit Color" : "Add Color"

  useEffect(() => {

    setformValue(
      {
        colorName: '',
        colorCode: '',
        colorOrder: ''
      }
    )

    if (id) {
      axios.get(`${apiBaseUrl}color/edit-color/${id}`)
        .then((res) => res.data)
        .then((finalRes) => {
          setformValue(
            {
              colorName: finalRes.colorData.colorName,
              colorCode: finalRes.colorData.colorCode,
              colorOrder: finalRes.colorData.colorOrder,
            }
          )
        })
        .catch((error) => {
          console.error('Error fetching color data:', error);
          toast.error('Failed to load color data');
        })
    }
  }, [id])

  return (
    <div className='mx-[20px]'>
      <ToastContainer />
      <BreadCrum funObj={funObj} />
      <div className='mt-[20px]  border border-gray-400 rounded-[8px] '>
        <div className='bg-gray-300 p-[20px] rounded-[8px]'>
          <h2 className='font-bold text-[30px] font-serif'>{funObj}</h2>
        </div>

        <div className='m-[20px]'>
          <form onSubmit={colorSave}>
            <h3 className='font-medium text-[14px]'>Color Name</h3>
            <input value={formValue.colorName}
              onChange={getValueorSetvalue}
              name='colorName' type='text' className='mt-[10px] w-full p-[8px] text-[14px] text-gray-400 border border-gray-400 rounded-[5px]' placeholder='color name' />
            <h3 className='my-[10px] font-medium text-[14px]'>Color Code</h3>
            <input type='color'
              onChange={getValueorSetvalue}

              value={formValue.colorCode} name='colorCode' className=' w-full p-[8px] text-[14px] text-gray-400 border border-gray-400  h-[50px] rounded-[5px]' placeholder='color code' />
            <h3 className='my-[10px] font-medium text-[14px]'>Color Order</h3>
            <input
              onChange={getValueorSetvalue}

              type='number' value={formValue.colorOrder} name='colorOrder' className='w-full p-[8px] text-[14px] text-gray-400 border border-gray-400 rounded-[5px]' placeholder='color order' />
            {/* <button 
              type="submit"
              disabled={loading}
              className={`p-[10px_16px] rounded-[8px] text-center text-[14px] font-medium text-white my-[20px] cursor-pointer ${
                loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-sky-500 hover:bg-sky-600'
              }`}>
              {loading ? 'Processing...' : (id ? "Edit" : "Add") + " Color"}
            </button> */}
            <button className='p-[10px_16px] rounded-[8px] text-center text-[14px] bg-sky-500  font-medium text-white my-[20px] cursor-pointer'>
            {id ? "Edit" : "Add"} Color</button>
          </form>
        </div>

      </div>
    </div>
  )
}