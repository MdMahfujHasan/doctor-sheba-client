import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import Title from '../../../components/Title';

const NavBar = () => {
    const navInfo = <div className='flex flex-col md:flex-row font-serif text-primary-content rounded-lg md:rounded-none space-y-2 md:space-y-0 md:space-x-10'>
        <Link className="hover:text-cyan-500" to="/">Home</Link>
        <Link className="hover:text-cyan-500" to="/about">About</Link>
        <Link className="hover:text-cyan-500" to="/appointment">Appointment</Link>
        <Link className="hover:text-cyan-500" to="/login">Login</Link>
    </div>
    return (
        <div className="navbar bg-cyan-950 flex justify-between items-center max-w-screen-2xl mx-auto">
            <div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <AiOutlineMenu className='text-white text-2xl' />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-4 shadow bg-cyan-950 rounded-box w-52 z-10">
                        {navInfo}
                    </ul>
                </div>
                <Link to="/" className='space-x-2 flex items-center'>
                    <img src={logo} className="h-12 w-12" />
                    <Title />
                </Link>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal">
                    {navInfo}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;