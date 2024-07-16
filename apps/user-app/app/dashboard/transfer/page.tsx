
import Image from 'next/image'; // Assuming you're using Next.js Image component
import { Card } from '@repo/ui/card';

export default function PaymentOptions() {
 

 

  return (
    <div className='w-full p-4'>
<Card >
    <div className="flex flex-col w-[30%]">
      <div className="bg-[#dae5f0] p-3 rounded-lg">
        <div className="text-black font-bold text-md mb-2">Payment Options</div>
        <div className="space-y-3">
          {/* UPI Payment Option */}
          <div className="flex items-center space-x-3">
            <Image src="/upi_logo.png" width={40} height={40} alt="UPI Logo" />
            <div className="flex flex-col">
              <div className="text-blue-500 text-sm">UPI Options</div>
              <div className="text-xs text-black">Pay Directly from Your Bank Account</div>
            </div>
          </div>
  
          {/* Credit/Debit Card Payment Option */}
          <div className="flex items-center space-x-3">
            <Image src="/credit_card_icon.png" width={40} height={40} alt="Card Logo" />
            <div className="flex flex-col">
              <div className="text-blue-500 text-sm">Credit/Debit Card</div>
              <div className="text-xs text-black">Pay with your Credit or Debit Card</div>
            </div>
          </div>
  
          {/* Net Banking Payment Option */}
          <div className="flex items-center space-x-3">
            <Image src="/net-banking-icon.png" width={40} height={40} alt="Net Banking Logo" />
            <div className="flex flex-col">
              <div className="text-blue-500 text-sm">Net Banking</div>
              <div className="text-xs text-black">Pay through your Bank's Net Banking</div>
            </div>
          </div>
  
          {/* Gift Card & E-Wallet Payment Option */}
          <div className="flex items-center space-x-3">
            <Image src="/google-pay.png" width={40} height={40} alt="Gift Card Logo" />
            <div className="flex flex-col">
              <div className="text-blue-500 text-sm">Google Pay</div>
              <div className="text-xs text-black">Pay with Google Pay</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
    </div>
    
  

  );
}
