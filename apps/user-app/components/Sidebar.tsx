"use client";

import {
  ArrowsRightLeftIcon,
  Cog6ToothIcon,
  CurrencyRupeeIcon,
  GiftIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className=" w-[15%] flex items-center flex-col h-[100%] border border-[#ece8ea] p-[1%]">
      <Link href="/dashboard/home" className="w-full">
        <div className="flex justify-start items-center w-full h-[5vh] p-2 cursor-pointer text-primary-color rounded-md hover:bg-[#5741d7] hover:text-white">
          <HomeIcon className="h-full" />
          <div className="ml-2 hidden lg:block">Home</div>
        </div>
      </Link>
      <Link href="/dashboard/explore" className="w-full">
        <div className="flex justify-start items-center w-full h-[5vh] p-2 cursor-pointer text-primary-color rounded-md hover:bg-[#5741d7] hover:text-white">
          <MagnifyingGlassIcon className="h-full" />
          <div className="ml-2 hidden lg:block">Explore</div>
        </div>
      </Link>
      <Link href="/dashboard/rewards" className="w-full">
        <div className="flex justify-start items-center w-full h-[5vh] p-2 cursor-pointer text-primary-color rounded-md hover:bg-[#5741d7] hover:text-white">
          <GiftIcon className="h-full" />
          <div className="ml-2 hidden lg:block">Rewards</div>
        </div>
      </Link>
      <Link href="/dashboard/transfer" className="w-full">
        <div className="flex justify-start items-center w-full h-[5vh] p-2 cursor-pointer text-primary-color rounded-md hover:bg-[#5741d7] hover:text-white">
          <ArrowsRightLeftIcon className="h-full" />
          <div className="ml-2 hidden lg:block">Transfer</div>
        </div>
      </Link>
      <Link href="/dashboard/transactions" className="w-full">
        <div className="flex justify-start items-center w-full h-[5vh] p-2 cursor-pointer text-primary-color rounded-md hover:bg-[#5741d7] hover:text-white">
          <CurrencyRupeeIcon className="h-full" />
          <div className="ml-2 hidden lg:block">Transactions</div>
        </div>
      </Link>
      <Link href="/dashboard/settings" className="w-full">
        <div className="flex justify-start items-center w-full h-[5vh] p-2 cursor-pointer text-primary-color rounded-md hover:bg-[#5741d7] hover:text-white">
          <Cog6ToothIcon className="h-full" />
          <div className="ml-2 hidden lg:block">Settings</div>
        </div>
      </Link>
    </div>
  );
}
