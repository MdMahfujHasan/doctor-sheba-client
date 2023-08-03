import { Link, Outlet } from "react-router-dom";
import useProfile from "../hooks/useProfile";

const Dashboard = () => {
    const [userDetails] = useProfile();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            {
                userDetails.map(user => <div key={user._id} className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-8 w-80 h-full bg-base-200 text-base-content flex flex-col items-center">
                        <div className="avatar">
                            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user.photo} />
                            </div>
                        </div>
                        <h3 className="font-bold text-xl">{user.name}</h3>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/dashboard/profile">Profile</Link>
                    </ul>
                </div>)
            }
        </div>
    );
};

export default Dashboard;