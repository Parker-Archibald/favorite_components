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
          <Components title={'Calendar'} image={'/calendar.png'}
          desc={"Calendar page where you can add events."} link='/Calendar'/>
          <Components title={'Weather app'} image={'/weather.png'}
          desc={"Weather app that uses geolocation."} link='/Weather'/>
          <Components title={'Accordian Menu'} image={'/accordian.png'}
          desc={"Accordian menu to display certain items."} link='/AccordianMenu'/>
          <Components title={'Tic Tac Toe'} image={'/tictactoe.png'}
          desc={"A classic Tic Tac Toe game."} link='/tictactoe'/>
          <Components title={'Random Quote Generator'} image={'/randomQuote.png'}
          desc={"Generate a random quote that can be copied or listened to."} link='/RandomQuote'/>
          <Components title={'Tip Calculator'} image={'/tipCalculator.png'}
          desc={"Calculate your tip and divide the total among friends."} link='/TipCalculator'/>
          <Components title={'Launch Countdown'} image={'/launchcountdown.png'}
          desc={"Calculates days, hours and minutes until January 1st."} link='/Launch'/>
          <Components title={'Navigation bar'} image={'/navigation.png'}
          desc={"Responsive navigation bar."} link='/Navigation'/>
          <Components title={'Todo App'} image={'/todo.png'}
          desc={"Allows user to make a list of Todo's with full CRUD functionality."} link='/Todo'/>
        </div>
    </div>
  )
}
