import Footer from '@/app/components/Footer/Footer'
import Navbar from '@/app/components/Navbar/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <main className="min-h-screen flex-col justify-center">
            <Navbar />
            <div className="sm:container sm:mx-auto">
                <div className="flex flex-col py-10">
                    <h1 className='font-semibold text-6xl mb-5 text-center mx-auto w-4/5 sm:w-full text-neutral-700'>Enterprise Internet</h1>
                    <p className='mb-5 text-neutral-700 text-center mx-auto w-4/5 sm:w-3/5'>Airborne gives you your own dedicated internet lane, like a VIP pass on the highway. No more traffic jams or slowdowns, just smooth sailing for streaming, gaming, and everything in between.
                        Fiber optic or wireless, it&apos;s all yours, for one flat monthly price. No surprises, just pure internet bliss.</p>
                    <Link href={'https://daftar.ideanet.net.id/'} className="btn btn-primary btn-wide text-center mx-auto mb-5">Subscribe Now</Link>
                    <Image src="/assets/retail_internet_cover2.png" alt={'home cover 2'} width={400} height={600} className='object-cover md:hidden mx-auto w-4/5' />
                    <div className="hidden md:flex md:flex-row md:flex-1 mx-auto gap-7">
                        <Image src="/assets/retail_internet_cover.png" alt={'home cover'} width={600} height={400} className='object-scale-down' />
                        <Image src="/assets/retail_internet_cover2.png" alt={'home cover 2'} width={400} height={600} className='object-cover' />
                    </div>
                </div>

                

            
            </div>

            <Footer />
        </main>
    )
}

export default page