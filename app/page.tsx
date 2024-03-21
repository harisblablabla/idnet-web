import Image from 'next/image'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Link from 'next/link'
import Carousel from './components/Carousel/Carousel'
import { carClient } from './components/Carousel/data'

export default function Home() {

  const carousel = carClient

  return (
    <main className="min-h-screen flex-col justify-center">
      <Navbar />

      {/* mobile */}
      <div id='mobile' className="relative flex justify-center md:hidden">
        <Image src="/assets/home_cover.jpg" alt={'home cover'} width={1000} height={750} className='w-full ms-auto h-screen object-cover' />
        <div className="absolute mx-auto top-1/4 bg-white p-10 w-4/5 rounded-2xl">
          <h4 className='font-semibold text-3xl mb-5 text-gray-900'>Connecting your ideas, one connection at a time.</h4>
          <p className='mb-5 text-neutral-700'>From home to digital HQ, <span className='text-secondary font-bold'>IDEANET</span> Empowering Indonesia&apos;s digital transformation through neutral ICT infrastructure and innovative solutions.</p>
          <Link href={'https://daftar.ideanet.net.id/'} className="btn btn-primary w-full">Subscribe Now</Link>
        </div>
      </div>

      {/* large screen */}
      <div className="sm:container sm:mb-20 sm:mx-auto">
        <section id='carousel' className="carousel w-full py-5 z-0 hidden md:flex">
          <div id="slide1" className="carousel-item relative w-full">
            <Image src="/assets/home_cover.jpg" alt={'home cover'} width={1000} height={750} className='w-4/5 rounded-2xl ms-auto h-80v object-cover' />
            <div className="absolute flex right-6 top-[45%]">
              <a href="#slide2" className=" btn btn-circle bg-white border-none text-3xl text-primary">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <Image src="/assets/home_cover2.jpg" alt={'home cover 2'} width={1000} height={750} className='w-4/5 rounded-2xl ms-auto h-80v object-cover' />
            <div className="absolute flex right-6 top-[45%]">
              <a href="#slide1" className=" btn btn-circle bg-white border-none text-3xl text-primary">❯</a>
            </div>
          </div>
          <div className="absolute md:top-1/4 lg:top-[30%] md:w-1/2 xl:w-4/12 bg-white p-10 rounded-2xl">
            <h4 className='font-semibold text-4xl mb-5 text-gray-900'>Connecting your ideas, one connection at a time.</h4>
            <p className='mb-5 text-neutral-700'>From home to digital HQ, <span className='text-secondary font-bold'>IDEANET</span> Empowering Indonesia&apos;s digital transformation through neutral ICT infrastructure and innovative solutions.</p>
            <Link href={'https://daftar.ideanet.net.id/'} className="btn btn-primary btn-wide ">Subscribe Now</Link>
          </div>
        </section>
      </div>

      {/* why us */}
      <section id='whyus' className='bg-bgc-2'>
        <div className="flex flex-col justify-center items-center">
          <h2 className='text-neutral-700 font-semibold text-center text-2xl w-4/5 lg:w-1/2 pt-10 mb-10'>Choose the right digital tools to thrive, whether you&apos;re a personal or a tech-powered enterprise.</h2>
          <div className="sm:flex sm:flex-wrap justify-center container sm:mb-0">
            <div className="bg-white rounded-2xl mx-auto text-center py-10 px-8 w-4/5 sm:w-2/5 mb-10">
              <h2 className='text-primary-700 text-xl font-semibold mb-5'>Solution for retail</h2>
              <Image src={'/assets/solution_retail.webp'} alt={'solution for retail'} width={500} height={500} className='object-cover mx-auto w-1/2 mb-5' />
              <p className='mb-8 text-neutral-700'> Elevate your everyday. Experience seamless internet, captivating TV, and clear phone calls with Ideanet personal solutions.</p>
              <Link href={"/retail/internet"} className='text-primary font-bold'>More info ❯</Link>
            </div>
            <div className="bg-white rounded-2xl mx-auto text-center py-10 px-8 w-4/5 sm:w-2/5 mb-10">
              <h2 className='text-primary-700 text-xl font-semibold mb-5'>Solution for enterprise</h2>
              <Image src={'/assets/solution_enterprise.webp'} alt={'solution for enterprise'} width={500} height={500} className='object-cover w-1/2  mx-auto mb-5' />
              <p className='mb-8 text-neutral-700'> In today&apos;s fast-paced world, your IT infrastructure needs to be agile and secure. Ideanet enterprise solutions provide the foundation for success.</p>
              <Link href={"/enterprise/internet"} className='text-primary font-bold'>More info ❯</Link>
            </div>
          </div>

          <h1 className='font-semibold text-4xl mb-5 text-center text-neutral-700'>Connect to what ignites you.</h1>
          <h2 className='text-neutral-700 font-medium text-center text-xl w-4/5 lg:w-1/2 mb-20'> Ideanet isn&apos;t just internet, it&apos;s a commitment to enriching your digital life. Choose Ideanet and experience the difference.</h2>

          <div className="sm:flex sm:flex-wrap justify-center container sm:mb-0 gap-6">
            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20">
              <div className="w-full px-7 absolute -top-1/3 left-0">
                <Image src={'/assets/home_why1.webp'} alt={'save money'} width={120} height={120} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
              </div>
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Save money</h6>
              <p className=' text-neutral-700 text-sm'> Affordable maintenance keeps your budget balanced, freeing up resources for growth.</p>
            </div>

            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20">
              <div className="w-full px-7 absolute -top-1/3 left-0">
                <Image src={'/assets/home_why2.webp'} alt={'boost productivity'} width={120} height={120} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
              </div>
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Boost productivity</h6>
              <p className=' text-neutral-700 text-sm'> Our solutions streamline operations, helping you work smarter and achieve more.</p>
            </div>

            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20">
              <div className="w-full px-7 absolute -top-1/3 left-0">
                <Image src={'/assets/home_why3.webp'} alt={'security you can trust'} width={120} height={120} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
              </div>
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Security you can trust</h6>
              <p className=' text-neutral-700 text-sm'> Flexible, scalable technology enhances security and protects your valuable data.</p>
            </div>

            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20">
              <div className="w-full px-7 absolute -top-1/3 left-0">
                <Image src={'/assets/home_why4.webp'} alt={'solution for retail'} width={120} height={120} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
              </div>
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Focus on your business</h6>
              <p className=' text-neutral-700 text-sm'> We handle IT headaches, so you can focus on what you do best – run and grow your enterprise.</p>
            </div>

            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20">
              <div className="w-full px-7 absolute -top-1/4 left-0">
                <Image src={'/assets/home_why5.webp'} alt={'always connected'} width={100} height={100} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
              </div>
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Always connected</h6>
              <p className=' text-neutral-700 text-sm'> 24/7 customer support ensures you&apos;re always connected and never left in the dark.</p>
            </div>

            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20">
              <div className="w-full px-7 absolute -top-1/4 left-0">
                <Image src={'/assets/home_why6.webp'} alt={'experience the speed'} width={100} height={100} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
              </div>
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Experience the speed</h6>
              <p className=' text-neutral-700 text-sm'> Blazing-fast internet puts you ahead of the game and streamlines every digital task.</p>
            </div>

            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20">
              <div className="w-full px-7 absolute -top-1/4 left-0">
                <Image src={'/assets/home_why7.webp'} alt={'experts at your side'} width={100} height={100} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
              </div>
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Experts at your side</h6>
              <p className=' text-neutral-700 text-sm'> Our seasoned team brings experience and expertise to guide you every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      <section id='our product'>
        <div className="flex flex-col justify-center items-center">
          <h2 className='text-neutral-700 font-semibold text-center text-2xl w-4/5 lg:w-1/2 pt-10 mb-10'>No boundaries, endless possibilities. Explore the Ideanet cutting-edge solutions.</h2>
          <div className="container md:w-4/5">

            <h2 className='text-primary-700 text-xl font-semibold mb-5 text-center sm:text-left'>Internet Service</h2>
            <div className="md:grid md:grid-cols-2 mb-5">
              <Image src={'/assets/home_product1.webp'} alt={'solution for retail'} width={500} height={600} className='object-cover mx-auto w-3/4 mb-5 sm:order-2' />
              <div id='cardproduct' className="bg-white rounded-2xl py-10 px-8 w-4/5 sm:w-full md:mt-10 mb-10 sm:order-1 mx-auto shadow-[0_0_10px_3px_rgba(229,229,229)] h-min">
                <p className='mb-5 text-neutral-700 text-sm'><b>1. Home or office,</b> From casual browsing to powering business empires, our internet plans ignite your digital world.</p>
                <p className='mb-5 text-neutral-700 text-sm'><b>2. Reliability,</b> Stay connected and productive, backed by our robust network and dedicated support.</p>
                <p className='mb-5 text-neutral-700 text-sm'><b>3. Simple and secure,</b> Enjoy effortless setup, intuitive tools, and advanced security features for peace of mind.</p>
                <p className='mb-5 text-neutral-700 text-sm'><b>4. Scalability,</b> Grow your connection as you grow, with flexible plans that adapt to your ever-changing needs.</p>
                <Link href={"/retail/internet"} className="btn btn-outline btn-secondary btn-sm">More info</Link>
              </div>
            </div>

            <h2 className='text-primary-700 text-xl font-semibold mb-5 text-center sm:text-left'>Ideanet as a Service(IaaS)</h2>
            <div className="md:grid md:grid-cols-2 mb-5">
              <Image src={'/assets/home_product2.webp'} alt={'solution for retail'} width={1000} height={1000} className='object-cover mx-auto w-3/4 mb-5' />
              <div id='cardproduct' className="items-center bg-white rounded-2xl py-10 px-8 w-4/5 sm:w-full md:mt-10 mb-10 mx-auto shadow-[0_0_10px_3px_rgba(229,229,229)] h-min">
                <p className='mb-5 text-neutral-700 text-sm'><b>1. Smart Parking,</b>  Optimize parking management with real-time data insights, automated guidance, and seamless payment integrations.</p>
                <p className='mb-5 text-neutral-700 text-sm'><b>2. Smart Cluster,</b> Build secure and scalable computing clusters for high-performance applications like data analytics, and scientific research.</p>
                <p className='mb-5 text-neutral-700 text-sm'><b>3. Smart Healthcare,</b> Revolutionize healthcare delivery with connected devices, remote monitoring, and advanced data analysis tools.</p>
                <Link href={"/solution/iaas"} className="btn btn-outline btn-secondary btn-sm">More info</Link>
              </div>
            </div>

            <h2 className='text-primary-700 text-xl font-semibold mb-5 text-center sm:text-left'>SDWAN Connectivity</h2>
            <div className="md:grid md:grid-cols-2 mb-5">
              <Image src={'/assets/home_product3.webp'} alt={'solution for retail'} width={500} height={600} className='object-cover mx-auto w-3/4 mb-5 sm:order-2' />
              <div id='cardproduct' className="bg-white rounded-2xl py-10 px-8 w-4/5 sm:w-full md:mt-10 mb-10 sm:order-1 mx-auto shadow-[0_0_10px_3px_rgba(229,229,229)] h-min">
                <p className='mb-5 text-neutral-700 text-sm'><b>1. Easy Deployment,</b> Get up and running quickly with minimal disruption to your business.</p>
                <p className='mb-5 text-neutral-700 text-sm'><b>2. 24/7 Support,</b> Our team is here to support you, ensuring your network runs smoothly around the clock.</p>
                <p className='mb-5 text-neutral-700 text-sm'><b>3. Customizable Options,</b> Tailor your SD-WAN solution to fit your specific needs and objectives.</p>
                <Link href={"/enterprise/connectivity"} className="btn btn-outline btn-secondary btn-sm">More info</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='partner'>
        <div className="flex flex-col justify-center items-center mb-10">
          <h2 className='text-neutral-700 font-semibold text-center text-2xl w-4/5 lg:w-1/2 mb-10'>A diverse range of partners, From individual to giants enterprise, we empower companies across every field.</h2>
          <div className="container sm:w-4/5">
            <Carousel items={carousel} />
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col justify-center items-center mb-10 mx-auto">
          <h2 className='text-primary-800 font-semibold text-3xl sm:text-4xl text-center w-4/5 mb-10'>Ready to experience the future of connection?</h2>
          <Link href={'https://daftar.ideanet.net.id/'} className="btn btn-primary btn-wide ">Subscribe Now</Link>

        </div>
      </section>

      <Footer />
    </main>

  )
}
