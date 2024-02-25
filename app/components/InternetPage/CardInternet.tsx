
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'

interface Tab {
  tab1: boolean;
  tab2: boolean;
  tab3: boolean;
  paket: string;
  value: string;
}

const CardInternet = ({ tab1, tab2, tab3, paket, value }: Tab) => {

  return (
    <div className={``}>
      {/* INTERNET ONLY */}
      {tab1 && (
        <div className="bg-white border-2 border-primary-800 rounded-lg py-10 px-8 w-80 md:w-64 mb-10">
          <h2 className='text-gray-900 text-lg font-medium mb-5'>{paket}</h2>
          <h1 className='text-secondary text-4xl font-medium mb-5'>{value}</h1>

          <div className="divider w-full mb-5"></div>
          <p className='text-gray-900 font-semibold text-sm mb-2.5'>Benefits</p>

          <div className='mb-2.5'>
            <FontAwesomeIcon icon={faRocket} style={{ color: "163364" }} className='pr-2.5 ' />
            <p className='text-neutral-700 font-normal text-sm inline mb-2.5'>Internet Unlimited</p>
          </div>

          <div className='mb-2.5'>
            <FontAwesomeIcon icon={faRocket} style={{ color: "163364" }} className='pr-2.5 ' />
            <p className='text-neutral-700 font-normal text-sm inline mb-2.5'>Dedicated Bandwidth</p>
          </div>

          <div className='mb-2.5'>
            <FontAwesomeIcon icon={faRocket} style={{ color: "163364" }} className='pr-2.5' />
            <p className='text-neutral-700 font-normal text-sm inline mb-2.5'>100% Safety</p>
          </div>

          <div className='mb-2.5'>
            <FontAwesomeIcon icon={faRocket} style={{ color: "163364" }} className='pr-2.5' />
            <p className='text-neutral-700 font-normal text-sm inline mb-2.5'>SLA 99%</p>
          </div>

          <div className='mb-2.5'>
            <FontAwesomeIcon icon={faRocket} style={{ color: "163364" }} className='pr-2.5' />
            <p className='text-neutral-700 font-normal text-sm inline '>Ultra Speed</p>
          </div>

          <div className="divider w-full mb-5"></div>

          <Link href={'https://daftar.ideanet.net.id/'} className="btn btn-primary w-full ">Call our Sales</Link>
        </div>
      )}

{/* INTERNET + TV */}
      {tab2 && (
        <div className="bg-white border-2 border-primary-800 rounded-lg py-10 px-8 w-80 md:w-64 mb-10">
          <h2 className='text-gray-900 text-lg font-medium mb-5'>{paket}</h2>
          <h1 className='text-secondary text-4xl font-medium mb-5'>{value}</h1>

          <div className="divider w-full mb-5"></div>
          <p className='text-gray-900 font-semibold text-sm mb-2.5'>Benefits</p>

          <div className='mb-2.5'>
            <FontAwesomeIcon icon={faRocket} style={{ color: "163364" }} className='pr-2.5 ' />
            <p className='text-neutral-700 font-normal text-sm inline mb-2.5'>Internet Unlimited</p>
          </div>

          <div className='mb-2.5'>
            <FontAwesomeIcon icon={faRocket} style={{ color: "163364" }} className='pr-2.5 ' />
            <p className='text-neutral-700 font-normal text-sm inline mb-2.5'>Dedicated BRO</p>
          </div>

          <div className='mb-2.5'>
            <FontAwesomeIcon icon={faRocket} style={{ color: "163364" }} className='pr-2.5' />
            <p className='text-neutral-700 font-normal text-sm inline mb-2.5'>100% Safety</p>
          </div>

          <div className='mb-2.5'>
            <FontAwesomeIcon icon={faRocket} style={{ color: "163364" }} className='pr-2.5' />
            <p className='text-neutral-700 font-normal text-sm inline mb-2.5'>SLA 99%</p>
          </div>

          <div className='mb-2.5'>
            <FontAwesomeIcon icon={faRocket} style={{ color: "163364" }} className='pr-2.5' />
            <p className='text-neutral-700 font-normal text-sm inline '>Ultra Speed</p>
          </div>

          <div className="divider w-full mb-5"></div>

          <Link href={'https://daftar.ideanet.net.id/'} className="btn btn-primary w-full ">Call our Sales</Link>
        </div>
      )}

{/* INTERNET + TV + PHONE */}
      {tab3 && (
        <div className="bg-white border-2 border-primary-800 rounded-lg py-10 px-8 w-80 md:w-64 mb-10">
          <h2 className='text-gray-900 text-lg font-medium mb-5'>{paket}</h2>
          <h1 className='text-secondary text-4xl font-medium mb-5'>{value}</h1>

          <div className="divider w-full mb-5"></div>
          <p className='text-gray-900 font-semibold text-sm mb-2.5'>Benefits</p>

          <div className='mb-2.5'>
            <FontAwesomeIcon icon={faRocket} style={{ color: "163364" }} className='pr-2.5 ' />
            <p className='text-neutral-700 font-normal text-sm inline mb-2.5'>Internet Unlimited</p>
          </div>

          <div className='mb-2.5'>
            <FontAwesomeIcon icon={faRocket} style={{ color: "163364" }} className='pr-2.5 ' />
            <p className='text-neutral-700 font-normal text-sm inline mb-2.5'>Dedicated Bandwidth</p>
          </div>

          <div className='mb-2.5'>
            <FontAwesomeIcon icon={faRocket} style={{ color: "163364" }} className='pr-2.5' />
            <p className='text-neutral-700 font-normal text-sm inline mb-2.5'>100% Safety</p>
          </div>

          <div className='mb-2.5'>
            <FontAwesomeIcon icon={faRocket} style={{ color: "163364" }} className='pr-2.5' />
            <p className='text-neutral-700 font-normal text-sm inline mb-2.5'>SLA 99%</p>
          </div>

          <div className='mb-2.5'>
            <FontAwesomeIcon icon={faRocket} style={{ color: "163364" }} className='pr-2.5' />
            <p className='text-neutral-700 font-normal text-sm inline '>Ultra Speed</p>
          </div>

          <div className="divider w-full mb-5"></div>

          <Link href={'https://daftar.ideanet.net.id/'} className="btn btn-primary w-full ">Call our Sales</Link>
        </div>
      )}

    </div>




  )
}

export default CardInternet