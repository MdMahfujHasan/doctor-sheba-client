import { AiOutlineClockCircle } from 'react-icons/ai';
import { FiMapPin, FiPhoneCall } from 'react-icons/fi';

const Contact = () => {
    return (
        <div className='max-w-screen-lg mx-auto flex flex-col lg:flex-row justify-between mt-12 p-6 gap-8'>
            <div className='bg-cyan-950 text-white flex flex-col xl:flex-row justify-center items-center gap-4 rounded-xl p-12'>
                <AiOutlineClockCircle className='text-4xl' />
                <div className='space-y-2'>
                    <h3 className='text-2xl font-bold'>Opening Hours</h3>
                    <p className='text-sm font-thin'>Open 9.00 am to 5.00 pm
                        <br />
                        Everyday</p>
                </div>
            </div>
            <div className='bg-pink-300 text-white flex flex-col xl:flex-row justify-center items-center gap-4 rounded-xl p-12'>
                <FiMapPin className='text-4xl' />
                <div className='space-y-2'>
                    <h3 className='text-2xl font-bold'>Our Location</h3>
                    <p className='text-sm font-thin'>Sunrise Plaza, House No. 123,
                        <br />
                        Road No. 456, Dhanmondi,
                        <br />
                        Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='bg-cyan-950 text-white flex flex-col xl:flex-row justify-center items-center gap-4 rounded-xl p-12'>
                <FiPhoneCall className='text-4xl' />
                <div className='space-y-2'>
                    <h3 className='text-2xl font-bold'>Contact Us</h3>
                    <p className='text-sm font-thin'>+880-1777-123456</p>
                    <p className='text-sm font-thin'>+880-1888-987654</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;