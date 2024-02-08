import React from 'react'

const DashboardLayout = () => {
    return (
        <section className='min-h-screen h-full'>
            <div className="grid grid-cols-12 ">
                <div className="sidebar_container py-7 md:py-12 bg-brand col-span-2 sm:col-span-1 lg:col-span-3 xl:col-span-2  min-h-screen h-full ">
                    <div className="logo_container px-2 sm:px-4 lg:px-8 ">
                        <img src="/Logos/logo black.png" alt="Logo" />
                    </div>
                    <div className="links_container mt-10 lg:mt-16">
                        {/* <UserDashboardNav /> */}
                    </div>
                </div>
                <div className="col-span-10 sm:col-span-11 lg:col-span-9 xl:col-span-10 ">
                    page
                </div>
            </div>
        </section>
    )
}

export default DashboardLayout