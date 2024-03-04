import LoginFrom from '@/components/Site Forms/LoginFrom'
import { checkLogin } from '@/utils/checkAuth';
// import { redirect } from 'next/navigation';



const Login = () => {

    const isLogin = checkLogin();
    // isLogin && redirect("/")


    return (
        <section className='bg-gray-100 min-h-screen'>
            <div className="container">
                <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
                    <div className="relative py-3 sm:max-w-[600px] w-full sm:mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-brand/60 to-brand/90 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                        </div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md mx-auto">
                                <div>
                                    <h3 className="text-2xl font-semibold font-inter">Login Now</h3>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <LoginFrom />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login