"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string ;
  onClick?:() => void;
  bgcolor?:string;
  color?:string;
}

export const Button = ({ children, className, onClick, bgcolor = "bg-[#5741d7]", color="text-white"}: ButtonProps) => {
  return (
    <button
      className={`${bgcolor} ${color}  p-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
