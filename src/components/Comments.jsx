import CommentForm from './Site Forms/CommentForm'
import CommentList from './CommentList'

const Comments = () => {
    return (
        <div>
            <div className='flex items-center justify-start gap-2 '>
                <p className='text-lg md:text-xl text-heading_color font-bold font-inter'>
                    Comments
                </p>
                <div className='h-[2px] w-full bg-gray-300 rounded-sm'>
                </div>
            </div>
            <CommentForm />
            <CommentList />
        </div>
    )
}

export default Comments