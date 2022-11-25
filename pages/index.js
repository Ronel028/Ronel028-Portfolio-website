import Head from 'next/head'
import Link from 'next/link'
import { FaArrowDown, FaChevronRight } from 'react-icons/fa'
import Navigation from '../components/Navigation';
import Projects from '../components/project';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Main() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <title>Ronel Florida | Website</title>
      </Head>

      {/* main content */}
      <div>

        {/* header */}
        <header className={`overflow-hidden relative w-full h-auto min-h-screen 
                            bg-[url('/images/Background-mobile.webp')] 
                            md:bg-[url('/images/Tablet-background.webp')] 
                            lg:bg-[url('/images/desktop-background.jpg')] bg-no-repeat 
                            bg-cover bg-opacity-[30%]`}>
              <Navigation />

              {/* HERO SECTION*/}
              <div className='absolute inset-0 bg-gray opacity-[90%]'></div>
              <main className='container relative w-full h-auto min-h-screen flex justify-center items-center text-center'>
                <div className='z-20'>
                  <h1 className='text-[2.3125rem] md:text-[3.75rem] lg:text-[5rem] transition-all ease-out duration-150 mb-4'>
                    HI, I’M <span className='text-light-blue'>RONEL FLORIDA.</span>
                  </h1>
                  <p className='text-[1.0625rem] md:text-[1.25rem] lg:text-[25px] lg:max-w-3xl lg:mx-auto mb-10'>
                        Future <span className='font-bold'>software engineer</span>. I enjoy creating 
                        website and web applications. I'm currently learning <span className='font-bold'>React</span> and 
                        improving my problem-solving skills to become a better developer.
                  </p>
                  <Link 
                    href='#'
                    className=' inline-block text-sm lg:text-base relative bg-dark py-4 px-5 tracking-[1px] leading-none z-10
                              overflow-hidden text-gray hover:text-gray after:content-[""] after:absolute
                              after:inset-0 after:bg-light-blue after:translate-x-[-101%] hover:after:translate-x-0 after:z-[-1]
                              after:transition-transform after:ease-in-out after:duration-300'
                  >
                    CHECK MY WORKS!
                  </Link>
                </div>
                <div className='absolute bottom-[20px] left-2/4 translate-x-[-50%] hidden md:flex flex-col items-center'>
                  <div className="animate-bounce mb-1">
                    <FaArrowDown className='text-[1rem] text-light-blue'/>
                  </div>
                  <p className='text-[13px] tracking-[3px] text-light-blue'>SCROLL DOWN</p>
                </div>
              </main>

        </header>

        {/* about section */}
        <section id='about'  className='h-auto w-100 bg-light-dark text-gray py-[121px]'>
          <div className='container'>

            {/* title */}
            <div className='text-center mb-[97px] md:mb-[130px] lg:mb-36'>
              <h3 className='text-[25px] tracking-[1px] mb-6 md:text-4xl lg:text-[40px]'>
                About me<span className='text-light-blue'>.</span>
              </h3>
              <p className='font-normal text-[15px] tracking-[1px] leading-6 md:max-w-xl md:mx-auto md:text-[18px] lg:text-xl'>
                Here you will find information about me, My currrent skills 
                and technology the I’ve been working with.
              </p>
            </div>
            {/* end title */}

            {/* content */}
            <div className='grid grid-cols-1 grid-rows-auto gap-y-16 lg:grid-cols-2 lg:gap-x-8'>

              <div>
                <h4 className='font-semibold text-lg tracking-[1px] mb-3 md:text-[26px] md:mb-7 lg:text-xl'>
                  GET TO KNOW ME<span className='text-light-blue'>!</span>
                </h4>
                <p className='font-normal text-[15px] tracking-[1px] leading-6 mb-4 md:text-xl md:leading-[30px] md:mb-8 lg:text-lg lg:mb-9'>
                  Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit. Nunc vulputate libero et velit 
                  interdum, ac aliquet odio mattis. Class aptent 
                  taciti sociosqu ad litora torquent per conubia 
                  nostra, per inceptos himenaeos.
                </p>
                <p className='font-normal text-[15px] tracking-[1px] leading-6 mb-4 md:text-xl md:leading-[30px] md:mb-8 lg:text-lg lg:mb-9'>
                  Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit. Nunc vulputate libero et velit 
                  interdum, ac aliquet odio mattis. Class aptent 
                  taciti sociosqu ad litora torquent per conubia 
                  nostra, per inceptos himenaeos.
                </p>
                <p className='font-normal text-[15px] tracking-[1px] leading-6 md:text-xl md:leading-[30px] lg:text-lg'>
                  Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit. Nunc vulputate libero et velit 
                  interdum, ac aliquet odio mattis. Class aptent 
                  taciti sociosqu ad litora torquent per conubia 
                  nostra, per inceptos himenaeos.
                </p>
              </div>

              {/* skills */}
              <div>
                <h4 className='font-semibold text-lg tracking-[1px] mb-3 md:text-[26px] md:mb-7 lg:text-xl'>
                  TECHNOLOGY THAT I’VE BEEN WORKING WITH<span className='text-light-blue'>!</span>
                </h4>
                <div className='flex flex-wrap gap-6 text-light-dark font-semibold text-[17px] tracking-[1px]'>
                  <div className='py-3 px-4 bg-gray'>
                    HTML
                  </div>
                  <div className='py-3 px-4 bg-gray'>
                    CSS
                  </div>
                  <div className='py-3 px-4 bg-gray'>
                    Javascript
                  </div>
                  <div className='py-3 px-4 bg-gray'>
                    SASS
                  </div>
                  <div className='py-3 px-4 bg-gray'>
                    NODE
                  </div>
                  <div className='py-3 px-4 bg-gray'>
                    React
                  </div>
                  <div className='py-3 px-4 bg-gray'>
                    TailwindCSS
                  </div>
                  <div className='py-3 px-4 bg-gray'>
                    Responsive Design
                  </div>
                  <div className='py-3 px-4 bg-gray'>
                    SQL Basic
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
        {/* end about section */}

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
              <Projects 
                imageSrc="/images/projects/url-shortening-landingPage.webp"
                title="Url Shortening Landing Page"
                techUse={["Html", "Sass", "Javascript", "shrtcode API"]}
                sourceCode="https://github.com/Ronel028/URL-shortening-api"
                livePreview="https://url-shortening-api-psi.vercel.app/"
                flex_row="lg:flex-row"
                description={<p className='font-normal text-[1rem] text-light-dark tracking-[1px] leading-6 mb-7 md:text-lg lg:mb-[46px]'>
                                URL Shortly Landing page is challenge 
                                from <Link href="https://www.frontendmentor.io/" className='font-bold hover:underline'>Frontend Mentor.</Link>
                                This landing page can make the long url links convert into short url by the
                                help of <Link href="https://shrtco.de/" className='font-bold hover:underline'>shrtcode API</Link>
                            </p>}
              />
              <Projects 
                imageSrc="/images/projects/advice-generator-app.webp"
                title="Advice Generator App"
                techUse={["Vite", "Sass", "Javascript", "Advice Slip API"]}
                sourceCode="https://github.com/Ronel028/fem-advice-generator"
                livePreview="https://web-advice-generator.herokuapp.com/"
                flex_row="lg:flex-row-reverse"
                description={<p className='font-normal text-[1rem] text-light-dark tracking-[1px] leading-6 mb-7 md:text-lg lg:mb-[46px]'>
                                Advice generator app is challenge 
                                from <Link href="https://www.frontendmentor.io/" className='font-bold hover:underline'>Frontend Mentor. </Link>
                                That you can generate random advice from <Link href="https://api.adviceslip.com/" className='font-bold hover:underline'>Advice Slip API.</Link>
                            </p>}
              />
              <Projects 
                imageSrc="/images/projects/bms.webp"
                title="Barangay Management System"
                techUse={["React", "Node", "Express", "Bootstrap", "Sass", "MySql"]}
                sourceCode="https://github.com/Ronel028/barangay-management-system-final"
                livePreview="https://github.com/Ronel028/barangay-management-system-final"
                flex_row="lg:flex-row"
                description={<p className='font-normal text-[1rem] text-light-dark tracking-[1px] leading-6 mb-7 md:text-lg lg:mb-[46px]'>
                                Barangay Management System is my personal project. I develop this in order to
                                practice my self in front-end and back-end development and also in database which is MySql.
                                This project has a CRUD functionality that you can create, read, update, and delete data of
                                Barangay Official, resident, blotter, and certificate.

                            </p>}
              />
            </div>
            {/* end project list */}

            {/* show more button */}
            <div className='w-full flex items-center justify-center'>
              <Link 
                href="/all_projects" 
                className='flex items-center gap-3 text-sm relative bg-dark py-4 px-5 justify-self-end tracking-[1px] leading-none z-10
                overflow-hidden text-gray hover:text-gray after:content-[""] after:absolute
                after:inset-0 after:bg-light-blue after:translate-x-[-101%] hover:after:translate-x-0 after:z-[-1]
                after:transition-transform after:ease-in-out after:duration-300'>

                <p className=' tracking-[1px]'>CHECK MORE!</p>
                <FaChevronRight className='text-sm'/>

              </Link>
            </div>
          </div>
        </section>

        {/* project section */}
        <section id='contact' className='h-auto w-100 bg-light-dark text-gray py-[121px]'>
          <div className='container'>  

            {/* title */}
            <div className='text-center mb-[97px] md:mb-[130px] lg:mb-36'>
              <h3 className='text-[25px] tracking-[1px] mb-6 md:text-4xl lg:text-[40px]'>
                Contact<span className='text-light-blue'>.</span>
              </h3>
              <p className='font-normal text-[15px] tracking-[1px] leading-6 md:max-w-[653px] md:mx-auto md:text-[18px] lg:text-xl'>
                I’m open to job opportunity related to web development where 
                I can contribute, learn and grow. If you have good opportunity 
                that matches my skills then don’t hesitate to contact me.  
              </p>
            </div>
            {/* end title */}

            {/* contact form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </section>

        {/* footer */}
        <footer className='h-auto w-100 bg-dark text-gray py-[42px]'>
          <div className='container'>
            <Footer />
          </div>
          
        </footer>

      </div>
    </>
  )
}
