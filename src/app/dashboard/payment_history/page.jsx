import PaymentTable from '@/Components/DashboardComponents/PaymentTable'
import React from 'react'

const paymentHistory = () => {
    return (
        <div className='py-5 lg:py-10 px-5 pb-16 bg-[#F6F6F6] min-h-screen h-full'>
            <div className="heading_container">
                <p className='tiny_heading'>---At a Glance!---</p>
                <div className='divider_1'></div>
                <h2 className='heading '>PAYMENT HISTORY</h2>
                <div className='divider_2 '></div>
            </div>
            <div className='max-w-[992px] mx-auto bg-white p-5 md:p-8 lg:p-12 mt-5 sm:mt-8 lg:mt-16  '>
                <h3 className='text-brandDark text-base sm:text-xl lg:text-3xl font-bold font-cinzel'>Total Payments</h3>
                <div className='mt-6'>
                    <PaymentTable />
                </div>
            </div>
        </div>
    )
}

export default paymentHistory