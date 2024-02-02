
import React from 'react'
import Logo from './Logo'

const Navbar = () => {
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
                <ul className="menu menu-horizontal px-1 text-slate-600 font-medium">
                    <li>
                        <details>
                            <summary>Product</summary>
                            <ul className="p-2">
                                <li><a>Enterprise</a></li>
                                <li><a>Retail</a></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>About</summary>
                            <ul className="p-2 w-max">
                                <li><a>About Us</a></li>
                                <li><a>Career</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Contact</a></li>
                </ul>
            </div>

            <div className="navbar-end hidden lg:flex pr-16">
                <ul className="menu menu-horizontal text-slate-600 font-medium px-3">
                    <li>
                        <details>
                            <summary>EN</summary>
                            <ul className="p-2">
                                <li><a>EN</a></li>
                                <li><a>ID</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
                <a className="btn btn-primary">Subscribe Now</a>
            </div>
        </div>
    )
}

export default Navbar