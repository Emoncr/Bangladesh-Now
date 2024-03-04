
import DltComments from '@/components/Comment Components/DltComments';
import PlainLayout from '@/components/PlainLayout';
import { cookies } from 'next/headers';
import { FaClock } from 'react-icons/fa';


async function getData(cookies) {
    try {

        const res = await fetch(`${process.env.BASE_URL}/api/comments/manage`,
            {
                method: "GET",
                headers: { cookie: cookies },
                cache: "no-store"
            }
        );
        const data = await res.json()
        if (!data.success) {
            console.log("Comments Fetch failed!");
        }
        return data.data

    } catch (error) {
        console.log("Comments Fetch failed!", error);
    }
}

const MyComments = async () => {

    const cookieStore = cookies();
    const comments = await getData(cookieStore);


    return (
        <PlainLayout>
            <section className='py-12 bg-offWhite_bg'>
                <div className="container">
                    <div className="comments_container p-8 bg-white shadow-brandShadow rounded-sm">
                        <p className='font-bold text-heading_color font-inter text-lg sm:text-xl mb-6 md:mb-10'>Your Comments</p>
                        {
                            comments.length !== 0 ? comments.map((comment, index) =>
                                <div key={index} className='mt-4'>
                                    <div className="commnets p-5 border border-gray-300 ">
                                        <p className='text-sm sm:text-lg lg:text-2xl font-medium text-heading_color font-inter'> <strong className='!text-brand font-semibold'>Post Tittle : </strong> {comment.News_list?.title}</p>
                                        <div className='mt-5'>
                                            <p className='text-sm sm:text-lg  font-medium text-des_color font-inter'> <strong className='!text-heading_color  font-semibold '>Comment : </strong> {comment.commentText}</p>
                                        </div>
                                        <div className='flex items-center justify-start mt-3 gap-1'>
                                            <FaClock /><p>Date: {new Date(comment.createdAt).toLocaleDateString()}</p>
                                        </div>

                                        <DltComments info={comment} />
                                    </div>
                                </div>
                            ) :
                                <p>No Comments Yet</p>
                        }
                    </div>
                </div>
            </section>
        </PlainLayout>
    )
}

export default MyComments