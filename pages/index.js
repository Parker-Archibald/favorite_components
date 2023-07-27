import Components from "@/components/Components";


export default function Home() {
  return (
    <div className="w-full h-[100vh] overflow-y-scroll bg-gray-700 text-white pb-10">
      <header className="text-center mt-10 text-6xl font-bold mb-10">
        Favorite Components
      </header>
        <div className="flex flex-col items-center md:flex-row mx-6 gap-x-10 flex-wrap justify-center">
          <Components title={'Pricing Card'} image={'/pricingcard.png'}
          desc={'Monthly and Annually subscription cards'} link='/PricingCard'/>
          <Components title={'OTP Verification'} image={'/otpverification.png'}
          desc={"Sends verification code to user's email which can be verified."} link='/VerifyEmail'/>
          <Components title={'Multi-Search'} image={'/multisearch.png'}
          desc={"Allows user to select multiple search parameters."} link='/MultiSearch'/>
          <Components title={'Stars'} image={'/stars.png'}
          desc={"Allows user to select multiple search parameters."} link='/Stars'/>
          <Components title={'Multi Step Form'} image={'/multistepform.png'}
          desc={"Gathers information through multiple steps."} link='/MultiStepForm'/>
          <Components title={'Calculator'} image={'/calculator.png'}
          desc={"Allows users to compute several calculations."} link='/Calculator'/>
        </div>
    </div>
  )
}
