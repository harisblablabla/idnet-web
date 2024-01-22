import Image from 'next/image'
import Navbar from './components/Navbar/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen flex-col justify-center">
      <Navbar />
      <div className="container mx-auto mb-20">
        <section id='carousel' className="carousel w-full py-5 z-0">
          <div id="slide1" className="carousel-item relative w-full">
            <Image src="/assets/home_cover.jpg" alt={'home cover'} width={1000} height={750} className='w-10/12 rounded-2xl ms-auto h-80v object-cover' />
            <div className="absolute flex right-6 top-1/2">
              <a href="#slide2" className=" btn btn-circle bg-white border-none text-3xl text-primary">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <Image src="/assets/home_cover2.jpg" alt={'home cover 2'} width={1000} height={750} className='w-10/12 rounded-2xl ms-auto h-80v object-cover' />
            <div className="absolute flex right-6 top-1/2">
              <a href="#slide1" className=" btn btn-circle bg-white border-none text-3xl text-primary">❯</a>
            </div>
          </div>
          <div className="absolute top-1/3 bg-white p-10 rounded-2xl w-2/5">
            <h4 className='font-semibold text-4xl mb-5 text-gray-900'>Amplifying your ideas, one connection at a time.</h4>
            <p className='mb-5 text-neutral-700'>From home to digital HQ, <span className='text-secondary font-bold'>IDEANET</span> Empowering Indonesia's digital transformation through neutral ICT infrastructure and innovative solutions.</p>
            <a className="btn btn-primary btn-wide ">Subscribe Now</a>
          </div>
        </section>
      </div>

      {/* why us */}
      <section id='whyus' className='bg-bgc-2'>
        <div className="flex flex-col justify-center items-center">
          <h2 className='text-neutral-700 font-semibold text-center text-2xl w-4/5 lg:w-1/2 pt-10 mb-10'>Choose the right digital tools to thrive, whether you're a personal or a tech-powered enterprise.</h2>
          <div className="sm:flex sm:flex-wrap justify-center container sm:mb-0">
            <div className="bg-white rounded-2xl mx-auto text-center py-10 px-8 w-4/5 sm:w-2/5 mb-10">
              <h2 className='text-primary-700 text-xl font-semibold mb-5'>Solution for retail</h2>
              <Image src={'/assets/solution_retail.jpeg'} alt={'solution for retail'} width={500} height={500} className='object-cover mx-auto w-1/2 mb-5' />
              <p className='mb-8 text-neutral-700'> Elevate your everyday. Experience seamless internet, captivating TV, and clear phone calls with Ideanet personal solutions.</p>
              <a href='#' className='text-primary font-bold'>More info ❯</a>
            </div>
            <div className="bg-white rounded-2xl mx-auto text-center py-10 px-8 w-4/5 sm:w-2/5 mb-10">
              <h2 className='text-primary-700 text-xl font-semibold mb-5'>Solution for enterprise</h2>
              <Image src={'/assets/solution_enterprise.jpeg'} alt={'solution for enterprise'} width={500} height={500} className='object-cover w-1/2  mx-auto mb-5' />
              <p className='mb-8 text-neutral-700'> In today's fast-paced world, your IT infrastructure needs to be agile and secure. Ideanet enterprise solutions provide the foundation for success.</p>
              <a href='#' className='text-primary font-bold'>More info ❯</a>
            </div>
          </div>

          <h1 className='font-semibold text-4xl mb-5 text-center text-neutral-700'>Connect to what ignites you.</h1>
          <h2 className='text-neutral-700 font-medium text-center text-xl w-4/5 lg:w-1/2 mb-20'> Ideanet isn't just internet, it's a commitment to enriching your digital life. Choose Ideanet and experience the difference.</h2>

          <div className="sm:flex sm:flex-wrap justify-center container sm:mb-0 gap-6">
            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20">
              <div className="w-full px-7 absolute -top-1/4 left-0">
              <Image src={'/assets/solution_retail.jpeg'} alt={'solution for retail'} width={100} height={100} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
              </div>
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Save money</h6>
              <p className=' text-neutral-700 text-sm'> Affordable maintenance keeps your budget balanced, freeing up resources for growth.</p>
            </div>

            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20">
              <div className="w-full px-7 absolute -top-1/4 left-0">
              <Image src={'/assets/solution_retail.jpeg'} alt={'solution for retail'} width={100} height={100} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
              </div>
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Boost productivity</h6>
              <p className=' text-neutral-700 text-sm'> Our solutions streamline operations, helping you work smarter and achieve more.</p>
            </div>

            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20">
              <div className="w-full px-7 absolute -top-1/4 left-0">
              <Image src={'/assets/solution_retail.jpeg'} alt={'solution for retail'} width={100} height={100} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
              </div>
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Security you can trust</h6>
              <p className=' text-neutral-700 text-sm'> Flexible, scalable technology enhances security and protects your valuable data.</p>
            </div>

            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20">
              <div className="w-full px-7 absolute -top-1/4 left-0">
              <Image src={'/assets/solution_retail.jpeg'} alt={'solution for retail'} width={100} height={100} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
              </div>
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Focus on your business</h6>
              <p className=' text-neutral-700 text-sm'> We handle IT headaches, so you can focus on what you do best – run and grow your enterprise.</p>
            </div>

            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20">
              <div className="w-full px-7 absolute -top-1/4 left-0">
              <Image src={'/assets/solution_retail.jpeg'} alt={'solution for retail'} width={100} height={100} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
              </div>
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Never unplug</h6>
              <p className=' text-neutral-700 text-sm'> 24/7 customer support ensures you're always connected and never left in the dark.</p>
            </div>

            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20">
              <div className="w-full px-7 absolute -top-1/4 left-0">
              <Image src={'/assets/solution_retail.jpeg'} alt={'solution for retail'} width={100} height={100} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
              </div>
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Experience the speed</h6>
              <p className=' text-neutral-700 text-sm'> Blazing-fast internet puts you ahead of the game and streamlines every digital task.</p>
            </div>

            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20">
              <div className="w-full px-7 absolute -top-1/4 left-0">
              <Image src={'/assets/solution_retail.jpeg'} alt={'solution for retail'} width={100} height={100} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
              </div>
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>Experts at your side</h6>
              <p className=' text-neutral-700 text-sm'> Our seasoned team brings experience and expertise to guide you every step of the way.</p>
            </div>

            

          </div>
        </div>
      </section>
    </main>
    
  )
}
