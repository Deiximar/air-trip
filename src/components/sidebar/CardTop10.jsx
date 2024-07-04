const CardTop10Country = ({ country, aq }) => {
    return (
        <div className="flex items-center justify-between mb-3 shadow border-[1px] border-slate-100 hover:scale-105 transition duration-500 font-medium max-w-sm p-4 rounded-lg">
            <div className="flex items-center gap-5">
                <h2 className="text-normal font-light">{country}</h2>
            </div>
            <div className="text-dark-blue-2 font-semibold">{aq}</div>
        </div>
    );
};

export default CardTop10Country;