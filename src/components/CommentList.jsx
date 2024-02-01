


async function getData(id) {
    try {
        const res = await fetch(`${process.env.BASE_URL}/api/comments/news?postID=${id}`,
            { cache: "no-store" }
        );
        const data = await res.json()
        if (!data.success) {
            throw new Error("Commnet Fetch failed!")
        }
        return data.data

    } catch (error) {
        throw new Error("Newslist Fetch failed!", error)
    }
}



const CommentList = async ({ postID }) => {

    const comments = await getData(postID);

    return (
        <>
            {
                comments?.length !== 0 &&
                <div className="antialiased w-full">
                    <h3 className="mb-4 text-lg font-medium text-gray-900">Recent comments</h3>
                    <div className="space-y-4 ">
                        {
                            comments?.length !== 0 && comments?.map((comment, index) =>

                                <div key={index} className="flex">
                                    <div className="flex-shrink-0 mr-3">
                                        <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt="" />
                                    </div>
                                    <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                                        <strong>{comment.Users?.firstName}</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                                        <p className="text-sm font-inter">
                                            {comment.commentText}
                                        </p>
                                    </div>
                                </div>

                            )
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default CommentList