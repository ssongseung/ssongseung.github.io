const filterList = ["전체", "구축", "운영", "이벤트/프로모션"];

const Filter = ({ activeFilter, onClick }) => {
    return (
        <div className="flex flex-wrap gap-2">
            {filterList.map((filter) => (
                <button
                    key={filter}
                    onClick={() => onClick(filter)}
                    className={`h-9 px-4 rounded-full text-sm font-medium transition-colors border ${
                        activeFilter === filter
                            ? "bg-ink text-paper border-ink"
                            : "text-ink-soft border-line hover:border-accent hover:text-accent"
                    }`}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};

export default Filter;
