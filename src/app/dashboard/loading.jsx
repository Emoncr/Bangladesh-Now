
const loading = () => {
    return (
        <section className='h-screen flex items-center justify-center bg-white'>
            <div className="container ">
                <div className="img-container flex items-center justify-center">
                    <img src="/images/loading.png" alt="Not Found Images" />
                </div>
                <div className='mt-5 flex items-center justify-center'>
                    <p className='text-sm md:text-xl lg:text-2xl  text-brandDark font-inter font-semibold text-center'>Loading...</p>
                </div>
            </div>
        </section>
    )
}

export default loading 