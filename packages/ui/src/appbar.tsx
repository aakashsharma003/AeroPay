"use client";

import { useState } from "react";
import { BellAlertIcon, QuestionMarkCircleIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Button } from "./button";

interface AppbarProps {
  className?: string;
  logo?: string;
}

export const Appbar = ({ className = "", logo }: AppbarProps) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleNotifications = () => {
    setShowHelp(false);
    setShowProfile(false);
    setShowNotifications(!showNotifications)}
  ;
  const toggleHelp = () => {
    setShowNotifications(false);
    setShowProfile(false);
    setShowHelp(!showHelp);
  }
  const toggleProfile = () =>{
    setShowHelp(false);
    setShowNotifications(false);
    setShowProfile(!showProfile);
  }

  return (
    <div className={`w-full flex justify-between items-center ${className}`}>
      <div className="font-bold text-xl">{logo}</div>
      
      <div className="flex justify-center items-center space-x-4 w-[18%] h-[100%]">
        <Button className="rounded-xl font-semibold text-base">Upgrade</Button>
        
        {/* Notification Bell */}
        <div className="relative">
          <BellAlertIcon
            className="h-6 w-6 cursor-pointer"
            onClick={toggleNotifications}
          />
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-2 z-10 border border-gray-200">
              {/* Dummy Notification Content */}
              <div className="text-sm text-gray-700 p-2 hover:bg-gray-100 rounded-md">Notification 1</div>
              <div className="text-sm text-gray-700 p-2 hover:bg-gray-100 rounded-md">Notification 2</div>
              <div className="text-sm text-gray-700 p-2 hover:bg-gray-100 rounded-md">Notification 3</div>
            </div>
          )}
        </div>
        
        {/* Help Circle */}
        <div className="relative">
          <QuestionMarkCircleIcon
            className="h-6 w-6 cursor-pointer"
            onClick={toggleHelp}
          />
          {showHelp && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-2 z-10 border border-gray-200">
              {/* Dummy Help Content */}
              <div className="text-sm text-gray-700 p-2 hover:bg-gray-100 rounded-md">Help Topic 1</div>
              <div className="text-sm text-gray-700 p-2 hover:bg-gray-100 rounded-md">Help Topic 2</div>
              <div className="text-sm text-gray-700 p-2 hover:bg-gray-100 rounded-md">Help Topic 3</div>
            </div>
          )}
        </div>
        
        {/* User Profile */}
        <div className="relative">
          <UserCircleIcon
            className="h-6 w-6 cursor-pointer"
            onClick={toggleProfile}
          />
          {showProfile && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-2 z-10 border border-gray-200">
              {/* Dummy Profile Content */}
              <div className="text-sm text-gray-700 p-2 hover:bg-gray-100 rounded-md">Profile</div>
              <div className="text-sm text-gray-700 p-2 hover:bg-gray-100 rounded-md">Settings</div>
              <div className="text-sm text-gray-700 p-2 hover:bg-gray-100 rounded-md">Logout</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
