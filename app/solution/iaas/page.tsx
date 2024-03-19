import Footer from '@/app/components/Footer/Footer'
import Navbar from '@/app/components/Navbar/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { productlist } from './data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

interface ProductList {
  source: string;
  alt: string;
  width: number;
  height: number;
  status: boolean;
  nav: string;
  productName: string;
  productDesc: string;
}

const page = () => {

  const product = productlist

  return (
    <main className="min-h-screen flex-col justify-center">
      < Navbar />

      <section id='titlePage'>
        <div className="sm:container sm:mx-auto">
          <div className="flex flex-col py-10">
            <h1 className='font-semibold text-6xl mb-5 text-center mx-auto w-4/5 sm:w-full text-neutral-700'>IdeaNet as a Services (IaaS)</h1>
            <p className='mb-5 text-neutral-700 text-center mx-auto w-4/5 sm:w-3/5'>Empowering Your Enterprise with Tailored Digital Infrastructure</p>
            <Link href={'https://daftar.ideanet.net.id/'} className="btn btn-primary btn-wide text-center mx-auto mb-5">Subscribe Now</Link>
          </div>
        </div>
      </section>

      <section id='header' className='bg-gradient-to-br from-secondary-200 via-secondary to-secondary-800'>
        <div className="flex flex-wrap container mx-auto justify-center gap-2 w-4/5 overflow-y-clip py-10">
          <div className="bg-white rounded-2xl mx-auto text-center py-10 px-8 w-4/5 sm:w-64 md:w-80 my-5 sm:my-10 shadow">
            <p className=' text-primary-800 text-2xl font-medium'> Smart Environtment</p>
          </div>
          <div className="bg-white rounded-2xl mx-auto text-center py-10 px-8 w-4/5 sm:w-64 md:w-80 mb-5 sm:my-10 shadow">
            <p className=' text-primary-800 text-2xl font-medium'> Smart Education</p>
          </div>
          <div className="bg-white rounded-2xl mx-auto text-center py-10 px-8 w-4/5 sm:w-64 md:w-80 mb-5 sm:my-10 shadow">
            <p className=' text-primary-800 text-2xl font-medium'> Smart Cluster / City</p>
          </div>
          <div className="bg-white rounded-2xl mx-auto text-center py-10 px-8 w-4/5 sm:w-64 md:w-80 mb-5 sm:my-10 shadow">
            <p className=' text-primary-800 text-2xl font-medium'> Smart Healthcare</p>
          </div>
          <div className="bg-white rounded-2xl mx-auto text-center py-10 px-8 w-4/5 sm:w-64 md:w-80 mb-5 sm:my-10 shadow">
            <p className=' text-primary-800 text-2xl font-medium'> Smart Building</p>
          </div>
          <div className="bg-white rounded-2xl mx-auto text-center py-10 px-8 w-4/5 sm:w-64 md:w-80 mb-5 sm:my-10 shadow">
            <p className=' text-primary-800 text-2xl font-medium'> Smart Factory</p>
          </div>
        </div>
      </section>

      <section id='productList'>
        <div className="container mx-auto w-4/5">
          <div className="flex flex-col pb-10 pt-20">
            <p className=' text-neutral-700 text-base mb-5'> In a world where digital infrastructure is the backbone of every successful enterprise, IdeaNet as a Service (IaaS) stands out
              by offering bespoke solutions designed to meet the unique needs of your business. Whether you&apos;re running a school, managing a hotel, overseeing government operations, or any other enterprise,
              our suite of digital solutions ensures your operations are efficient, secure, and future-ready.</p>
            <h2 className='text-neutral-700 font-semibold w-full text-xl mb-5'>Products</h2>
            <p className=' text-neutral-700 text-base mb-14'>Each product is designed to integrate seamlessly into your operations, explore to meet your needs </p>

            <div className="flex flex-row flex-wrap gap-10">
              {product.map((value: ProductList, index: number) => (
                <div key={index} className="flex flex-wrap items-start w-full sm:w-64 md:w-80">
                  <div className="shrink-0">
                    <Image src={value.source} alt={value.alt} width={value.width} height={value.height} className='object-cover mb-5 rounded-full inline' />
                  </div>
                  <div className="flex-1 min-w-0 pl-5 items-center">
                    <h6 className='text-neutral-700 text-xl font-semibold align-middle inline'>{value.productName}</h6>
                  </div>
                  <div className="w-full">
                    <p className=' text-neutral-700 text-sm font-normal leading-normal pb-2.5'>{value.productDesc}</p>
                    {value.status ? <Link href={value.nav} className='text-primary text-sm font-medium'>Learn More  <FontAwesomeIcon icon={faChevronRight} style={{ color: "163364" }} className='pl-1 ' /></Link> : <p className='text-transparent'>p</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id='whyChooseUs'>
      <div className="container mx-auto w-4/5">
        
      </div>
      </section>

      <Footer />
    </main>
  )
}

export default page