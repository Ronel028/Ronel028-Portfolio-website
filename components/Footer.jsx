import Link from 'next/link'
import { AiFillLinkedin, AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai'

const Footer = () =>{
    return (
        <footer className='h-auto w-100 bg-dark text-gray py-[2.625rem] overflow-hidden'>
            <div className="container">
                <div className='w-full h-auto'>
                    <div id='example-anchor' className='flex flex-col gap-[1.9375rem] mb-[4.5625rem] md:flex-row md:justify-between lg:mb-[2.4375rem]'>
                        <div 
                            data-aos="fade-right"
                            data-aos-anchor="#example-anchor"
                        >
                            <h3
                                className='text-[1.5625rem] tracking-[0.0625rem] md:text-xl md:mb-3 lg:text-[1.375rem]'
                            >
                                R<span className="text-light-blue">.</span>FLORIDA
                            </h3>
                            <p
                                className='text-[1.0625rem] tracking-[0.0625rem] md:text-base'
                            >
                                Future software engineer
                            </p>
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                        >
                            <h3
                                className=' text-xl tracking-[0.0625rem] mb-3 md:text-lg'
                            >
                                Social media
                            </h3>
                            <div
                                className='flex items-center gap-[1.125rem] text-[1.75rem] md:text-[1.625rem]'
                            >
                                <Link href="#" className='hover:scale-110 transition-all ease-in-out duration-300'>
                                    <AiFillLinkedin />
                                </Link>
                                <Link href="#" className='hover:scale-110 transition-all ease-in-out duration-300'>
                                    <AiFillFacebook />
                                </Link>
                                <Link href="#" className='hover:scale-110 transition-all ease-in-out duration-300'>
                                    <AiFillTwitterSquare />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <p className='font-bold text-sm'>
                            © Copyright 2022. Made by Ronel Florida
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer