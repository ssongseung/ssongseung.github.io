import Card from "./Card";
import Date from "./Date";
import Tag from "./Tag";
import Title from "./Title";
import Button from "./Button";

const CardItem = ({ date, tags, type, title, btnColor, img, role, skill }) => {
    console.log(img);

    return (
        <Card
            type={type}
            front={(handleFlip) => (
                <>
                    <ul className="flex flex-col gap-[4px]">
                        <li className="flex items-center justify-between">
                            <Date type={type} text={date} />
                            <div className={`flex gap-[3px] ${type === "blue" ? "opacity-50" : "opacity-100"}`}>
                                <div className="w-[5px] h-[5px] bg-[#eee] rounded-full" />
                                <div className="w-[5px] h-[5px] bg-[#eee] rounded-full" />
                                <div className="w-[5px] h-[5px] bg-[#eee] rounded-full" />
                            </div>
                        </li>
                        <li className="flex">
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
                    <div className="flex flex-col gap-[5px]">
                        <div className="w-full rounded-[12px] overflow-hidden">
                            <img src={img} alt="이미지" />
                        </div>
                        <div className="mt-[10px]">
                            <p className="text-[18px] text-black">Role</p>
                            <p className="text-[16px] text-black">{role}</p>
                        </div>
                        <div className="mt-[10px]">
                            <p className="text-[18px] text-black">Skills</p>
                            <p className="text-[16px] text-black">{skill}</p>
                        </div>
                    </div>
                    <Button onClick={handleFlip} color={btnColor} title="Back" />
                </>
            )}
        />
    );
};

export default CardItem;
