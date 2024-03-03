"use client"

import { useRouter } from 'next/navigation';

import { useState } from 'react';
import toast from 'react-hot-toast';

const CommentForm = ({ comentInfo }) => {
    const { postID, isLogin } = comentInfo;
    const [loading, setLoading] = useState(false)

    const [data, setData] = useState({
        postID: postID,
        emptyValue: ""
    })
    const router = useRouter()






    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!data.commentText) return toast.error("Commnet feild empty")
        if (!isLogin) return toast.error("You need to Login first")
        const { emptyValue, ...rest } = data;
        setData({ ...data, emptyValue: "" })

        const options = { method: "POST", body: JSON.stringify(rest) }
        try {
            setLoading(true)
            const res = await (await fetch("/api/comments/manage", options)).json();
            setLoading(false)

            if (res.success !== true) {
                toast.error('e')
            }
            else {
                toast.success('Comment added')
                router.refresh()
            }
        } catch (error) {
            setLoading(false)
            toast.error('Comment submit failed!', error)
        }
    }




    return (
        <>
            <div className="flex justify-center items-center w-full bg-white mt-5">
                <div className='w-full'>
                    <form onSubmit={e => handleSubmit(e)}>
                        <textarea
                            value={data.emptyValue}
                            onChange={e => setData({ ...data, commentText: e.target.value, emptyValue: e.target.value })}
                            placeholder="Add your comment..."
                            className="p-2 focus:outline-1 focus:outline-blue-500 font-bold border-[0.1px] resize-none h-[120px] border-[#9EA5B1] rounded-md w-full"
                        />
                        <div
                            className="flex justify-end">
                            <button disabled={loading} type='submit' className="text-sm font-semibold  bg-brand w-fit text-white py-2 rounded px-3">

                                {
                                    loading ? "Loading..." : "Post"
                                }

                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CommentForm