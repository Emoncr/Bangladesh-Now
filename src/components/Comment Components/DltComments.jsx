"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FaEye } from 'react-icons/fa'
import { MdDelete } from "react-icons/md";


const DltComments = ({ info }) => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleDelete = async () => {
        try {
            setLoading(true)
            const res = await (await fetch(`/api/comments/manage/delete?id=${info.id}`, {
                method: "DELETE"
            })).json();
            setLoading(false)
            if (res.success !== true) {
                toast.error("Comment detele failed!")
            }
            else {
                toast.success("Comment deteled")
                router.refresh();
            }
        } catch (error) {
            setLoading(false)
            toast.error('Comment detele failed!')
        }
    }



    return (
        <div className='btns flex items-center justify-start gap-3 sm:gap-5 mt-5'>
            <button
                onClick={handleDelete}
                className='text-white px-5 py-2 bg-red-600 hover:bg-red-500 rounded-sm flex items-center justify-center gap-1 font-inter font-semibold transition'>
                {
                    loading ? "Delteting..." : <>
                        <MdDelete />
                        Delete
                    </>
                }
            </button>
            <Link href={`/${info.News_list.Categories.name}/details/${info.News_list.id}`}
                className='text-white px-5 py-2 bg-green-600 rounded-sm flex items-center justify-center gap-1 font-inter font-semibold hover:bg-green-500 transition'>
                <FaEye /> Post
            </Link>
        </div>
    )
}

export default DltComments