'use client'

import React, { useState } from 'react'
import Logo from './Logo'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {

    const [productMenuOpen, setProductMenuOpen] = useState(false);
    const [openAbout, setOpenAbout] = useState(false)
    const [openSolution, setOpenSolution] = useState(false)
    const [openLang, setOpenLang] = useState(false)
    const [lang, setLang] = useState('EN')

    const toggleMenu = (id: string) => {

        const isProduct = id === 'product';
        const isAbout = id === 'about';
        const isSolution = id === 'solution';
        const isLang = id === 'lang';
      
        setProductMenuOpen(current => isProduct ? !current : false);
        setOpenAbout(current => isAbout ? !current : false);
        setOpenSolution(current => isSolution ? !current : false);
        setOpenLang(current => isLang ? !current : false);
    }

    return (
        <div className="navbar bg-white ">

            {/* mobile */}
            <div className="navbar-start lg:hidden">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] mt-3 p-5 shadow-[0_0_10px_3px_rgba(229,229,229)] bg-base-200 w-72 rounded-box text-neutral-700">
                        <li className='pb-2.5'>
                            <details>
                                <summary className='pb-2.5'>Product</summary>
                                <ul>
                                    <li className='pb-2.5'>
                                        <details open>
                                            <summary className='font-semibold'>Retail</summary>
                                            <ul>
                                                <li><Link href={"/retail/internet"}>Retail Internet</Link></li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li>
                                        <details open>
                                            <summary className='font-semibold'>Enterprise</summary>
                                            <ul>
                                                <li><Link href={'/enterprise/internet'} >Enterprise Internet</Link></li>
                                                <li><Link href={'/enterprise/connectivity'}>Connectivity</Link></li>
                                                {/* <li><Link href={'/enterprise/connectivity'} className='pointer-events-none text-slate-300'>Connectivity</Link></li> */}
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li className='pb-2.5'>
                            <details>
                                <summary>Solutions</summary>
                                <ul>
                                    <li><Link href={'/solution/iaas'}>Ideanet as a Services(IaaS)</Link></li>
                                    <li><Link href={'http://nms.infrastruktur-digital.id/graph_view.php'}>Traffic Monitoring (MRTG)</Link></li>
                                    <li><Link href={'http://speedtest.infrastruktur-digital.id/'}>Speed Test</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li className='pb-2.5'>
                            <details>
                                <summary>About</summary>
                                <ul>
                                <li><Link href={'/about'}>About Us</Link></li>
                                <li><Link className='pointer-events-none text-slate-300' href={'#'}>Careers</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li className=''><Link href={'https://daftar.ideanet.net.id/helpdesk/ticket-form'}>Contact</Link></li>
                        <div className="divider w-full mb-2.5"></div>
                        <li className='pb-2.5'>
                            <details>
                                <summary>{lang}</summary>
                                <ul>
                                <li><button onClick={ () => setLang('ID')}>ID (Bahasa Indonesia)</button></li>
                                <li><button onClick={ () => setLang('EN')}>EN (English - US)</button></li></ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end lg:hidden">
                <Logo width={100} height={70} />
            </div>

            {/* web */}
            <div className="navbar-start hidden lg:flex pl-10">
                <Logo width={150} height={100} />
                <ul className="menu menu-horizontal px-1 text-slate-600 font-medium z-50 ">
                    <li className='relative'>
                        <button onMouseOver={() => toggleMenu('product')} onClick={() => toggleMenu('product')}>Product {productMenuOpen ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />} </button>
                        {productMenuOpen && (
                            <ul className="absolute top-12 -left-5 menu menu-horizontal min-w-max bg-base-200 w-56 rounded-box shadow-[0_0_10px_3px_rgba(229,229,229)]">
                                <li>
                                    <h2 className="menu-title text-gray-900">Enterprise Product</h2>
                                    <ul>
                                        <li><Link href={'/enterprise/internet'} >Enterprise Internet</Link></li>
                                        <li><Link href={'/enterprise/connectivity'}>Connectivity</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <h2 className="menu-title text-gray-900">Retail Product</h2>
                                    <ul>
                                        <li><Link href={"/retail/internet"}>Retail Internet</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        )}

                    </li>
                    <li className='relative'>
                    <button onMouseOver={() => toggleMenu('solution')} onClick={() => toggleMenu('solution')}>Solutions {openSolution ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}</button>
                        {openSolution && (
                            <ul className="absolute top-12 -left-5 menu bg-base-200 w-64 rounded-box shadow-[0_0_10px_3px_rgba(229,229,229)]">
                                <li><Link href={"/solution/iaas"} >Ideanet as a Services (IaaS)</Link></li>
                                <li><Link href={'http://nms.infrastruktur-digital.id/graph_view.php'} >Traffic Monitoring (MRTG)</Link></li>
                                <li><Link href={'http://speedtest.infrastruktur-digital.id/'} >Speed Test</Link></li>
                            </ul>
                        )}
                    </li>
                    <li className='relative'>
                        <button onMouseOver={() => toggleMenu('about')} onClick={() => toggleMenu('about')}>About {openAbout ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}</button>
                        {openAbout && (
                            <ul className="absolute top-12 -left-5 menu bg-base-200 w-48 rounded-box shadow-[0_0_10px_3px_rgba(229,229,229)]">
                                <li><Link href={"/about"}>About Us</Link></li>
                                <li><Link href={'/'} className='pointer-events-none text-slate-300'>Careers</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link href={'https://daftar.ideanet.net.id/helpdesk/ticket-form'}>Contact</Link></li>
                </ul>
            </div>

            <div className="navbar-end hidden lg:flex pr-16">
                <ul className="menu menu-horizontal text-slate-600 font-medium px-3 z-50">
                    <li className='relative'>
                        <button onMouseOver={() => toggleMenu('lang')} onClick={() => toggleMenu('lang')}>{lang} {openLang ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}</button>
                        {openLang && (
                            <ul className="absolute top-12 -left-2 menu w-56 bg-base-200 rounded-box shadow-[0_0_10px_3px_rgba(229,229,229)]">
                                <li><button onClick={() => setLang('ID')}>ID (Bahasa Indonesia)</button></li>
                                <li><button onClick={() => setLang('EN')}>EN (English - US)</button></li>
                            </ul>
                        )}
                    </li>
                </ul>
                <Link href={"https://daftar.ideanet.net.id/"} className="btn btn-primary">Subscribe Now</Link>
            </div>
        </div>
    )
}

export default Navbar