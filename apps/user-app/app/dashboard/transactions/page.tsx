import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import Transaction from '@repo/ui/transaction'

export default function Transactions() {
  return (
    <div className="p-4 h-full flex flex-col">
      <div className="text-xl">Transactions</div>
      <div className="flex items-center py-2 ">
        <Button bgcolor="bg-white" color="text-black" className="rounded-3xl">
          History
        </Button>
        <Button color="text-black" bgcolor="bg-[#f9f7f6]">
          Scheduled
        </Button>
      </div>
      <Card className="h-full">
        <div className="flex justify-between">
            <div className="flex justify-between items-center w-full">
            <div>Transactions</div>
          <div>
            <Button bgcolor="bg-gray-200" color="text-black" className="rounded-lg flex justify-center items-center">
              <ArrowDownIcon height={"1em"}/>
              <div>Export</div>
            </Button>
          </div>
            </div>
          
        </div>
        <div>
        <Transaction type="Withdraw" />
        <Transaction type="Deposit" />
        <Transaction type="Deposit" />
        <Transaction type="Deposit" />
        <Transaction type="Withdraw" />
        <Transaction type="Withdraw" />
        </div>
      </Card>
    </div>
  );
}
