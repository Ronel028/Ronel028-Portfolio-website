import { useState } from "react"
import emailjs from '@emailjs/browser'

const ContactForm = () =>{

    const [emailForm, setEmailForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (event) =>{
        const { name, value } = event.target
        setEmailForm({
            ...emailForm,
            [name]: value
        })
    }

    const sendEmail = (e) =>{
        e.preventDefault()
        emailjs.send('service_xpbt91f', 'template_4yhup3a', emailForm, 'VFk7agYjf_uCW_tqW')
        .then((result) => {
            console.log(result.text);
            if(result.text === 'OK'){
                setEmailForm({
                    ...emailForm,
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
            }
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <form className="w-full h-auto grid grid-flow-row gap-y-3 lg:max-w-[50.875rem] lg:mx-auto">
            <div className="grid grid-rows-2 grid-cols-1 gap-y-3 md:grid-cols-2 md:grid-rows-1 md:gap-x-3">
                <input 
                    data-aos="flip-down"
                    data-aos-duration="500"
                    className="w-full py-4 px-5 bg-dark placeholder:text-gray placeholder:text-sm placeholder:opacity-[70%]
                                tracking-[0.0625rem] outline-none"
                    type="text" 
                    id="name" 
                    placeholder="Name" 
                    name="name" 
                    value={emailForm.name}
                    onChange={handleChange}
                />
                <input 
                    data-aos="flip-down"
                    data-aos-duration="500"
                    className="w-full py-4 px-5 bg-dark placeholder:text-gray placeholder:text-sm placeholder:opacity-[70%]
                                tracking-[0.0625rem] outline-none"
                    type="email" 
                    id="email" 
                    placeholder="Email" 
                    name="email" 
                    value={emailForm.email}
                    onChange={handleChange}
                />
            </div>
            <input 
                data-aos="flip-down"
                data-aos-duration="500"
                className="w-full py-4 px-5 bg-dark placeholder:text-gray placeholder:text-sm placeholder:opacity-[70%]
                            tracking-[0.0625rem] outline-none"
                type="text" 
                id="subject"
                placeholder="Subject" 
                name="subject" 
                value={emailForm.subject}
                onChange={handleChange}
            />
            <textarea 
                data-aos="flip-down"
                data-aos-duration="500"
                className="w-full py-4 px-5 bg-dark placeholder:text-gray placeholder:text-sm placeholder:opacity-[70%]
                            tracking-[0.0625rem] outline-none"
                id="message" 
                cols="30" 
                rows="5" 
                placeholder="Message"
                name="message" 
                value={emailForm.message}
                onChange={handleChange}
            >
            </textarea>
            <button 
                data-aos="flip-down"
                data-aos-duration="500"
                className=" w-auto relative border-none outline-none bg-dark py-4 px-5 justify-self-end tracking-[0.0625rem] text-sm leading-none z-10
                                overflow-hidden text-gray hover:text-light-dark after:content-[''] after:absolute
                                after:inset-0 after:bg-gray after:translate-x-[-101%] hover:after:translate-x-0 after:z-[-1]
                                after:transition-transform after:ease-in-out after:duration-300"
                onClick={sendEmail}
            >
                SEND MESSAGE!
            </button>
        </form>
    )
}

export default ContactForm