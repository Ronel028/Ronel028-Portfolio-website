const ContactForm = () =>{
    return (
        <form className="w-full h-auto grid grid-flow-row gap-y-3 lg:max-w-[814px] lg:mx-auto">
            <div className="grid grid-rows-2 grid-cols-1 gap-y-3 md:grid-cols-2 md:grid-rows-1 md:gap-x-3">
                <input 
                    className="w-full py-4 px-5 bg-dark placeholder:text-gray placeholder:text-sm placeholder:opacity-[70%]
                                tracking-[1px] outline-none active:outline-light-blue outline-2"
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Name" 
                />
                <input 
                    className="w-full py-4 px-5 bg-dark placeholder:text-gray placeholder:text-sm placeholder:opacity-[70%]
                                tracking-[1px] outline-none active:outline-light-blue outline-2"
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Email" 
                />
            </div>
            <input 
                className="w-full py-4 px-5 bg-dark placeholder:text-gray placeholder:text-sm placeholder:opacity-[70%]
                            tracking-[1px] outline-none active:outline-light-blue outline-2"
                type="text" 
                name="subject" 
                id="subject"
                placeholder="Subject" 
            />
            <textarea 
                className="w-full py-4 px-5 bg-dark placeholder:text-gray placeholder:text-sm placeholder:opacity-[70%]
                            tracking-[1px] outline-none active:outline-light-blue outline-2"
                name="message" 
                id="message" 
                cols="30" 
                rows="5" 
                placeholder="Message"
            >
            </textarea>
            <button className=" bg-dark w-auto py-4 px-5 justify-self-end tracking-[1px] text-sm">
                SEND MESSAGE!
            </button>
        </form>
    )
}

export default ContactForm