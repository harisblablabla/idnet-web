import Navbar from '@/app/components/Navbar/Navbar'
import TabInternet from '@/app/components/InternetPage/TabInternet'
import { faCalendarPlus, faChartColumn, faEthernet, faHeadset, faInfinity, faMoneyBillWave, faPercent, faRocket, faUser, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import { testimony } from './data'
import Footer from '@/app/components/Footer/Footer'
import Link from 'next/link'

export default function page() {

    return (
        <main className="min-h-screen flex-col justify-center">
            <Navbar />
            <div className="sm:container sm:mx-auto">
                <div className="flex flex-col py-10">
                    <h1 className='font-semibold text-6xl mb-5 text-center mx-auto w-4/5 sm:w-full text-neutral-700'>Retail Internet</h1>
                    <p className='mb-5 text-neutral-700 text-center mx-auto w-4/5 sm:w-3/5'>Airborne gives you your own dedicated internet lane, like a VIP pass on the highway. No more traffic jams or slowdowns, just smooth sailing for streaming, gaming, and everything in between.
                        Fiber optic or wireless, it&apos;s all yours, for one flat monthly price. No surprises, just pure internet bliss.</p>
                    <Link href={'https://daftar.ideanet.net.id/'} className="btn btn-primary btn-wide text-center mx-auto mb-5">Subscribe Now</Link>
                    <Image src="/assets/retail_internet_cover2.png" alt={'home cover 2'} width={400} height={600} className='object-cover md:hidden mx-auto w-4/5' />
                    <div className="hidden md:flex md:flex-row md:flex-1 mx-auto gap-7">
                        <Image src="/assets/retail_internet_cover.png" alt={'home cover'} width={600} height={400} className='object-scale-down' />
                        <Image src="/assets/retail_internet_cover2.png" alt={'home cover 2'} width={400} height={600} className='object-cover' />
                    </div>
                </div>

                <section id='advantages&TermsCondition'>
                    <div className="flex flex-col justify-center items-center pt-10">
                        <div className="container md:w-4/5">
                            <h2 className='text-neutral-700 text-2xl font-semibold mb-5 text-center sm:text-left'>Benefits of Airborne</h2>
                            <div className="md:grid md:grid-cols-2 mb-5">
                                <Image src={'/assets/retail_advantages.webp'} alt={'solution for retail'} width={500} height={600} className='object-cover mx-auto w-3/4 mb-5 sm:order-2' />
                                <div id='advantages' className="py-10 w-4/5 sm:w-full mb-10 sm:order-1 mx-auto h-min">
                                    <FontAwesomeIcon size='2x' icon={faInfinity} style={{ color: "163364" }} className='float-left pr-5 py-2' />
                                    <p className='mb-5 text-neutral-700 text-sm'><b>Unlimited Quota:</b> Airborne lets you stream, game, and connect without ever hitting a data wall. It&apos;s a digital buffet with no limits, just pure online freedom.</p>
                                    <FontAwesomeIcon size='2x' icon={faRocket} style={{ color: "163364" }} className='float-left pr-7 py-2' />
                                    <p className='mb-5 text-neutral-700 text-sm'><b>Fast & Stable Internet:</b>  Ditch the lag and buffer wars. Airborne&apos;s internet rockets you past slow connections, ensuring every download happens at warp speed.</p>
                                    <FontAwesomeIcon size='2x' icon={faWifi} style={{ color: "163364" }} className='float-left pr-5 py-2' />
                                    <p className='mb-5 text-neutral-700 text-sm'><b>Wired or wireless, you choose:</b>  Whether you crave the fiber-optic backbone or the wireless revolution, Airborne lets you connect on your terms. It&apos;s the internet, your way.</p>
                                    <FontAwesomeIcon size='2x' icon={faChartColumn} style={{ color: "163364" }} className='float-left pr-7 py-2' />
                                    <p className='mb-5 text-neutral-700 text-sm'><b>MRTG Monitoring:</b> With MRTG monitoring, you&apos;re always in the pilot&apos;s seat, seeing your internet performance unfold in real-time. No black boxes, just clear skies ahead.</p>
                                    <FontAwesomeIcon size='2x' icon={faHeadset} style={{ color: "163364" }} className='float-left pr-8 py-2' />
                                    <p className='mb-5 text-neutral-700 text-sm'><b> NOC Support: </b>Take flight with peace of mind, knowing Airborne&apos;s NOC team has your back 24/7. Any turbulence? They&apos;ll navigate you through it smoothly.</p>
                                </div>
                            </div>

                            <h2 className='text-neutral-700 text-2xl font-semibold mb-5 text-center sm:text-left'>Terms and Conditions</h2>
                            <div className="md:grid md:grid-cols-2 mb-5">
                                <Image src={'/assets/retail_advantages2.webp'} alt={'solution for retail'} width={500} height={600} className='object-cover mx-auto w-3/4 mb-5' />
                                <div id='advantages' className="py-10 w-4/5 sm:w-full mb-10 mx-auto h-min">
                                    <FontAwesomeIcon size='2x' icon={faMoneyBillWave} style={{ color: "163364" }} className='float-left pr-4 py-2' />
                                    <p className='mb-5 text-neutral-700 text-sm'><b>Our prices not include installation fee: </b>Our quoted prices cover your monthly service and a basic router loan, offering predictable costs for smooth sailing.</p>
                                    <FontAwesomeIcon size='2x' icon={faPercent} style={{ color: "163364" }} className='float-left pr-7 py-2' />
                                    <p className='mb-5 text-neutral-700 text-sm'><b>The prices do not include 11% tax: </b>Please remember that a 11% government tax applies to your chosen plan.</p>
                                    <FontAwesomeIcon size='2x' icon={faCalendarPlus} style={{ color: "163364" }} className='float-left pr-6 py-2' />
                                    <p className='mb-5 text-neutral-700 text-sm'><b>Choose your duration contract: </b>While our standard agreement is for a year, we offer flexible options. If you&apos;d like a shorter commitment, contact us to discuss monthly trial.</p>
                                    <FontAwesomeIcon size='2x' icon={faEthernet} style={{ color: "163364" }} className='float-left pr-5 py-2' />
                                    <p className='mb-5 text-neutral-700 text-sm'><b>Price do not include additional tools: </b>Your basic needs are covered with our included router, but additional equipment options are available.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='tabpackage'>
                    <div className="flex flex-col mx-auto justify-center items-center">
                        <h2 className='text-neutral-700 font-semibold text-center text-2xl w-4/5 lg:w-1/2 pt-10 mb-10'>Choose your Plan According to Your Needs.</h2>
                        <TabInternet segmentasi={'retail'} />
                    </div>
                </section>

                <section id='reviewClient'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className="container w-4/5">
                            <h2 className='text-neutral-700 text-2xl font-semibold mb-5 text-center sm:text-left'>Hear from our client</h2>
                            <div className="card md:flex-row bg-white shadow-[0_0_10px_3px_rgba(229,229,229)] py-10 px-12 mb-10">
                                <div className="left-side w-full md:w-1/4">
                                    <Image src="https://source.unsplash.com/random?people" width={500} height={500} className="h-24 w-24 rounded-full object-cover mb-5" alt="our client" />
                                    <h2 className='text-neutral-700 font-semibold text-xl mb-2.5'> {testimony[0].name}</h2>
                                    <p className='text-neutral-700 text-sm mb-5 sm:mb-0'>{testimony[0].customer}</p>
                                </div>
                                <div className="right-side w-full md:w-3/4 flex items-center">
                                    <p className='text-neutral-700 text-sm'>{testimony[0].value} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    )
}