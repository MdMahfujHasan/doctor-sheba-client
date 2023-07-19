import { useForm } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
import './ContactUs.css';
import { FiPhoneCall, FiMapPin } from 'react-icons/fi';
import SectionTitle from '../../../components/SectionTitle';
import Swal from 'sweetalert2';

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        const { countryCode, mobile } = data;
        const phoneNumber = `${countryCode}${mobile}`;
        data.mobile = phoneNumber;
        const message = { name: data.name, email: data.email, mobile: data.mobile, message: data.message };

        fetch('http://localhost:5000/messages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(message)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Thanks for contacting us!',
                        "Your message has been sent, we'll get back to you ASAP.",
                        'success'
                    )
                    reset();
                }
            })
    };

    return (
        <>
            <SectionTitle title="Contact Us" description="We value your feedback and are here to assist you. Feel free to contact us if you have any questions or need assistance with booking your next doctor's appointment."></SectionTitle>
            <div className="flex flex-col lg:flex-row justify-center items-center bg-emerald-900 px-12 pt-12 pb-16 max-w-screen-xl mx-auto rounded-lg">
                <div className="w-full lg:w-1/3 text-base-100">
                    <h3 className="text-4xl md:text-5xl mb-6">Contact With Us</h3>
                    <p>Have questions or need assistance? Contact us anytime for reliable and hassle-free support. We are here to help you book your next doctor&apos;s appointment with ease.</p>
                    <p className="my-6 flex items-center"><FiPhoneCall className="mr-2 text-2xl" /><span>+880 19XX-XXXXXX</span></p>
                    <p className="flex items-center"><FiMapPin className="mr-2 text-2xl" /><span>Dhanmondi 4/A, Dhaka - 1209, Bangladesh</span></p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-1/2 mx-auto rounded-lg">
                    <div className="flex nb-4">
                        <div className="w-1/2 mb-4 mr-2">
                            <label htmlFor="name" className="block mb-1 text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your name"
                                {...register('name', { required: true, maxLength: 120 })}
                                className="focus:outline-0 rounded-lg p-5 bg-emerald-700 text-white w-full"
                            />
                            {errors.name?.type === 'required' && <span className="text-red-500">Name is required</span>}
                            {errors.name?.type === 'maxLength' && <span className="text-red-500">Name should be at most 120 characters</span>}
                        </div>
                        <div className="w-1/2 mb-4">
                            <label htmlFor="email" className="block mb-1 text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your email"
                                {...register('email', { required: true, maxLength: 60 })}
                                className="focus:outline-0 rounded-lg p-5 bg-emerald-700 text-white w-full"
                            />
                            {errors.email?.type === 'required' && <span className="text-red-500">Email is required</span>}
                            {errors.email?.type === 'maxLength' && <span className="text-red-500">Email should be at most 60 characters</span>}
                        </div>
                    </div>
                    <div className="flex mb-4">
                        <div className="w-1/3 mr-2">
                            <label htmlFor="countryCode" className="block mb-1 text-gray-700">Country Code</label>
                            <select
                                id="countryCode"
                                {...register('countryCode', { required: true })}
                                className="focus:outline-0 rounded-lg p-5 bg-emerald-700 text-white w-full"
                            >
                                <option selected value="+880">+880 Bangladesh</option>
                                <option value="+91">+91 India</option>
                                <option value="+92">+92 Pakistan</option>
                                <option value="+93">+93 Afghanistan</option>
                                <option value="+62">+62 Indonesia</option>
                                <option value="+60">+60 Malaysia</option>
                                <option value="+1">+1 United States</option>
                                <option value="+1">+1 Canada</option>
                                <option value="+61">+61 Australia</option>
                                <option value="+86">+86 China</option>
                            </select>
                            {errors.countryCode && <span className="text-red-500">Country Code is required</span>}
                        </div>
                        <div className="w-2/3 ml-2">
                            <label htmlFor="mobile" className="block mb-1 text-gray-700">Mobile</label>
                            <input
                                type="number"
                                id="mobile"
                                placeholder="Your mobile number"
                                {...register('mobile', { required: true, minLength: 7, maxLength: 15 })}
                                className="focus:outline-0 rounded-lg p-5 bg-emerald-700 text-white w-full"
                            />
                            {errors.mobile?.type === 'required' && <span className="text-red-500">Mobile is required</span>}
                            {errors.mobile?.type === 'minLength' && <span className="text-red-500">Mobile number should be at least 7 digits</span>}
                            {errors.mobile?.type === 'maxLength' && <span className="text-red-500">Mobile number should be at most 15 digits</span>}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-1 text-gray-700">Message</label>
                        <textarea
                            type="text"
                            id="message"
                            placeholder="Write a message"
                            {...register('message', { required: true, maxLength: 800 })}
                            className="focus:outline-0 rounded-lg p-5 bg-emerald-700 text-white w-full textarea-lg"
                        />
                        {errors.message?.type === 'required' && <span className="text-red-500">Message is required</span>}
                        {errors.message?.type === 'maxLength' && <span className="text-red-500">Message should be at most 800 characters</span>}
                    </div>
                    <button type="submit" className="px-4 py-2 mt-4 bg-emerald-300 hover:bg-emerald-400 w-full text-emerald-800 font-semibold rounded">Send Message</button>
                </form>
            </div>
        </>
    );
};

export default ContactUs;
