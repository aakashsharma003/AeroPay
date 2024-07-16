import { Card } from "@repo/ui/card";
import Image from "next/image";

export default function Reward() {
  return (
    <div className="p-4">
      <div className="text-xl font-bold">Rewards</div>
      <div className="flex">
      <Card className="rounded-md m-2 ">
        <Image
          src={"/purple-gift-box.jpg"}
          alt="purple-gift-icon"
          width={100}
          height={100}
          className="w-[100%] rounded-md"
        />
        <div>
          Lorem ipsum 
        </div>
      </Card>
      <Card className="rounded-md m-2">
        <Image
          src={"/purple-gift-box.jpg"}
          alt="purple-gift-icon"
          width={100}
          height={100}
           className="w-[100%] rounded-md"
        />
        <div>
          Lorem ipsum 
        </div>
      </Card>
      <Card className="rounded-md m-2">
        <Image
          src={"/purple-gift-box.jpg"}
          alt="purple-gift-icon"
          width={100}
          height={100}
                 className="w-[100%] rounded-md"
        />
        <div>
          Lorem ipsum 
        </div>
      </Card>
      <Card className="rounded-md m-2">
        <Image
          src={"/purple-gift-box.jpg"}
          alt="purple-gift-icon"
          width={100}
          height={100}
                 className="w-[100%] rounded-md"
        />
        <div>
          Lorem ipsum 
        </div>
      </Card>
      <Card className="rounded-md m-2">
        <Image
          src={"/purple-gift-box.jpg"}
          alt="purple-gift-icon"
          width={100}
          height={100}
                 className="w-[100%] rounded-md"
        />
        <div>
          Lorem ipsum 
        </div>
      </Card>
      <Card className="rounded-md m-2">
        <Image
          src={"/purple-gift-box.jpg"}
          alt="purple-gift-icon"
          width={100}
          height={100}
                 className="w-[100%] rounded-md"
        />
        <div>
          Lorem ipsum 
        </div>
      </Card>
      <Card className="rounded-md m-2">
        <Image
          src={"/purple-gift-box.jpg"}
          alt="purple-gift-icon"
          width={100}
          height={100}
                 className="w-[100%] rounded-md"
        />
        <div>
          Lorem ipsum 
        </div>
      </Card>
      </div>
      
    </div>
  );
}
