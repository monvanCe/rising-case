import { colors } from '@/const/colors';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';

import React from 'react';

export default function CustomDropdown({
  options,
  value,
  onChange,
}: Readonly<{
  options: string[];
  value: string;
  onChange: (value: string) => void;
}>) {
  const [isOpen, setIsOpen] = React.useState(false);
  const textColor = isOpen ? colors.light.primary : colors.light.text;

  return (
    <div
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className="shadow-md bg-white rounded cursor-pointer relative"
    >
      <div className="px-2 py-1 flex gap-2">
        <span style={{ color: textColor }} className="text-sm select-none">
          Actions
        </span>
        {isOpen ? (
          <IconChevronUp color={textColor} />
        ) : (
          <IconChevronDown color={textColor} />
        )}
      </div>
      {isOpen && (
        <div
          style={{
            width: '100%',
            backgroundColor: 'white',
            position: 'absolute',
            zIndex: 10,
            top: 25,
          }}
          className="shadow-md rounded-md"
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="px-2 py-1 cursor-pointer hover:bg-gray-100 text-[10px] text-center text-slate-400"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
