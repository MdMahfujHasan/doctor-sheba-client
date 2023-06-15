import banner from '../../../assets/banner.png';
import Button from '../../../components/Button';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-cyan-900 max-w-screen-2xl mx-auto" >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="max-w-sm rounded-lg lg:-mb-10" />
                <div>
                    <h1 className="text-3xl lg:text-5xl font-bold text-white">Book Your Next Doctor's Appointment: <span className='text-cyan-400'>Convenient</span>, <span className='text-cyan-400'>Reliable</span>, and <span className='text-cyan-400'>Hassle-Free</span> at <span className="text-pink-300">Doctor</span> Sheba</h1>
                    <p className="py-6 text-white text-base lg:text-lg font-mono">Effortlessly book doctor's appointments online. Find the perfect healthcare professional and get timely care with ease.</p>
                    <Button title="All Services"></Button>
                </div>
            </div>
        </div >
    );
};

export default Banner;