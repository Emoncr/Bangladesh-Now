import ReservationForm from '@/Components/DashboardComponents/ReservationForm'
import OurLocation from '@/Components/OurLocation';

const Reservation = () => {
    return (
        <div className='py-5 lg:py-10 px-5 pb-16'>
            <div className="heading_container">
                <p className='tiny_heading'>---Reservation---</p>
                <div className='divider_1'></div>
                <h2 className='heading '>BOOK A TABLE</h2>
                <div className='divider_2 '></div>
            </div>
            <div className='mt-5 sm:mt-6 md:mt-10 lg:mt-16'>
                <ReservationForm />
            </div>
            <div className='mt-10 md:mt-16'>
                <OurLocation />
            </div>
        </div>
    )
}

export default Reservation