import Image from 'next/image'
import Navbar from './components/Navbar/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen flex-col justify-between">
      <Navbar />
      <div className="container mx-auto">
        <section id='carousel' className="carousel w-full py-5 z-0">
          <div id="slide1" className="carousel-item relative w-full">
            <Image src="/assets/home_cover.jpg" alt={'home cover'} width={1000} height={750} className='w-10/12 rounded-2xl ms-auto h-80v object-cover' />
            <div className="absolute flex transform -translate-y-3/4 right-6 top-1/2">
              <a href="#slide2" className=" btn btn-circle bg-white border-none text-3xl text-primary-500">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <Image src="/assets/home_cover2.jpg" alt={'home cover'} width={1000} height={750} className='w-10/12 rounded-2xl ms-auto h-80v object-cover' />
            <div className="absolute flex transform -translate-y-3/4 right-6 top-1/2">
              <a href="#slide1" className=" btn btn-circle bg-white border-none text-3xl text-primary-500">❯</a>
            </div>
          </div>
          <div className="absolute top-1/3 bg-white p-10 rounded-2xl w-2/5">
            <h1 className='font-semibold text-4xl mb-5 text-gray-900'>Amplifying your ideas, one connection at a time.</h1>
            <p className='mb-5 text-neutral-700'>From home to digital HQ, <span className='text-secondary font-bold'>IDEANET</span> Empowering Indonesia's digital transformation through neutral ICT infrastructure and innovative solutions.</p>
            <a className="btn btn-primary btn-wide ">Subscribe Now</a>
          </div>
        </section>
      </div>

      {/* why us */}
    </main>
  )
}
