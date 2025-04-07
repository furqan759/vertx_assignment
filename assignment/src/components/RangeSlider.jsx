import React, { useEffect, useState } from 'react';

export const RangerSlider = ({title = '', demographicPercent, barColor = 'white'}) => {
  const [value, setValue] = useState(demographicPercent);

  // useEffect(() => {
  //   demographicPercent && setValue(demographicPercent)
  // }, [demographicPercent])
  

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <label htmlFor="slider" className={`block mb-2 relative top-[8px] ${title ? "flex justify-between" : "text-right"} font-semibold text-white`}>
        {title && title} <span className="text-gray-200">{value}</span>
      </label>
     <input
        type="range"
        min="0"
        max="100"
        value={value}
        className="w-full relative bottom-[5px] h-2 bg-gray-200 rounded-lg appearance-none"
        style={{
          background: `linear-gradient(to right, ${barColor} 0%, ${barColor} ${value}%, #e5e7eb ${value}%, #e5e7eb 100%)`,
        }}
      />
    </div>
  );
};
