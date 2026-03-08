import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import CardItem from "./CardItem";

const topPositions = [
    "top-[50%]",
    "top-[60%]",
    "top-[60%]",
    "top-[50%]",
    "top-[60%]",
    "top-[50%]",
    "top-[60%]",
    "top-[60%]",
    "top-[50%]",
    "top-[40%]",
];

const List = ({ filteredItems, activeFilter, resetFlip }) => {
    const isPC = useBreakpoint(768);
    const isFiltered = activeFilter !== "전체";

    return (
        <Swiper
            key={activeFilter}
            spaceBetween={20}
            slidesPerView={"auto"}
            className="h-full !py-[30px] !px-[20px] md:!ml-[100px] md:!py-0 md:!pr-[100px] md:!pl-[10px]"
        >
            {filteredItems.map((group, index) => (
                <SwiperSlide key={group.id} className="w-auto!">
                    <div
                        className={`flex flex-col gap-4 relative ${
                            isPC
                                ? `${
                                      isFiltered ? "top-[50%]" : topPositions[index % topPositions.length]
                                  } -translate-y-1/2`
                                : ""
                        }`}
                    >
                        {group.items.map((item, idx) => (
                            <CardItem key={idx} {...item} resetFlip={resetFlip} />
                        ))}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default List;
