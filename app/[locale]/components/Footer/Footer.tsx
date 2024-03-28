import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <section id='footer' className='bg-gradient-to-r from-secondary to-primary flex flex-col'>
            <div className='flex flex-col lg:flex-row p-10'>
                <div id='leftside' className="lg:pl-10 w-full lg:w-1/4 order-last lg:order-first mt-2">
                    <p className='text-sm text-white leading-relaxed'>PT. Infrastruktur Digital Indonesia (Ideanet)</p>
                    <p className='text-sm text-white leading-relaxed'>The Convergence Indonesia Lantai 22</p>
                    <p className='text-sm text-white leading-relaxed'>Kawasan Rasuna Epicentrum, Jl. HR. Rasuna Said, Jakarta 12940</p>
                    <p className='text-sm text-white leading-relaxed'>Tel. (021) 150188, WA. (+62) 811-1500-508</p>
                    <p className='text-sm text-white leading-relaxed'>helpdesk@infrastruktur-digital.id</p>
                </div>
                <div id='rightside' className="w-full md:w-full lg:w-3/4 justify-center mb-5 grid grid-cols-2 md:grid-cols-5 md:pl-10">
                    <div className="list-menu mb-5">
                        <h5 className='text-xl font-semibold text-white leading-loose'>Retail</h5>
                        <Link href='/retail/internet' className='text-sm text-white'>Home Internet</Link>
                    </div>

                    <div className="list-menu mb-5">
                        <h5 className='text-xl font-semibold text-white leading-loose'>Enterprise</h5>
                        <Link href='/enterprise/internet' className='text-sm text-white leading-loose block'>Enterprise Internet</Link>
                        <Link href='/enterprise/connectivity' className='text-sm text-white leading-loose block'>Connectivity</Link>
                    </div>

                    <div className="list-menu mb-5">
                        <h5 className='text-xl font-semibold text-white leading-loose'>Solutions</h5>
                        <Link href='/solution/iaas' className='text-sm text-white leading-loose block'>Ideanet as a Service (IaaS)</Link>
                        <Link href='http://nms.infrastruktur-digital.id/graph_view.php' className='text-sm text-white leading-loose block'>Traffic Monitoring (MRTG)</Link>
                        <Link href='http://speedtest.infrastruktur-digital.id/' className='text-sm text-white leading-loose block'>Speed Test</Link>
                    </div>

                    <div className="list-menu mb-5">
                        <h5 className='text-xl font-semibold text-white leading-loose'>Company</h5>
                        <Link href='/about' className='text-sm text-white leading-loose block'>About Us</Link>
                    </div>


                    <div className="list-menu mb-5">
                        <h5 className='text-xl font-semibold text-white leading-loose'>Follow Us</h5>
                        <Link href='https://daftar.ideanet.net.id/helpdesk/ticket-form' className='text-sm text-white leading-loose block'>Contact Us</Link>
                        <Link href='https://www.instagram.com/my.ideanet/' className='text-sm text-white leading-loose'><Image src={'/assets/logo_instagram.png'} alt={'logo instagram'} className='inline-block mr-2' width={20} height={20} />Instagram</Link>
                        {/* <a href='#' className='text-sm text-white leading-loose block'><Image src={'/assets/logo_facebook.png'} alt={'logo fabecook'} className='inline-block mr-2' width={20} height={20} />Facebook</a> */}
                        {/* <a href='#' className='text-sm text-white leading-loose block'><Image src={'/assets/logo_linkedin.png'} alt={'logo linkedin'} className='inline-block mr-2' width={20} height={20} />Linkedin</a> */}
                    </div>
                </div>
            </div>
            <h6 className='mx-auto w-4/5 text-left sm:text-center mb-10 text-white text-sm'>Copyright ©2024 All rights reserved. PT. Infrastruktur Digital Indonesia (Ideanet)</h6>
        </section>

    )
}

export default Footer