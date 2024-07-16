import { Appbar } from "@repo/ui/appbar"
import Sidebar from "../../components/Sidebar"

import React from "react"
export default function Layout({children}:{children:React.ReactNode}){
   return <div className="bg-[#f9f7f6] text-[#5741d7] h-screen">
    <Appbar className="w-full h-[9vh] border border-[#ece8ea] rounded-md flex justify-between items-center px-4" logo="Aeropay"/>
    <div className="flex h-[91vh]">
     <Sidebar/> 
      <div className="w-full">{children}</div>
      </div>
   </div>
}