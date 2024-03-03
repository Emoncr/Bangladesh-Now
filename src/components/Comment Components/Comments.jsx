
import { checkLogin } from '@/utils/checkAuth';
import CommentForm from '../Site Forms/CommentForm'
import CommentList from './CommentList'


const Comments = ({ postID }) => {
    const isLogin = checkLogin();
    return (
        <div>
            <div className='flex items-center justify-start gap-2 '>
                <p className='text-lg md:text-xl text-heading_color font-bold font-inter'>
                    Comments
                </p>
                <div className='h-[2px] w-full bg-gray-300 rounded-sm'>
                </div>
            </div>
            <CommentForm comentInfo={{ postID, isLogin }} />
            <CommentList postID={postID} />
        </div>
    )
}

export default Comments