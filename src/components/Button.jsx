const Button = ({ title }) => {
    return (
        <button className="btn btn-sm lg:btn-md bg-pink-400 hover:bg-pink-500 text-white border-0">{title}</button>
    );
};

export default Button;