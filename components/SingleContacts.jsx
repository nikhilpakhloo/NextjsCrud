"use client"
import {BsFillTrashFill} from "react-icons/bs"
import {AiFillEdit} from "react-icons/ai"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { removeData } from '@/app/fetchdata/FetchData'

export default function SingleContacts({user}) {
    const {Name, Email,Phone, Address,_id} = user
    const queryClient= useQueryClient();

    const {mutate, isLoading, isError}=useMutation({
      mutationKey:["contact", _id],
      mutationFn:()=>removeData(_id),
      onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:["contact"]})
      }
    })
  return (
    <tr className='bg-white/40 h-[3rem] border-b border-black/40 text-center'>
        <td>{Name}</td>
        <td>{Email}</td>
        <td>{Phone}</td>
        <td>{Address}</td>
        <td className=' flex item-cnter gap-4 text-xl mt-[1rem]'>
            <span onClick={()=>mutate(_id)} className='cursor-pointer hover:opacity-70'><BsFillTrashFill/></span>
            <span className='cursor-pointer hover:opacity-70'><AiFillEdit/></span>
        </td>
    </tr>
  )
}
