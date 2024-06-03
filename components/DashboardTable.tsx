import { useAppSelector } from '@/store/store';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import CustomDropdown from './CustomDropdown';

export default function DashboardTable() {
  const state = useAppSelector((state) => state.dashboard);
  const { table } = state;

  const dateFormatter = (date: string) => {
    //format date to dd month yyyy
    const d = new Date(date);
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    return `${day} ${month} ${year}`;
  };

  return (
    <div className="max-w-[890px] m-auto bg-white mt-6 pt-6 rounded-md">
      <div className="text-md mb-6 ml-6">Transaction History</div>
      <div className="grid grid-cols-7 w-full mt-3 pb-3">
        <div className="text-center text-sm text-black">Type</div>
        <div className="text-center text-sm text-black">Location</div>
        <div className="text-center text-sm text-black">Rental Period</div>
        <div className="text-center text-sm text-black">Number of IP</div>
        <div className="text-center text-sm text-black">SpesificPuspose</div>
        <div className="text-center text-sm text-black">Date</div>
        <div className="text-center text-sm text-black">Actions</div>
      </div>
      {table.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-7 max-w-[890px] m-auto border-b border-gray-100 mt-3 pb-3"
        >
          <div className="text-center text-sm text-black font-extralight">
            {item.type}
          </div>
          <div className="text-center text-sm text-black font-extralight">
            {item.location}
          </div>
          <div className="text-center text-sm text-black font-extralight">
            {item.rental}
          </div>
          <div className="text-center text-sm text-black font-extralight">
            {item.ipcount}
          </div>
          <div className="text-center text-sm text-black font-extralight">
            {item.purpose}
          </div>
          <div className="text-center text-sm text-black font-extralight">
            {dateFormatter(item.date)}
          </div>
          <div className="place-self-center">
            <CustomDropdown
              value=""
              options={['Processing', 'In Progress', 'Completed']}
              onChange={() => {
                console.log(item.ipcount);
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
