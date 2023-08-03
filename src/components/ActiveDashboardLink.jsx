import { NavLink } from "react-router-dom";
import './ActiveDashboardLink.css';

const ActiveDashboardLink = ({ to, children }) => {
    return (
        <NavLink to={to} className="active-dashboard" end>
            {children}
        </NavLink>
    );
};

export default ActiveDashboardLink;
