import logo from '../../../assets/logo.png';
import Button from '../../../components/Button';
import Title from '../../../components/Title';

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-purple-200 text-base-content">
                <div className='space-y-2'>
                    <div className="flex items-center gap-2">
                        <img src={logo} className="h-14 w-14" />
                        <Title />
                    </div>
                    <p className='font-mono font-semibold'>Swift and Simple Doctor Appointments<br />Your Health, Your Way</p>
                    <Button title="Appointment"></Button>
                </div>
                <div>
                    <span className="font-bold text-lg text-slate-500 mb-2">Quick Links</span>
                    <a className="text-slate-600 font-semibold link-hover">About Us</a>
                    <a className="text-slate-600 font-semibold link-hover">Services</a>
                    <a className="text-slate-600 font-semibold link-hover">Doctors</a>
                    <a className="text-slate-600 font-semibold link-hover">Departments</a>
                    <a className="text-slate-600 font-semibold link-hover">Online Payment</a>
                    <a className="text-slate-600 font-semibold link-hover">Contact Us</a>
                    <a className="text-slate-600 font-semibold link-hover">My Account</a>
                </div>
                <div>
                    <span className="font-bold text-lg text-slate-500 mb-2">Doctor Sheba Services</span>
                    <a className="text-slate-600 font-semibold link-hover">Pediatric Clinic</a>
                    <a className="text-slate-600 font-semibold link-hover">Diagnosis Clinic</a>
                    <a className="text-slate-600 font-semibold link-hover">Cardiac Clinic</a>
                    <a className="text-slate-600 font-semibold link-hover">Laboratory Analysis</a>
                    <a className="text-slate-600 font-semibold link-hover">Gynecological Clinic</a>
                    <a className="text-slate-600 font-semibold link-hover">Personal Counseling</a>
                    <a className="text-slate-600 font-semibold link-hover">Dental Clinic</a>
                </div>
                <div>
                    <span className="font-bold text-lg text-slate-500 mb-2">Working Hours</span>
                    <a className="text-slate-600 font-semibold link-hover">Saturday - 9:00 am to 5:00 pm</a>
                    <a className="text-slate-600 font-semibold link-hover">Sunday - 9:00 am to 7:00 pm</a>
                    <a className="text-slate-600 font-semibold link-hover">Monday - 9:00 am to 7:00 pm</a>
                    <a className="text-slate-600 font-semibold link-hover">Tuesday - 9:00 am to 7:00 pm</a>
                    <a className="text-slate-600 font-semibold link-hover">Wednesday - 9:00 am to 7:00 pm</a>
                    <a className="text-slate-600 font-semibold link-hover">Thursday - 9:00 am to 7:00 pm</a>
                    <a className="text-slate-600 font-semibold link-hover">Friday - 9:00 am to 5:00 pm</a>
                    <a className="text-slate-600 font-semibold link-hover"></a>
                    <a className="text-slate-600 font-semibold link-hover"></a>
                </div>
            </footer>
            <div>
                <p className="px-8 py-3 text-center bg-purple-200 border-t border-t-purple-300"><small>Copyright © 2022 - All right reserved by Doc House Ltd</small></p>
            </div >
        </>
    );
};

export default Footer;