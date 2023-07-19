const SectionTitle = ({ title, description }) => {
    return (
        <div className="text-center mt-12 mb-4">
            <h2 className="text-4xl font-extrabold font-serif text-cyan-500">{title}</h2>
            <p className="text-slate-500 text-lg w-2/3 mx-auto mt-3">{description}</p>
        </div>
    );
};

export default SectionTitle;