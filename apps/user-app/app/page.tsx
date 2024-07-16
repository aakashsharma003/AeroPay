import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";


export default function Home() {
  return (
   <div className="text-3xl bg-gray-200 flex justify-center items-center flex-col">
    <div>hello</div>
     <Button appName="user-app" className="bg-black cursor-pointer rounded-md text-white p-2">click me</Button>
   </div>
  
  );
}
