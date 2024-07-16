import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";

export default function Settings(){
    return <div className="w-full p-4">
        <div className="font-bold text-xl">Account</div>
        <div className="w-full my-2">
            <Button bgcolor="bg-white" color="text-black" className="rounded-xl">Settings</Button>
            <Button color="text-black" bgcolor="bg-secondary-color">Security</Button>
            <Button color="text-black" bgcolor="bg-secondary-color">Verification</Button>
            <Button color="text-black" bgcolor="bg-secondary-color">Documents</Button>
        </div>
        <Card><h1>Personal info</h1>
          <div>
            <div>
                <div>UPI ID</div>

            </div>
          </div>
        </Card>
        <Card>Preferences</Card>
    </div>
}