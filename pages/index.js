import Components from "@/components/Components";


export default function Home() {
  return (
    <div className="w-full h-[100vh] overflow-y-scroll bg-gray-700 text-white pb-10">
      <header className="text-center mt-10 text-2xl">
        Favorite Components
      </header>
        <div className="flex flex-col items-center">
          <Components title={'Pricing Card'} image={'/pricingcard.png'}
          desc={'Monthly and Annually subscription cards'}/>
          <Components title={'OTP Verification'} image={'/otpverification.png'}
          desc={"Sends verification code to user's email which they can then verify."}/>
        </div>
    </div>
  )
}
