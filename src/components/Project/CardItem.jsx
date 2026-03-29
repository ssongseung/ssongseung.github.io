import Card from "./Card";
import Date from "./Date";
import Tag from "./Tag";
import Title from "./Title";
import Button from "./Button";

const labelColor = {
    white: { heading: "text-white/50", body: "text-white/85", bar: "bg-white/80", track: "bg-white/15", pct: "text-white/60" },
    blue:  { heading: "text-blue-300/60", body: "text-white/85", bar: "bg-blue-400 shadow-[0_0_6px_#60a5fa]", track: "bg-white/10", pct: "text-blue-300" },
    mint:  { heading: "text-cyan-300/60", body: "text-white/85", bar: "bg-cyan-300 shadow-[0_0_6px_#67e8f9]", track: "bg-white/10", pct: "text-cyan-300" },
};

const CardItem = ({ date, tags, type, title, btnColor, img, role, skill, contribution, resetFlip }) => {
    const lc = labelColor[type];

    return (
        <Card
            type={type}
            resetFlip={resetFlip}
            front={(handleFlip) => (
                <>
                    <ul className="flex flex-col gap-[6px]">
                        <li className="flex items-center justify-between">
                            <Date type={type} text={date} />
                            <div className="flex gap-[4px] opacity-40">
                                <div className="w-[4px] h-[4px] bg-white rounded-full" />
                                <div className="w-[4px] h-[4px] bg-white rounded-full" />
                                <div className="w-[4px] h-[4px] bg-white rounded-full" />
                            </div>
                        </li>
                        <li className="flex gap-1 flex-wrap">
                            {tags.map((tag, idx) => (
                                <Tag key={idx} type={type} text={tag} />
                            ))}
                        </li>
                    </ul>
                    <Title title={title} type={type} />
                    <Button onClick={handleFlip} color={btnColor} title="Detail" />
                </>
            )}
            back={(handleFlip) => (
                <>
                    <div className="flex flex-col gap-[8px]">
                        {/* 썸네일 */}
                        <div className="w-full rounded-[12px] overflow-hidden h-[100px] relative">
                            <img src={img} alt={`${title} 이미지`} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>

                        {/* Role */}
                        <div>
                            <p className={`text-[10px] tracking-widest mb-0.5 ${lc.heading}`}>ROLE</p>
                            <p className={`text-[12px] leading-snug ${lc.body}`}>{role}</p>
                        </div>

                        {/* Skills */}
                        <div>
                            <p className={`text-[10px] tracking-widest mb-0.5 ${lc.heading}`}>SKILLS</p>
                            <p className={`text-[12px] leading-snug ${lc.body}`}>{skill}</p>
                        </div>

                        {/* 기여도 */}
                        <div>
                            <p className={`text-[10px] tracking-widest mb-1.5 ${lc.heading}`}>기여도</p>
                            <div className="flex items-center gap-2">
                                <div className={`flex-1 h-[4px] rounded-full overflow-hidden ${lc.track}`}>
                                    <div
                                        className={`h-full rounded-full ${lc.bar}`}
                                        style={{ width: contribution }}
                                    />
                                </div>
                                <span className={`text-[11px] font-medium w-8 text-right shrink-0 ${lc.pct}`}>
                                    {contribution}
                                </span>
                            </div>
                        </div>
                    </div>

                    <Button onClick={handleFlip} color={btnColor} title="Back" />
                </>
            )}
        />
    );
};

export default CardItem;
