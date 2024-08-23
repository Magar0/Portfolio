import React from "react";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const SliderButtons = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();

  return (
    <div className="xl:justify-none absolute bottom-[calc(50%_-_22px)] right-0 z-20 flex w-full justify-between gap-2 xl:bottom-0 xl:w-max">
      <button
        className="flex w-[44px] items-center justify-center bg-accent py-1 text-[22px] text-primary transition-all hover:bg-accent-hover"
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold />
      </button>
      <button
        className="flex w-[44px] items-center justify-center bg-accent py-2 text-[22px] text-primary transition-all hover:bg-accent-hover"
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold />
      </button>
    </div>
  );
};

export default SliderButtons;
