import Footer from '@/app/[locale]/components/Footer/Footer'
import Navbar from '@/app/[locale]/components/Navbar/Navbar'
import { faArrowsToCircle, faChartColumn, faGaugeHigh, faMoneyBillWave, faShieldHalved, faSignal5, faTowerBroadcast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className="min-h-screen flex-col justify-center">
      <Navbar />

      <section id='titlePage' className='mb-10'>
        <div className="sm:container sm:mx-auto">
          <div className="flex flex-col py-10">
            <h1 className='font-semibold text-6xl mb-5 text-center mx-auto w-4/5 sm:w-full text-neutral-700'>SD-WAN Connectivity</h1>
            <p className='mb-5 text-neutral-700 text-center mx-auto w-4/5 sm:w-3/5'>In the fast-evolving digital landscape, your enterprise needs a network that&apos;s not just robust, but also intelligent, flexible, and capable of adapting to your ever-changing needs.
              IdeaNet&apos;s SD-WAN solution empowers your enterprise with the agility, security, and efficiency required to thrive in today&apos;s competitive environment.
            </p>
            <Link href={'https://daftar.ideanet.net.id/helpdesk/ticket-form'} className="btn btn-primary btn-wide text-center mx-auto mb-5">Call our Sales</Link>
            <Image src="/assets/sdwan_cover.jpg" alt={'sdwan cover'} width={1000} height={300} className='object-cover mx-auto w-full h-96 sm:rounded-2xl' />
          </div>
        </div>
      </section>

      <section id='whysdwan' className='bg-bgc-2 pt-20 mb-20'>
        <div className="container mx-auto flex flex-col items-center">
          <h2 className='text-neutral-700 text-2xl font-semibold mb-5 text-center sm:text-left'>Why Choose Our SD-WAN Solution?</h2>

          <div className="flex flex-wrap gap-2">
            <div className="mx-auto text-center pb-10 pt-5 px-8 w-4/5 sm:w-72 md:w-96 mb-10">
              <FontAwesomeIcon size='4x' icon={faGaugeHigh} style={{ color: "163364" }} className='pr-4 py-2.5' />
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Cost-Effective Bandwidth</h6>
              <p className=' text-neutral-700 text-sm'> Enjoy higher bandwidth at reduced costs, enabling faster and more efficient data transmission across your organization without breaking the bank.</p>
            </div>
            <div className="mx-auto text-center pb-10 pt-5 px-8 w-4/5 sm:w-72 md:w-96 mb-10">
              <FontAwesomeIcon size='4x' icon={faArrowsToCircle} style={{ color: "163364" }} className='pr-4 py-2.5' />
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Unified Network Management</h6>
              <p className=' text-neutral-700 text-sm'>Simplify your network operations with centralized management, allowing seamless control and coordination across all branch networks from a single point.</p>
            </div>
            <div className="mx-auto text-center pb-10 pt-5 px-8 w-4/5 sm:w-72 md:w-96 mb-10">
              <FontAwesomeIcon size='4x' icon={faChartColumn} style={{ color: "163364" }} className='pr-4 py-2.5' />
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Transparent Network Insights</h6>
              <p className=' text-neutral-700 text-sm'>Gain comprehensive visibility into your network’s performance and usage, ensuring you have all the information you need to make informed decisions and optimizations.</p>
            </div>
            <div className="mx-auto text-center pb-10 pt-5 px-8 w-4/5 sm:w-72 md:w-96 mb-10">
              <FontAwesomeIcon size='4x' icon={faTowerBroadcast} style={{ color: "163364" }} className='pr-4 py-2.5' />
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Flexible Connectivity Choices</h6>
              <p className=' text-neutral-700 text-sm'>Choose the best connection types and providers for your needs, thanks to the flexibility to select from a wide range of ISPs and NAPs,
                tailoring your network architecture to suit your specific requirements.</p>
            </div>
          </div>
        </div>
      </section>

      <section id='benefits' className='bg-white'>
        <div className="container mx-auto flex flex-col items-center">
          <h2 className='text-neutral-700 text-2xl font-semibold mb-5 text-center sm:text-left'>Benefits Our SD-WAN Solution</h2>
          <div className="md:grid md:grid-cols-2 mb-5">
            <Image src={'/assets/sdwan_benefits.webp'} alt={'solution for retail'} width={500} height={600} className='object-cover mx-auto w-3/4 mb-5 sm:order-2' />
            <div id='benefits' className="py-10 w-4/5 mb-10 sm:order-1 mx-auto h-min">
              <FontAwesomeIcon size='2x' icon={faShieldHalved} style={{ color: "163364" }} className='float-left pr-5 py-2' />
              <p className='mb-5 text-neutral-700 text-sm'><b>Increase Network Reliability & Security,</b> reduce down time & lift up security protection</p>
              <FontAwesomeIcon size='2x' icon={faMoneyBillWave} style={{ color: "163364" }} className='float-left pr-5 py-2' />
              <p className='mb-5 text-neutral-700 text-sm'><b>Reduce operational cost & complexity,</b>  Reduce operational cost & complexity, centralized policy management for application & Network intelligent</p>
              <FontAwesomeIcon size='2x' icon={faSignal5} style={{ color: "163364" }} className='float-left pr-5 py-2' />
              <p className='mb-5 text-neutral-700 text-sm'><b>Improve speed & Flexibility,</b>  Improve speed & Flexibility, for application & site deployment</p>
            </div>
          </div>

          <h2 className='text-neutral-700 font-semibold text-center text-xl w-full sm:w-4/5 mb-5'>Discover how IdeaNet can transform your enterprise network. Contact us today to learn more and take the first step towards a smarter, more adaptive network.</h2>
          <Link href={'https://daftar.ideanet.net.id/helpdesk/ticket-form'} className="btn btn-primary btn-wide text-center mx-auto mb-20">Call our Sales</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default page