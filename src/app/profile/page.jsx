import PlainLayout from '@/components/PlainLayout'
import ProfileUpdateFrom from '@/components/Site Forms/ProfileUpdateFrom'



const Porfile = async () => {



    return (
        <PlainLayout>
            <section className=" bg-offWhite_bg py-10 lg:py-20">
                <div className="container">
                    <div className=" dark:bg-gray-700 ">
                        <div className="max-w-screen-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                            <div className="border-b px-6 pb-6">
                                <div className="text-left my-4">
                                    <div className='flex items-center justify-start'>
                                        <img className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800  my-4" src="https://randomuser.me/api/portraits/women/21.jpg" alt="user profile" />
                                    </div>
                                    <div className="py-2">
                                        <ProfileUpdateFrom />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PlainLayout>
    )
}

export default Porfile