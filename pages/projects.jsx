import Link from 'next/link'
import { FaArrowDown } from 'react-icons/fa'
import Navigation from '../components/ProjectNavigation'
import Projects from "../components/project"
import projectData from '../projectData'
import Footer from '../components/Footer'

const AllProjects = () =>{

    return (
        <>

            <Navigation />

            <section id='projects' className="w-full h-auto min-h-screen fixed inset-0 z-[-1]  text-light-dark py-[121px] overflow-hidden
                                    bg-[url('/images/Background-mobile.webp')] 
                                    md:bg-[url('/images/Tablet-background.webp')] 
                                    lg:bg-[url('/images/desktop-background.jpg')] bg-no-repeat 
                                    bg-cover bg-opacity-[30%]">
                <div className='absolute inset-0 bg-gray opacity-[70%] z-[-1]'></div>
                <div className="container w-full h-full">
                    {/* title */}
                        <div className=' w-full h-full flex items-center justify-center text-center mb-[97px] md:mb-[130px] lg:mb-36'>
                            <h3 className='text-[25px] tracking-[1px] mb-6 md:text-4xl lg:text-9xl uppercase'>
                                My works<span className='text-light-blue'>.</span>
                            </h3>
                        </div>
                    {/* end title */}
                </div>
                <div className='absolute bottom-6 left-2/4 translate-x-[-50%] flex flex-col items-center'>
                        <div className="animate-bounce mb-1">
                            <FaArrowDown className='text-xs text-light-blue'/>
                        </div>
                        <p className='text-xs tracking-[0.0625rem] text-light-blue'>SCROLL DOWN</p>
                </div>
            </section>
            {/* project list */}
            <section className='mt-[100vh] w-full h-auto bg-gray overflow-hidden pt-[200px] relative border-t-2 border-light-blue'>
                <div className='container'>
                    {
                        projectData.length > 0 ?
                            projectData.map((project, index) =>(
                                <Projects
                                    key={index}
                                    imageSrc={project.imageSrc}
                                    title={project.title}
                                    techUse={project.techUse}
                                    sourceCode={project.sourceCode}
                                    livePreview={project.livePreview}
                                    description={project.description}
                                    flex_row={project.flex_row}
                                    fadeImage={project.fadeImage}
                                    fadeContent={project.fadeContent}
                                />
                            ))
                        :   <div className=' w-full h-auto text-center'>
                                <p 
                                    className='text-3xl font-bold tracking-[1px]'
                                >
                                    No project Found!
                                </p>
                            </div>
                        
                    }
                </div>
            </section>
            {/* end project list */}
            
            <Footer />

        </>
    )
}

export default AllProjects