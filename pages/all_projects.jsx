import Link from 'next/link'
import Navigation from '../components/ProjectNavigation'
import Projects from "../components/project"
import projectData from '../projectData'

const AllProjects = () =>{

    return (
        <>

            <Navigation />

            <section id='projects' className='h-auto w-100 bg-gray text-light-dark py-[121px]'>
                <div className='container'>

                    {/* title */}
                    <div className='text-center mb-[97px] md:mb-[130px] lg:mb-36'>
                        <h3 className='text-[25px] tracking-[1px] mb-6 md:text-4xl lg:text-[40px]'>
                        My works<span className='text-light-blue'>.</span>
                        </h3>
                        <p className='font-normal text-[15px] tracking-[1px] leading-6 md:max-w-xl md:mx-auto md:text-[18px] lg:text-xl'>
                        Here you will find all of my personal projects 
                        that I develop.
                        </p>
                    </div>
                    {/* end title */}

                    {/* project list */}
                    <div>
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
                                        flex_row={project.flex_row}
                                        description={project.description}
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
                    {/* end project list */}
                </div>
            </section>
        </>
    )
}

export default AllProjects