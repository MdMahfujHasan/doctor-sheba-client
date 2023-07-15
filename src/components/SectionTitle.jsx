const SectionTitle = ({ title, description }) => {
    return (
        <div className="text-center">
            <h2 className="text-3xl font-extrabold font-serif text-cyan-500">{title}</h2>
            <p className="text-slate-500 text-lg w-2/3 mx-auto mt-3">{description}</p>
        </div>
    );
};

export default SectionTitle;