import { ArrowDownTrayIcon, ArrowPathIcon, ArrowUpOnSquareIcon, MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { MinusIcon } from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import Image from "next/image";

export default function Home(){
    return <div className="w-full p-3 h-full">
        <div className="font-bold text-xl">Good afternoon, Alex</div>
        <div className="w-full h-[80%] flex">
            <Card className="w-[70%] h-[100%] ">
                <div className="w-full flex flex-col h-full justify-between">
                    <div className="flex flex-col justify-between">
                    <div className="text-base text-gray-600">Portfolio value</div>
                    <div className="text-2xl text-gray-800"><span className=" text-gray-600">&#8377;</span>0.00</div>
                    </div>
                    <div className="border border-[#5741d7]"></div>
                    <div className="flex justify-between items-center">
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center flex-col">
                         <Button className="rounded-full mx-1"><PlusIcon height={"2em"} /></Button>
                         <div>Buy</div>
                        </div>
                        <div className="flex justify-center items-center flex-col">

                       <Button className="rounded-full mx-1"><MinusIcon height={"2em"}/></Button>
                       <div>Sell</div>
                        </div>
                        <div className="flex justify-center items-center flex-col">

                       <Button className="rounded-full mx-1"><ArrowPathIcon height={"2em"}/></Button>
                       <div>Convert</div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center ">
                        <div className="flex justify-center items-center flex-col">

                        <Button className="rounded-full" bgcolor="bg-[#e9e7fb]" color="text-[#5741d7]"><ArrowDownTrayIcon height={"2em"}/></Button>
                        <div>Deposit</div>
                        </div>
                        <div className="flex justify-center items-center flex-col">

                        <Button className="rounded-full" bgcolor="bg-[#e9e7fb]" color="text-[#5741d7]"><ArrowUpOnSquareIcon height={"2em"}/></Button>
                        <div>Withdraw</div>
                        </div>
                    </div>
                    </div>
                </div>
            </Card>
            <Card className="w-[25%] mx-[5%] h-[70%] flex flex-col justify-between items-center">
                <div className="w-[100%]">

                <Image src="/gift-image.jpg" alt="discount-poster" width={100} height={80} className="rounded-md w-[100%]"></Image>
                </div>
                <Button bgcolor="bg-white" color="bg-[#5741d7]" className="border border-[#5741d7] rounded-md p-1 m-1">New</Button>
                <div className="font-bold text-lg">Get Upto 25%</div>
                 <Button bgcolor="bg-[#e9e7fb]" color="text-[#5741d7]" className="w-[100%] rounded-md " >Get Started</Button>
</Card>
        </div>
    </div>
}