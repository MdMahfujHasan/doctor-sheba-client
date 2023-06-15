import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
    const navInfo = <div className='flex flex-col md:flex-row text-white font-semibold'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/login">Login</Link></li>
    </div>
    return (
        <div className="navbar bg-cyan-950 flex justify-between max-w-screen-2xl mx-auto">
            <div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <AiOutlineMenu className='text-white text-2xl' />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52 text-white z-10">
                        {navInfo}
                    </ul>
                </div>
                <div className='space-x-2 flex items-center'>
                    <img src={logo} className="h-14 w-14" />
                    <p className='font-bold text-xl'><span className="text-pink-300">Doctor</span> <span className='text-white'>Sheba</span></p>
                </div>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {navInfo}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;

{/* <a href="https://www.flaticon.com/free-icons/professions-and-jobs" title="professions and jobs icons">Professions and jobs icons created by Prosymbols Premium - Flaticon</a> */ }