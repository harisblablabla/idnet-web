import Image from 'next/image'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Link from 'next/link'
import Carousel from './components/Carousel/Carousel'
import { carClient } from './components/Carousel/data'
import { useTranslations } from 'next-intl';

export default function Home() {

  const carousel = carClient
  const t = useTranslations('Index')

  return (
    <main className="min-h-screen flex-col justify-center">
      <Navbar />

      {/* mobile */}
      <div id='mobile' className="relative flex justify-center md:hidden">
        <Image src="/assets/home_cover.jpg" alt={'home cover'} width={1000} height={750} className='w-full ms-auto h-screen object-cover' />
        <div className="absolute mx-auto top-1/4 bg-white p-10 w-4/5 rounded-2xl">
          <h4 className='font-semibold text-3xl mb-5 text-gray-900'>{t('title')}</h4>
          <p className='mb-5 text-neutral-700'>{t.rich('subtitle', {
            ideanet: (children) => <span className="text-secondary font-bold">{children}</span>
          })}
          </p>
          <Link href={'https://daftar.ideanet.net.id/'} className="btn btn-primary w-full">{t('button1')}</Link>
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
          <div className="absolute md:top-1/2 transform -translate-y-1/2 left-0 right-0 md:w-[28rem] lg:w-[32rem] bg-white p-10 rounded-2xl">
            <h4 className='font-semibold text-4xl mb-5 text-gray-900'>{t('title')}</h4>
            <p className='mb-5 text-neutral-700'>{t.rich('subtitle', {
              ideanet: (children) => <span className="text-secondary font-bold">{children}</span>
            })}
            </p>
            <Link href={'https://daftar.ideanet.net.id/'} className="btn btn-primary btn-wide ">{t('button1')}</Link>
          </div>
        </section>
      </div>

      {/* why us */}
      <section id='whyus' className='bg-bgc-2'>
        <div className="flex flex-col justify-center items-center">
          <h2 className='text-neutral-700 font-semibold text-center text-2xl w-4/5 lg:w-1/2 pt-10 mb-10'>{t('segmented_title')}</h2>
          <div className="sm:flex sm:flex-wrap justify-center container sm:mb-0">
            <div className="bg-white rounded-2xl mx-auto text-center py-10 px-8 w-4/5 sm:w-2/5 mb-10">
              <h2 className='text-primary-700 text-xl font-semibold mb-5'>{t('segmented_retail')}</h2>
              <Image src={'/assets/solution_retail.webp'} alt={'solution for retail'} width={500} height={500} className='object-cover mx-auto w-1/2 mb-5' />
              <p className='mb-8 text-neutral-700'> {t('segmented_retail_desc')}</p>
              <Link href={"/retail/internet"} className='text-primary font-bold'>{t('button2')} ❯</Link>
            </div>
            <div className="bg-white rounded-2xl mx-auto text-center py-10 px-8 w-4/5 sm:w-2/5 mb-10">
              <h2 className='text-primary-700 text-xl font-semibold mb-5'>{t('segmented_enterprise')}</h2>
              <Image src={'/assets/solution_enterprise.webp'} alt={'solution for enterprise'} width={500} height={500} className='object-cover w-1/2  mx-auto mb-5' />
              <p className='mb-8 text-neutral-700'> {t('segmented_enterprise_desc')}</p>
              <Link href={"/enterprise/internet"} className='text-primary font-bold'>{t('button2')} ❯</Link>
            </div>
          </div>

          <h1 className='font-semibold text-4xl mb-5 text-center text-neutral-700'>{t('why_title')}</h1>
          <h2 className='text-neutral-700 font-medium text-center text-xl w-4/5 lg:w-1/2 mb-20'> {t('why_subtitle')}</h2>

          <div className="sm:flex sm:flex-wrap justify-center container sm:mb-0 gap-6">
            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20">
              <div className="w-full px-7 absolute -top-1/3 left-0">
                <Image src={'/assets/home_why1.webp'} alt={'save money'} width={120} height={120} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
              </div>
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>{t('why_1')}</h6>
              <p className=' text-neutral-700 text-sm'> {t('why_1_desc')}</p>
            </div>

            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20">
              <div className="w-full px-7 absolute -top-1/3 left-0">
                <Image src={'/assets/home_why2.webp'} alt={'boost productivity'} width={120} height={120} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
              </div>
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>{t('why_2')}</h6>
              <p className=' text-neutral-700 text-sm'> {t('why_2_desc')}</p>
            </div>

            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20">
              <div className="w-full px-7 absolute -top-1/3 left-0">
                <Image src={'/assets/home_why3.webp'} alt={'security you can trust'} width={120} height={120} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
              </div>
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>{t('why_3')}</h6>
              <p className=' text-neutral-700 text-sm'>{t('why_3_desc')}</p>
            </div>

            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20">
              <div className="w-full px-7 absolute -top-1/3 left-0">
                <Image src={'/assets/home_why4.webp'} alt={'solution for retail'} width={120} height={120} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
              </div>
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>{t('why_4')}</h6>
              <p className=' text-neutral-700 text-sm'>{t('why_4_desc')}</p>
            </div>

            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20">
              <div className="w-full px-7 absolute -top-1/4 left-0">
                <Image src={'/assets/home_why5.webp'} alt={'always connected'} width={100} height={100} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
              </div>
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>{t('why_5')}</h6>
              <p className=' text-neutral-700 text-sm'>{t('why_5_desc')}</p>
            </div>

            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20">
              <div className="w-full px-7 absolute -top-1/4 left-0">
                <Image src={'/assets/home_why6.webp'} alt={'experience the speed'} width={100} height={100} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
              </div>
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>{t('why_6')}</h6>
              <p className=' text-neutral-700 text-sm'>{t('why_6_desc')}</p>
            </div>

            <div className="relative bg-white rounded-2xl mx-auto text-center pb-10 pt-16 px-8 w-4/5 sm:w-64 md:w-72 mb-20">
              <div className="w-full px-7 absolute -top-1/4 left-0">
                <Image src={'/assets/home_why7.webp'} alt={'experts at your side'} width={100} height={100} className=' -top-1/2 left-1/2  object-cover mx-auto  mb-5 rounded-2xl' />
              </div>
              <h6 className='text-gray-900 font-bold text-sm mb-2.5'>{t('why_7')}</h6>
              <p className=' text-neutral-700 text-sm'>{t('why_7_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <section id='our product'>
        <div className="flex flex-col justify-center items-center">
          <h2 className='text-neutral-700 font-semibold text-center text-2xl w-4/5 lg:w-1/2 pt-10 mb-10'>{t('product_title')}</h2>
          <div className="container md:w-4/5">

            <h2 className='text-primary-700 text-xl font-semibold mb-5 text-center sm:text-left'>{t('product_1')}</h2>
            <div className="md:grid md:grid-cols-2 mb-5">
              <Image src={'/assets/home_product1.webp'} alt={'solution for retail'} width={500} height={600} className='object-cover mx-auto w-3/4 mb-5 sm:order-2' />
              <div id='cardproduct' className="bg-white rounded-2xl py-10 px-8 w-4/5 sm:w-full md:mt-10 mb-10 sm:order-1 mx-auto shadow-[0_0_10px_3px_rgba(229,229,229)] h-min">
                <p className='mb-5 text-neutral-700 text-sm'>{t.rich('product_1_point1', { b: (children) => <span className="font-bold">{children}</span> })}</p>
                <p className='mb-5 text-neutral-700 text-sm'>{t.rich('product_1_point2', { b: (children) => <span className="font-bold">{children}</span> })}</p>
                <p className='mb-5 text-neutral-700 text-sm'>{t.rich('product_1_point3', { b: (children) => <span className="font-bold">{children}</span> })}</p>
                <p className='mb-5 text-neutral-700 text-sm'>{t.rich('product_1_point4', { b: (children) => <span className="font-bold">{children}</span> })}</p>
                <Link href={"/retail/internet"} className="btn btn-outline btn-secondary btn-sm">{t('button2')}</Link>
              </div>
            </div>

            <h2 className='text-primary-700 text-xl font-semibold mb-5 text-center sm:text-left'>{t('product_2')}</h2>
            <div className="md:grid md:grid-cols-2 mb-5">
              <Image src={'/assets/home_product2.webp'} alt={'solution for retail'} width={1000} height={1000} className='object-cover mx-auto w-3/4 mb-5' />
              <div id='cardproduct' className="items-center bg-white rounded-2xl py-10 px-8 w-4/5 sm:w-full md:mt-10 mb-10 mx-auto shadow-[0_0_10px_3px_rgba(229,229,229)] h-min">
                <p className='mb-5 text-neutral-700 text-sm'>{t.rich('product_2_point1', { b: (children) => <span className="font-bold">{children}</span> })}</p>
                <p className='mb-5 text-neutral-700 text-sm'>{t.rich('product_2_point2', { b: (children) => <span className="font-bold">{children}</span> })}</p>
                <p className='mb-5 text-neutral-700 text-sm'>{t.rich('product_2_point3', { b: (children) => <span className="font-bold">{children}</span> })}</p>
                <Link href={"/solution/iaas"} className="btn btn-outline btn-secondary btn-sm">{t('button2')}</Link>
              </div>
            </div>

            <h2 className='text-primary-700 text-xl font-semibold mb-5 text-center sm:text-left'>{t('product_3')}</h2>
            <div className="md:grid md:grid-cols-2 mb-5">
              <Image src={'/assets/home_product3.webp'} alt={'solution for retail'} width={500} height={600} className='object-cover mx-auto w-3/4 mb-5 sm:order-2' />
              <div id='cardproduct' className="bg-white rounded-2xl py-10 px-8 w-4/5 sm:w-full md:mt-10 mb-10 sm:order-1 mx-auto shadow-[0_0_10px_3px_rgba(229,229,229)] h-min">
                <p className='mb-5 text-neutral-700 text-sm'>{t.rich('product_3_point1', { b: (children) => <span className="font-bold">{children}</span> })}</p>
                <p className='mb-5 text-neutral-700 text-sm'>{t.rich('product_3_point2', { b: (children) => <span className="font-bold">{children}</span> })}</p>
                <p className='mb-5 text-neutral-700 text-sm'>{t.rich('product_3_point3', { b: (children) => <span className="font-bold">{children}</span> })}</p>
                <Link href={"/enterprise/connectivity"} className="btn btn-outline btn-secondary btn-sm">{t('button2')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='partner'>
        <div className="flex flex-col justify-center items-center mb-10">
          <h2 className='text-neutral-700 font-semibold text-center text-2xl w-4/5 lg:w-1/2 mb-10'>{t('client')}</h2>
          <div className="container sm:w-4/5">
            <Carousel items={carousel} />
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col justify-center items-center mb-10 mx-auto">
          <h2 className='text-primary-800 font-semibold text-3xl sm:text-4xl text-center w-4/5 mb-10'>{t('closing_statement')}</h2>
          <Link href={'https://daftar.ideanet.net.id/'} className="btn btn-primary btn-wide ">{t('button1')}</Link>

        </div>
      </section>

      <Footer />
    </main>

  )
}
