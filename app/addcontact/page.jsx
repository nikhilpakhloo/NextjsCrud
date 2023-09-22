"use client"
import Input from '@/components/Input'
import {  useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { addData } from '../fetchdata/FetchData'

const page=()=> {

  const router = useRouter()
  const [form, setForm] = useState({
    Name:"",
    Email:"",
    Address:"",
    Phone:"",
  })
  const queryClient= useQueryClient();
  const {mutate, isLoading, isError} = useMutation({
    mutationFn:addData,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:["contact"]})
    }
  })
  const handleSubmit = (e)=>{
    e.preventDefault()
    mutate(form)
    router.push('/')
  }
  const inputs = [
    {
      label: "Full Name",
      type: "text",
      name: "Name",

    },
    {
      label: "Email",
      type: "email",
      name: "Email",

    },
    {
      label: "Contact",
      type: "number",
      name: "Phone",

    },
    {
      label: "Address",
      type: "text",
      name: "Address",

    },
  ]
  return (
    <>
      <div className='w-[90%] md:w-[30rem] mx-auto my-[5rem] border border-gray-500 bg-white/10 rounded-md p-6'>


        <span className='bg-blue-600/50 p-3 rounded-md hover:bg-blue-700/50 absolute left-[3rem] top-[3rem] cursor-pointer' onClick={() => router.push('/')}>

          Back
        </span>
        <h2 className='pb-7 text-center text-2xl'>Form</h2>
        <form onSubmit={handleSubmit } >
          {inputs.map((input, i) => (
            <Input input ={input} key={i} setForm={setForm} 
            Form={form} />
          ))}
          <button type='submit' className='mt-[2rem] bg-blue-600/50 w-full p-3 rounded-md hover:bg-blue-700/50'>{isLoading? "Submitting...":"Submit"}</button>
          
         
        </form>
      </div>

    </>
  )
}
export default page;
