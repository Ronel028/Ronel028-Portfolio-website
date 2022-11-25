import Link from 'next/link'
import { AiFillLinkedin, AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai'

const Footer = () =>{
    return (
        <div className='w-full h-auto'>
            <div className='flex flex-col gap-[31px] mb-[73px] md:flex-row md:justify-between lg:mb-[39px]'>
                <div>
                    <h3 className='text-[25px] tracking-[1px] md:text-xl md:mb-[12px] lg:text-[22px]'>
                        R<span className="text-light-blue">.</span>FLORIDA
                    </h3>
                    <p className='text-[17px] tracking-[1px] md:text-base'>
                        Future software engineer
                    </p>
                </div>
                <div>
                    <h3 className='text-[20px] tracking-[1px] mb-[12px] md:text-lg'>
                        Social media
                    </h3>
                    <div className='flex items-center gap-[18px] text-[28px] md:text-[26px]'>
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
    )
}

export default Footer