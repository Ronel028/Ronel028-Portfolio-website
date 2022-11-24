import Image from 'next/image'
import Link from 'next/link'
import { FiExternalLink } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai'

const Projects = (props) =>{

    const { imageSrc, title, description, techUse, sourceCode, livePreview, flex_row } = props

    return (
        <div className={`mb-28 flex flex-col ${flex_row} lg:items-center lg:gap-7`}>
            <div className='w-full lg:w-1/2 mb-7 relative 
                            before:content[""] before:absolute before:inset-0 before:bg-light-dark 
                            before:opacity-[70%] hover:before:opacity-0 
                            before:transition-opacity ease-in-out before:duration-300 cursor-pointer'>
                <Image 
                    priority={true}
                    className='w-full h-auto object-cover'
                    src={imageSrc} 
                    alt="My project"
                    width={1000} 
                    height={1000}
                />
            </div>
            <div className='lg:w-1/2'>
                <h5 className='text-[24px] text-light-dark mb-4 tracking-[1px] md:text-4xl lg:text-[26px] lg:mb-[27px]'>
                    {title}
                </h5>

                {/* description here */}
                {description}
                 {/* description here */}

                <ul className='flex items-center gap-4 flex-wrap mb-8 text-sm font-bold tracking-[1px] lg:mb-[46px]'>
                    {
                        techUse.map((tech, index) =>{
                            return <li key={index}>{tech}</li>
                        })
                    }
                </ul>
                <ul className='flex items-center gap-4 flex-wrap'>
                    <li>
                        <Link 
                            href={sourceCode}
                            className='text-[26px]'
                        >
                            <AiFillGithub />
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href={livePreview}
                            className='text-[26px]'
                        >
                            <FiExternalLink />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Projects