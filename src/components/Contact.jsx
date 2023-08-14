import { useState, useRef } from "react"
import { IoIosWarning } from 'react-icons/io'
import { BiSolidErrorCircle, BiSolidCheckCircle } from 'react-icons/bi'
import emailjs from '@emailjs/browser'

function contact() {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [showSuccess,setShowSuccess] = useState(false);
    const [showWarning,setShowWarning] = useState(false);
    const [showError,setShowError] = useState(false);
    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
    
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( !form.name | !form.email | !form.message) {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
                }, 3000);
        } else {
            setLoading(true);

            emailjs.send(
                "service_mfh3o1p",
                "template_uy5qqn1",
                {
                    from_name: form.name,
                    from_email: form.email,
                    to_email: "andoni.hernandez.quero@gmail.com",
                    message: form.message,
                },
                "czokxCz0DPLyoErm-",
              )
              .then(
                () => {
                    setLoading(false);
                    // Show success message and reset form state
                    setShowSuccess(true);
                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                    setTimeout(() => {
                        setShowSuccess(false);
                        }, 3000);
                },
                (error) => {
                    setLoading(false);
                    // Show error message
                    setShowError(true);
                    setTimeout(() => {
                        setShowError(false);
                        }, 3000);
                }
            );
        }   
    };

    return (
        <div name="contact" className="flex w-full h-[100lvh] min-h-[700px] justify-center items-center">
            <div  className="flex flex-col bg-[#100d25] p-8 rounded-2xl items-center">
                <h2 className='inline text-4xl text-gray-300 font-bold ml-2 border-b-4 border-[#915eef]'>Contact</h2>
                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col lg:min-w-[700px] md:min-w-[600px] sm:min-w-[500px] min-w-[300px]">
                    <label className="flex flex-col mb-5">
                        <span className="text-white font-medium mb-2">Your Name</span>
                        <input type="text" name="name" value={form.name} onChange={handleChange}placeholder="What's your name?" className="bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium font-mono"/>
                    </label>

                    <label className="flex flex-col mb-5">
                        <span className="text-white font-medium mb-2">Your Email</span>
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?" className="bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium font-mono"/>
                    </label>

                    <label className="flex flex-col mb-5">
                        <span className="text-white font-medium mb-2">Your Message</span>
                        <textarea rows="7" name="message" value={form.message} onChange={handleChange}placeholder="How can I help you?"className="bg-[#151030] py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium resize-none font-mono"/>
                    </label>
                    
                    {showSuccess && (
                        <div className="bg-green-200 rounded flex flex-row justify-center items-center m-auto p-2" tabIndex={-1}>
                            <div className="flex flex-row items-center">
                                <BiSolidCheckCircle size={24} className="text-green-600"/>
                                <p className="ml-3">Message sent successfully</p>
                            </div>
                        </div>
                    )}

                    {showWarning && (
                        <div className="bg-yellow-200 rounded flex flex-row justify-center items-center m-auto p-2" tabIndex={-1}>
                            <div className="flex flex-row items-center">
                                <IoIosWarning size={24} className="text-yellow-600"/>
                                <p className="ml-3">You must fill all the fields</p>
                            </div>
                        </div>
                    )}

                    {showError && (
                        <div className="bg-red-200 rounded flex flex-row justify-center items-center m-auto p-2" tabIndex={-1}>
                            <div className="flex flex-row items-center">
                                <BiSolidErrorCircle size={24} className="text-red-600"/>
                                <p className="ml-3">Message could not be sent</p>
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col items-center sm:flex-row sm:justify-center">
                        <button type="submit" className="bg-[#151030] mt-4 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mr-4 sm:justify-content-center hover:bg-[#915eef] duration-300">
                        {loading ? "Sending..." : "Send"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
        
    )
  }
  
  export default contact