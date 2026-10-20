import { careerList } from "../../data/careerList";
import SectionHeading from "../SectionHeading";
import CareerItem from "../CareerItem";

const Career = () => {
    return (
        <section id="career" className="py-24 border-t border-line">
            <div className="max-w-5xl mx-auto px-5 md:px-8">
                <SectionHeading
                    eyebrow="Career"
                    title="경력"
                    description="구축부터 운영까지, 맡았던 프로젝트들의 역할과 성과를 정리했습니다."
                />

                <div className="mt-10 flex flex-col gap-4">
                    {careerList.map((item) => (
                        <CareerItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Career;
