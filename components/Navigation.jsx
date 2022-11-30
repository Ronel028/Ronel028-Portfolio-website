import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Navigation = () =>{

    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-[0.1875rem] w-[100%] my-[0.1875rem] rounded-full bg-light-dark transition ease transform duration-300`;

    const menu = () =>{
        setIsOpen(!isOpen)
    }
    const home = () =>{
        setIsOpen(false)
    }
    const openMenu = isOpen ? "mt-[4.125rem]" : "mt-[-200%]"

    return (
        <>
            <motion.nav 
                initial='hidden'
                animate='show'
                variants={{
                    hidden: {opacity: 0},
                    show: {opacity: 1, delay: .3}
                }}
                className='bg-gray py-5 fixed top-0 left-0 right-0 z-[999] drop-shadow-lg'
            >
                <div className='container mx-auto flex items-center justify-between'>
                    <Link href='/' onClick={home}>
                        <h3 className='text-xl text-light-dark'>
                            R<span className='text-light-blue'>.</span>FLORIDA
                        </h3> 
                    </Link>
                    <ul className='hidden md:flex items-center gap-9'>
                        <li>
                            <Link 
                                href="#about"
                                className="font-semibold relative text-lg
                                            after:content-[''] after:0 after:h-1 after:bg-light-blue
                                            after:absolute after:bottom-[-1.4375rem] after:left-[50%] after:translate-x-[-50%]
                                            hover:after:w-[70%] hover:after:animate-hoverLinks"
                            >
                                About 
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="#projects"
                                className="font-semibold relative text-lg
                                            after:content-[''] after:0 after:h-1 after:bg-light-blue
                                            after:absolute after:bottom-[-1.4375rem] after:left-[50%] after:translate-x-[-50%]
                                            hover:after:w-[70%] hover:after:animate-hoverLinks"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="#contact"
                                className="font-semibold relative text-lg
                                            after:content-[''] after:0 after:h-1 after:bg-light-blue
                                            after:absolute after:bottom-[-1.4375rem] after:left-[50%] after:translate-x-[-50%]
                                            hover:after:w-[70%] hover:after:animate-hoverLinks"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <ul className='hidden md:flex items-center gap-4'>
                        <li>
                            <Link 
                                href="https://github.com/Ronel028"
                                className='text-2xl hover:text-light-blue transition-colors ease-in-out duration-300'
                            >
                                <AiFillGithub />
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="https://www.linkedin.com/in/ronelflorida/"
                                className='text-2xl hover:text-light-blue transition-colors ease-in-out duration-300'
                            >
                                <AiFillLinkedin />
                            </Link>
                        </li>
                    </ul>
                    {/* hamburger menu */}
                    <button
                        className="flex flex-col h-auto w-[1.625rem] justify-center items-center outline-none md:hidden"
                        onClick={menu}
                    >
                        <div
                            className={`${genericHamburgerLine} ${
                                isOpen
                                    ? "rotate-45 translate-y-2 opacity-50"
                                    : "opacity-1"
                            }`}
                        />
                        <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-1 group-hover:opacity-100"}`} />
                        <div
                            className={`${genericHamburgerLine} ${
                                isOpen
                                    ? "-rotate-45 -translate-y-[0.625rem] opacity-50"
                                    : "opacity-1"
                            }`}
                        />
                    </button>
                </div>
            </motion.nav>
            {/* menu mobile */}
            <div className={`fixed top-0 left-0 right-0 bg-light-blue py-11 px-5 z-30 ${openMenu} md:hidden transition-all ease-in-out duration-300`}>
                <ul className='flex items-center flex-col gap-5 text-gray pb-8'>
                    <li>
                        <Link 
                            href="#about"
                            className='font-semibold text-xl'
                            onClick={menu}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="#projects"
                            className='font-semibold text-xl'
                            onClick={menu}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="#contact"
                            className='font-semibold text-xl'
                            onClick={menu}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <ul className='flex items-center justify-center text-gray pt-8 border-t-[0.0625rem] border-gray gap-5'>
                    <li>
                        <Link 
                            href="https://github.com/Ronel028"
                            className='text-3xl'
                        >
                            <AiFillGithub />
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="https://www.linkedin.com/in/ronelflorida/"
                            className='text-3xl'
                        >
                            <AiFillLinkedin />
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navigation