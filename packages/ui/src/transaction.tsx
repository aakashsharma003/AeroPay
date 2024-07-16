import React from "react"

interface TransactionProps{
    type:string;
    time?:string;
    transactionID?:string;
}

export default function Transaction({type, time = "Jul 16,2024, 05:18", transactionID="UO75F36BY3D2"}:TransactionProps){
    return <div className="w-full flex justify-between">
        <div className="flex w-[15%] justify-between items-center">
        <div className="bg-[#5741d7] text-white rounded-full w-[30px] h-[30px] text-xl flex justify-center items-center">&#8377;</div>
            <div className="flex justify-between flex-col">
     
                <div>{type}</div>
                <div>{time}</div>
            </div>
        </div>
             
            <div className="flex flex-col">
                <div>{transactionID}</div>
            </div>
    </div>
}