import React, { useState } from "react";
import {
  MaskGroup1,
  MaskGroup2,
  MaskGroup3,
  MaskGroup4,
  MaskGroup5,
} from "../assets";
import { SendIcon } from "../assets";

const QUICK_TRANSFER_DATA = [
  {
    img: MaskGroup1,
    name: "Livia Bator",
    designation: "CEO",
  },
  {
    img: MaskGroup2,
    name: "Randy Press",
    designation: "Director",
  },
  {
    img: MaskGroup3,
    name: "Workman",
    designation: "Designer",
  },
  {
    img: MaskGroup4,
    name: "Workman",
    designation: "Designer",
  },
  {
    img: MaskGroup5,
    name: "Workman",
    designation: "Designer",
  },
];

const QuickTransferSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < QUICK_TRANSFER_DATA.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex flex-col justify-between h-full py-11 px-4 sm:px-4 lg:px-4 bg-white rounded-3xl whitespace-nowrap">
      <div className="relative">
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 py-3 px-5 bg-gray-200 rounded-full shadow-md"
          >
            &lt;
          </button>
        )}
        {currentIndex < QUICK_TRANSFER_DATA.length - 3 && (
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 py-3 px-5 bg-gray-200 rounded-full shadow-md"
          >
            &gt;
          </button>
        )}

        <div className="flex gap-6 py-4 px-4 sm:px-6 md:px-12">
          {QUICK_TRANSFER_DATA.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 text-center w-32 md:w-20   transition-transform duration-300 ${
                index >= currentIndex && index < currentIndex + 3
                  ? "block" // Show item if it's in the current range
                  : "hidden" // Hide item if it's out of the range
              }`}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto mb-2"
              />
              <h4 className="font-semibold text-gray-700 text-sm sm:text-base">
                {item.name}
              </h4>
              <p className="text-xs sm:text-sm text-gray-500">
                {item.designation}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <p className="text-sm font-medium text-gray-600 whitespace-nowrap">
          Write Amount
        </p>
        <div className="relative flex items-center w-full sm:w-64">
          <input
            type="text"
            placeholder="525.50"
            className="w-full text-base px-8 py-4 bg-gray-100 rounded-full border border-none focus:outline-none"
          />
          <button className="absolute right-0 top-0 px-8 py-4 bg-black rounded-full flex items-center justify-center gap-2">
            <p className="text-base text-white">Send</p>
            <img
              src={SendIcon}
              alt="Send"
              className="cursor-pointer h-[22px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransferSlider;
