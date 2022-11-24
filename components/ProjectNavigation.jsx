import { useState } from 'react'
import Link from 'next/link'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Navigation = () =>{

    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-[0.1875rem] w-[100%] my-[0.1875rem] rounded-full bg-light-dark transition ease transform duration-300`;

    const menu = () =>{
        setIsOpen(!isOpen)
    }

    const openMenu = isOpen ? "mt-[4.125rem]" : "mt-[-200%]"

    return (
        <>
            <nav className='bg-gray py-5 fixed top-0 left-0 right-0 z-[999] drop-shadow-lg'>
                <div className='container mx-auto flex items-center justify-between'>
                    <Link href='/'>
                        <h3 className='text-xl text-light-dark'>
                            R<span className='text-light-blue'>.</span>FLORIDA
                        </h3> 
                    </Link>
                    <ul className='hidden md:flex items-center gap-4'>
                        <li>
                            <Link 
                                href="#"
                                className='text-2xl hover:text-light-blue transition-colors ease-in-out duration-300'
                            >
                                <AiFillGithub />
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="#"
                                className='text-2xl hover:text-light-blue transition-colors ease-in-out duration-300'
                            >
                                <AiFillLinkedin />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navigation