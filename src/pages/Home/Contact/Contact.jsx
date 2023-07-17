import { AiOutlineClockCircle } from 'react-icons/ai';
import { FiMapPin, FiPhoneCall } from 'react-icons/fi';

const Contact = () => {
    return (
        <div className='max-w-screen-lg mx-auto flex flex-col lg:flex-row mt-12 gap-8 container p-8'>
            <div className='w-80 bg-cyan-950 text-white flex flex-col xl:flex-row justify-center items-center gap-4 rounded-xl py-8'>
                <AiOutlineClockCircle className='text-4xl' />
                <div className='space-y-2'>
                    <h3 className='text-xl font-bold'>Opening Hours</h3>
                    <p className='text-sm font-thin'>Open 9.00 am to 7.00 pm</p>
                </div>
            </div>
            <div className='w-80 bg-pink-300 text-white flex flex-col xl:flex-row justify-center items-center gap-4 rounded-xl py-8'>
                <FiMapPin className='text-4xl' />
                <div className='space-y-2'>
                    <h3 className='text-xl font-bold'>Our Location</h3>
                    <p className='text-sm font-thin'>Sunrise Plaza, House No. 123,
                        <br />
                        Road No. 456, Dhanmondi,
                        <br />
                        Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='w-80 bg-cyan-950 text-white flex flex-col xl:flex-row justify-center items-center gap-4 rounded-xl py-8'>
                <FiPhoneCall className='text-4xl' />
                <div className='space-y-2'>
                    <h3 className='text-xl font-bold'>Contact Us</h3>
                    <p className='text-sm font-thin'>+880-1777-123456</p>
                    <p className='text-sm font-thin'>+880-1888-987654</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;