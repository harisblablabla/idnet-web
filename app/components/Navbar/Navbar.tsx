'use client'

import React, { useState } from 'react'
import Logo from './Logo'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {

    const [productMenuOpen, setProductMenuOpen] = useState(false);
    const [openAbout, setOpenAbout] = useState(false)
    const [openLang, setOpenLang] = useState(false)
    const [lang, setLang] = useState('EN')

    const toggleMenu = (id: string) => {
        if (id === 'product') {
          setProductMenuOpen(prevOpen => !prevOpen);
          setOpenAbout(false)
          setOpenLang(false)
        } else if(id === 'about') {
            setOpenAbout(prev => !prev)
            setProductMenuOpen(false)
            setOpenLang(false)
        } else {
            setOpenLang(prev => !prev)
            setProductMenuOpen(false)
            setOpenAbout(false)
        }
      }

    return (
        <div className="navbar bg-white">

            {/* mobile */}
            <div className="navbar-start lg:hidden">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-slate-600 font-medium">
                        <li><a>Product</a>
                            <ul className="p-2">
                                <li><a>Enterprise</a></li>
                                <li><a>Retail</a></li>
                            </ul>
                        </li>
                        <li><a>About</a>
                            <ul className="p-2">
                                <li><a>Enterprise</a></li>
                                <li><a>Retail</a></li>
                            </ul>
                        </li>
                        <li><a>Contact</a></li>
                        <li><a>EN</a>
                            <ul className="p-2">
                                <li><a>ID</a></li>
                                <li><a>EN</a></li>
                            </ul>
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
                                        <li><a>Enterprise Internet</a></li>
                                        <li><a>Ideanet as a Service</a></li>
                                        <li><a>Connectivity</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <h2 className="menu-title text-gray-900">Retail Product</h2>
                                    <ul>
                                        <li><a>Retail Internet</a></li>
                                    </ul>
                                </li>
                            </ul>
                        )}

                    </li>
                    <li className='relative'>
                        <button onMouseOver={() => toggleMenu('about')} onClick={() => toggleMenu('about')}>About {openAbout ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}</button>
                        {openAbout && (
                            <ul className="absolute top-12 -left-5 menu bg-base-200 w-48 rounded-box shadow-[0_0_10px_3px_rgba(229,229,229)]">
                                <li><Link href={"/about"}>About Us</Link></li>
                                <li><Link href={'/'}>Careers</Link></li>
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
                            <ul className="absolute top-12 -left-2 menu bg-base-200 rounded-box shadow-[0_0_10px_3px_rgba(229,229,229)]">
                                <li><button onClick={() => setLang('ID')}>ID</button></li>
                                <li><button onClick={() => setLang('EN')}>EN</button></li>
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