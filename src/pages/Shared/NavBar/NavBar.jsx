import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import Title from '../../../components/Title';
import ActiveLink from '../../../components/ActiveLink';
import useAuth from '../../../hooks/useAuth';
import defaultUser from '../../../assets/default-user.png';
import Swal from 'sweetalert2';
import { AiOutlineSetting, AiOutlineQuestionCircle } from 'react-icons/ai';
import { MdOutlineArrowForwardIos, MdOutlineDarkMode, MdOutlineFeedback, MdLogout } from 'react-icons/md';

const NavBar = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () => {
        Swal.fire({
            title: 'Confirm',
            text: "Are you sure you want to logout?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#F25555',
            cancelButtonColor: '#A7A9AB',
            confirmButtonText: 'Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                navigate("/login");
            }
        })
    }

    const navHover = "hover:bg-slate-800 p-2 rounded-lg hover:cursor-pointer";
    const navFlex = "flex justify-between items-center";
    const profileItem = "bg-slate-700 rounded-full p-1.5";
    const profileIcon = "text-white text-xl rounded-full";
    const profileFlex = "flex items-center gap-2";
    const hoverCyan = "hover:text-cyan-500";

    const navInfo = <div className='flex flex-col md:flex-row font-serif text-primary-content rounded-lg md:rounded-none space-y-2 md:space-y-0 md:space-x-10 items-center'>
        <ActiveLink to="/" className={hoverCyan}>Home</ActiveLink>
        <ActiveLink to="/about" className={hoverCyan}>About</ActiveLink>
        <ActiveLink to="/appointment" className={hoverCyan}>Appointment</ActiveLink>
        {user && <ActiveLink to="/dashboard" className={hoverCyan}>Dashboard</ActiveLink>}
        {!user && <>
            <ActiveLink to="/login" className={hoverCyan}>Login</ActiveLink>
            <ActiveLink to="/register" className={hoverCyan}>Register</ActiveLink>
        </>}
        {user && <div className="lg:dropdown lg:dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-9 rounded-full ring ring-primary">
                    <img src={user?.photoURL || defaultUser} />
                </div>
            </label>
            <ul tabIndex={0} className="mt-3 z-[1] p-3 w-80 space-y-1 shadow menu menu-sm dropdown-content bg-slate-900 rounded-box">
                <Link to="/dashboard/profile" className={`${profileFlex} hover:bg-slate-800 p-2 rounded-lg`}>
                    <label tabIndex={0} className="avatar hover:cursor-pointer">
                        <div className="w-10 rounded-full avatar">
                            <img src={user?.photoURL || defaultUser} />
                        </div>
                    </label>
                    <a className='font-bold font-sans'>{user?.displayName}</a>
                    <hr />
                </Link>
                <a className={`${navFlex} ${navHover}`}>
                    <div className={profileFlex}>
                        <span className={profileItem}><AiOutlineSetting className={profileIcon} /></span> <span>Settings and Privacy</span>
                    </div>
                    <MdOutlineArrowForwardIos className='text-lg' />
                </a>
                <a className={`${navFlex} ${navHover}`}>
                    <div className={profileFlex}>
                        <span className={profileItem}><AiOutlineQuestionCircle className={profileIcon} /></span> <span>Help and Support</span>
                    </div>
                    <MdOutlineArrowForwardIos className='text-lg' />
                </a>
                <a className={`${navFlex} ${navHover}`}>
                    <div className={profileFlex}>
                        <span className={profileItem}><MdOutlineDarkMode className={profileIcon} /></span> <span>Display and Accessability</span>
                    </div>
                    <MdOutlineArrowForwardIos className='text-lg' />
                </a>
                <a className={navHover}>
                    <div className={profileFlex}>
                        <span className={profileItem}><MdOutlineFeedback className={profileIcon} /></span> <span>Give Feedback</span>
                    </div>
                </a>
                <a onClick={handleLogOut} className={navHover}>
                    <div className={profileFlex}>
                        <span className={profileItem}><MdLogout className={profileIcon} /></span> <span>Logout</span>
                    </div>
                </a>
            </ul>
        </div>}
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