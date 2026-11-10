/**
 * 무한 루프 텍스트 마퀴. 같은 목록을 두 번 이어 붙이고 -50% 이동시켜 이음새 없이 반복.
 */
const Marquee = ({ items }) => {
    const renderList = (hidden) => (
        <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
            {items.map((item) => (
                <li key={item} className="flex items-center">
                    <span className="px-6 md:px-8 text-xl md:text-3xl font-semibold tracking-tight text-ink-soft transition-colors hover:text-ink">
                        {item}
                    </span>
                    <span className="text-accent text-lg" aria-hidden="true">
                        ✦
                    </span>
                </li>
            ))}
        </ul>
    );

    return (
        <div
            className="marquee relative overflow-hidden border-y border-line bg-paper-soft py-6 md:py-8 [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]"
            aria-label="기술 스택"
        >
            <div className="marquee-track flex w-max">
                {renderList(false)}
                {renderList(true)}
            </div>
        </div>
    );
};

export default Marquee;
