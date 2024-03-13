import Footer from '@/app/components/Footer/Footer'
import TabInternet from '@/app/components/InternetPage/TabInternet'
import Navbar from '@/app/components/Navbar/Navbar'
import { faHeadset, faRocket, faShieldHalved, faSignal } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <main className="min-h-screen flex-col justify-center">
            <Navbar />
            <div className="sm:container sm:mx-auto">
                <div className="flex flex-col py-10">
                    <h1 className='font-semibold text-6xl mb-5 text-center mx-auto w-4/5 sm:w-full text-neutral-700'>Enterprise Internet</h1>
                    <p className='mb-5 text-neutral-700 text-center mx-auto w-4/5 sm:w-3/5'>Ideanet offer high-speed Enterprise Internet services designed to meet the unique needs of businesses like yours. Our service ensures your business stays connected, with the speed and reliability you need to operate efficiently and effectively.

                    </p>
                    <Link href={'https://daftar.ideanet.net.id/'} className="btn btn-primary btn-wide text-center mx-auto mb-5">Subscribe Now</Link>
                </div>

            </div>

            <section className='bg-gradient-to-br from-secondary-200 via-primary-200 to-primary-600'>
                <div className="flex flex-wrap container mx-auto justify-center gap-2 w-4/5">
                    <div className="bg-white rounded-2xl mx-auto text-center py-5 px-8 w-4/5 sm:w-64 md:w-72 my-5 sm:my-10 shadow">
                        <h6 className='text-neutral-700 text-base font-regular mb-2.5'>Dedicated</h6>
                        <p className=' text-primary-800 text-4xl font-semibold'> 1 : 1</p>
                    </div>
                    <div className="bg-white rounded-2xl mx-auto text-center py-5 px-8 w-4/5 sm:w-64 md:w-72 mb-5 sm:my-10 shadow">
                        <h6 className='text-neutral-700 text-base font-regular mb-2.5'>Fiber Optic</h6>
                        <p className=' text-primary-800 text-4xl font-semibold'> 100% </p>
                    </div>
                    <div className="bg-white rounded-2xl mx-auto text-center py-5 px-8 w-4/5 sm:w-64 md:w-72 mb-5 sm:my-10 shadow">
                        <h6 className='text-neutral-700 text-base font-regular mb-2.5'>Customer Support</h6>
                        <p className=' text-primary-800 text-4xl font-semibold'> 24 Hour</p>
                    </div>
                    <div className="bg-white rounded-2xl mx-auto text-center py-5 px-8 w-4/5 sm:w-64 md:w-72 mb-5 sm:my-10 shadow">
                        <h6 className='text-neutral-700 text-base font-regular mb-2.5'>Unlimited</h6>
                        <p className=' text-primary-800 text-4xl font-semibold'> 100% </p>
                    </div>
                    <div className="bg-white rounded-2xl mx-auto text-center py-10 px-8 w-4/5 sm:w-64 md:w-72 mb-5 sm:my-10 shadow">
                        <p className=' text-primary-800 text-4xl font-semibold'> IP Public</p>
                    </div>
                </div>
            </section>

            <section id='benefits' className='bg-bgc-2 pt-20'>
                <div className="container mx-auto flex flex-col items-center">
                    <h2 className='text-neutral-700 text-2xl font-semibold mb-5 text-center sm:text-left'>Benefits of Ideanet Enterprise</h2>
                   
                   <div className="flex flex-wrap gap-2">
                        <div className="mx-auto text-center pb-10 pt-5 px-8 w-4/5 sm:w-72 md:w-96 mb-10">
                            <FontAwesomeIcon size='4x' icon={faRocket} style={{ color: "163364" }} className='pr-4 py-2.5' />
                            <h6 className='text-gray-900 font-bold text-sm mb-2.5'>High-Speed Connectivity</h6>
                            <p className=' text-neutral-700 text-sm'> Our Enterprise Internet provides lightning-fast speeds, enabling seamless video conferencing, quick file uploads, and uninterrupted online operations.</p>
                        </div>
                        <div className="mx-auto text-center pb-10 pt-5 px-8 w-4/5 sm:w-72 md:w-96 mb-10">
                            <FontAwesomeIcon size='4x' icon={faSignal} style={{ color: "163364" }} className='pr-4 py-2.5' />
                            <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Stability Internet</h6>
                            <p className=' text-neutral-700 text-sm'>Our network is designed with redundancy and resilience at its core, ensuring your
                             connection stays up and running when you need it most.</p>
                        </div>
                        <div className="mx-auto text-center pb-10 pt-5 px-8 w-4/5 sm:w-72 md:w-96 mb-10">
                            <FontAwesomeIcon size='4x' icon={faHeadset} style={{ color: "163364" }} className='pr-4 py-2.5' />
                            <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Dedicated Support</h6>
                            <p className=' text-neutral-700 text-sm'>Our team of experts is always here to help, providing 24/7 support to ensure any 
                            issues are resolved quickly, minimizing disruption to your business.</p>
                        </div>
                        <div className="mx-auto text-center pb-10 pt-5 px-8 w-4/5 sm:w-72 md:w-96 mb-10">
                            <FontAwesomeIcon size='4x' icon={faShieldHalved} style={{ color: "163364" }} className='pr-4 py-2.5' />
                            <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Secure Connection</h6>
                            <p className=' text-neutral-700 text-sm'>Our Enterprise Internet comes with built-in security measures to protect your 
                            business from online threats and ensure your data remains safe.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id='enterprise-package'>
                <div className="flex flex-col mx-auto justify-center items-center">
                    <h2 className='text-neutral-700 font-semibold text-center text-2xl w-4/5 lg:w-1/2 pt-10 mb-10'>Choose your Plan According to Your Needs.</h2>
                    <TabInternet segmentasi={'enterprise'} />
                </div>
            </section>


            <Footer />
        </main>
    )
}

export default page