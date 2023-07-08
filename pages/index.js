import Components from "@/components/Components";


export default function Home() {
  return (
    <div className="w-full h-[100vh] overflow-y-scroll bg-gray-700 text-white pb-10">
      <header className="text-center mt-10 text-2xl">
        Favorite Components
      </header>
        <div className="flex flex-col items-center md:flex-row md:space-x-10 mx-6 justify-center">
          <Components title={'Pricing Card'} image={'/pricingcard.png'}
          desc={'Monthly and Annually subscription cards'} link='/PricingCard'/>
          <Components title={'OTP Verification'} image={'/otpverification.png'}
          desc={"Sends verification code to user's email which can be verified."} link='/VerifyEmail'/>
          <Components title={'Multi-Search'} image={'/multisearch.png'}
          desc={"Allows user to select multiple search parameters."} link='/MultiSearch'/>
        </div>
    </div>
  )
}
