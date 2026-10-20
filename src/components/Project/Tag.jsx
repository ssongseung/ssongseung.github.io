const Tag = ({ text }) => {
    return (
        <span className="inline-flex items-center justify-center h-6 px-2.5 rounded-full text-[11px] font-medium text-ink-soft bg-paper-soft border border-line">
            {text}
        </span>
    );
};

export default Tag;
