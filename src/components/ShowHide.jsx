import './AuthTitle.css';

const AuthTitle = ({ title }) => {
    return (
        <h1 className="text-sm mt-4 mb-6 text-center font-bold text-gradient text-gradient-cyan-pink h-11">
            {title}
        </h1>
    );
};

export default AuthTitle;