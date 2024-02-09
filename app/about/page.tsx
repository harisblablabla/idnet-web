import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer/Footer'

const page = () => {
    return (
        <main className="min-h-screen flex-col justify-center">
            <Navbar />
            <div className="sm:container sm:mx-auto">
                <div className="flex flex-col py-10">
                    <h1 className='font-semibold text-6xl mb-5 text-center mx-auto w-4/5 sm:w-full text-neutral-700'>About Us</h1>
                    <p className='mb-5 text-neutral-700 text-center mx-auto w-4/5 sm:w-3/5'>Ideanet specializes in infrastructure development and ICT services, providing the backbone for the digital world. We follow the &quot;Neutral ICT Infrastructure&quot; concept, ensuring fair and open access to essential tech services for everyone.</p>
                    <Image src="/assets/about_cover2.png" alt={'home cover 2'} width={400} height={600} className='object-cover sm:hidden mx-auto w-4/5' />
                    <div className="hidden sm:flex sm:flex-row mx-auto gap-7">
                        <Image src="/assets/about_cover.png" alt={'home cover'} width={600} height={400} className='object-scale-down' />
                        <Image src="/assets/about_cover2.png" alt={'home cover 2'} width={400} height={600} className='object-cover' />
                    </div>

                    <div className="divider divider-neutral my-10 w-4/5 mx-auto"></div>

                    <section id='ict infrastructure'>
                        <h2 className='text-neutral-700 font-semibold w-4/5 text-xl mb-5 mx-auto'>Neutral ICT Infrastructure</h2>
                        <p className=' text-neutral-700 text-base w-4/5 mb-5 mx-auto'> At Ideanet (IDI), we believe everyone deserves equal access to the digital world. That&apos;s why we aren&apos;t just another internet provider; we&apos;re the invisible highway that powers countless connections. Imagine us as the central exchange in a bustling digital city, connecting different providers (telecoms, TV, etc.) to deliver seamless experiences to you.</p>
                        <Image src="/assets/about_neutral_ict.png" alt={'home cover'} width={900} height={400} className='object-cover mx-auto sm:w-3/5 w-4/5 mb-24' />

                        <div className="sm:flex sm:flex-wrap justify-center container sm:mb-0 gap-6">
                            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20 shadow-[0_0_10px_3px_rgba(229,229,229)]">
                                <div className="w-full px-7 absolute -top-1/4 left-0">
                                    <Image src={'/assets/about_card.png'} alt={'solution for retail'} width={100} height={100} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
                                </div>
                                <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Operator Indepedency</h6>
                                <p className=' text-neutral-500 text-sm'> could be used for various services (Internet, IPTV, Telephony).</p>
                            </div>

                            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20 shadow-[0_0_10px_3px_rgba(229,229,229)]">
                                <div className="w-full px-7 absolute -top-1/4 left-0">
                                    <Image src={'/assets/about_card.png'} alt={'solution for retail'} width={100} height={100} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
                                </div>
                                <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Flexible</h6>
                                <p className=' text-neutral-500 text-sm'> in dealing with service changes, service additions and service improvements from each operator.</p>
                            </div>

                            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20 shadow-[0_0_10px_3px_rgba(229,229,229)]">
                                <div className="w-full px-7 absolute -top-1/4 left-0">
                                    <Image src={'/assets/about_card.png'} alt={'solution for retail'} width={100} height={100} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
                                </div>
                                <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Neat and clean</h6>
                                <p className=' text-neutral-500 text-sm'> not overlapping and simple.</p>
                            </div>

                            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20 shadow-[0_0_10px_3px_rgba(229,229,229)]">
                                <div className="w-full px-7 absolute -top-1/4 left-0">
                                    <Image src={'/assets/about_card.png'} alt={'solution for retail'} width={100} height={100} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
                                </div>
                                <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Sophisticated</h6>
                                <p className=' text-neutral-500 text-sm'> accommodate future technological developments.</p>
                            </div>
                        </div>
                    </section>

                    <section id='vision' className='w-4/5 mx-auto'>
                        <h2 className='text-neutral-700 font-semibold w-full text-xl mb-5 mx-auto'>Vision & Mission</h2>
                        <p className=' text-neutral-700 text-base w-full sm:mb-10 mx-auto'> We build the invisible highways of communication, offer them to everyone without bias, keep them running smoothly, and constantly push
                            the boundaries of speed and performance. This is our commitment to a Neutral ICT Infrastructure, where everyone has equal access to the digital world&apos;s potential.</p>
                        <div className="sm:grid sm:grid-cols-2">
                            <Image src="/assets/about_vision.png" alt={'home cover'} width={600} height={400} className='object-contain rounded-2xl sm:order-2 w-full mx-auto my-5' />
                            <div id='visionmissiontext' className='sm:order-1'>
                                <h3 className='text-primary-700 font-semibold w-full text-base mb-5 mx-auto'>Vision</h3>
                                <p className=' text-neutral-700 text-base w-full mb-5 mx-auto'> To be a leading company in delivering neutral infrastructure and Digital Services.</p>
                                <h3 className='text-primary-700 font-semibold w-full text-base mb-5 mx-auto'>Mission</h3>
                                <li className='text-neutral-700 text-base w-full mx-auto leading-loose'>Acquire quality cluster and buildings.</li>
                                <li className='text-neutral-700 text-base w-full mx-auto leading-loose'>Deliver value add service to customer through our excellent service.</li>
                            </div>
                        </div>
                    </section>

                    <div className="divider divider-neutral my-10 w-4/5 mx-auto"></div>

                    <section id='ourteam' className='mb-10'>
                        <h2 className='text-neutral-700 font-semibold text-center text-2xl w-4/5 lg:w-1/2 mx-auto mb-5'>Our Team</h2>
                        <p className=' text-neutral-700 text-center text-base w-4/5 mb-10 mx-auto'> Our team is composed of dedicated professionals with a shared passion for delivering tech services for everyone. We bring together diverse backgrounds and expertise, but we are united by a common goal:
                            to Deliver value add service to customer through our excellent service. We are committed to excellence, innovation, and exceeding client expectations.</p>
                        <div className="flex carousel carousel-end rounded-box mx-auto w-4/5 justify-center">
                            <div className="carousel-item">
                                {/* <Image src="/assets/home_cover.jpg" alt={'home cover'} width={500} height={250} className='object-cover' /> */}
                                <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Pizza" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Pizza" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Pizza" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Pizza" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    )
}

export default page