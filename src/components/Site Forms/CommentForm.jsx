import React from 'react'

const CommentForm = () => {
    return (
        <>
            <div className="flex justify-center items-center w-full bg-white mt-5">
                <div className='w-full'>
                    <form >
                        <textarea
                            placeholder="Add your comment..."
                            className="p-2 focus:outline-1 focus:outline-blue-500 font-bold border-[0.1px] resize-none h-[120px] border-[#9EA5B1] rounded-md w-full"
                        />
                        <div className="flex justify-end">
                            <button className="text-sm font-semibold  bg-brand w-fit text-white py-2 rounded px-3">Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CommentForm