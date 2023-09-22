"use client"
import SingleContacts from '@/components/SingleContacts'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { getData } from './fetchdata/FetchData'

export default function Home() {

const { data, isLoading, isError}= useQuery({
  queryKey: ['contact'], queryFn:getData
})
console.log(data?.data)
  return (
    <>
    <div className='w-[90%] lg:w-[70%] mx-auto my-[5rem]'>
      <div className="text-right">
        <Link href='/addcontact'>
          <span className='p-2 py-3 bg-blue-600 rounded-md hover:bg-blue-700/50'>Contact</span>
        </Link>
      </div>

      <div className='mt-[2rem]'>
        <h1 className='text-center text-3xl py-4 '>CRUD APP</h1>
        <table className='w-full'>
          <tbody>
            <tr className='bg-white/70 h-[4rem] text-black/80'>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
            </tr>
            <tr>{isLoading?"fetching data....":null}</tr>
            {data?.data.map((user, i)=>(
              <SingleContacts user = {user} key={i}/>
            ))}
            </tbody>
        </table>
      </div>
    </div>
    
    
    </>
     )
}
