import Components from "@/components/Components";


export default function Home() {

  return (
    <div className="w-full overflow-y-scroll pb-10 flex justify-center scrollbar-hide">
      <div className="max-w-7xl my-10">
        <header className="text-center mt-10 text-5xl font-bold mb-10">
          Favorite Components
        </header>

        <div className="fixed inset-x-0 top-20 lg:-top-48 lg:-left-48 transform-gpu -z-20 overflow-hidden blur-2xl lg:blur-3xl" aria-hidden='true'>
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-600 to-[#9D5324]
              opacity-30 sm:left-[calc(50%-30rem] sm:w-[72.1875rem]"
                style={{
                  clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }} />
          </div>

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

          <div className="fixed inset-x-0 left-20 top-[calc(110%-14rem)] lg:left-0 lg:top-[calc(80%-14rem)] -z-20 transform-gpu overflow-hidden blur-2xl sm:top-[calc(100%30rem)] lg:blur-3xl" aria-hidden='true'>
            <div className="relative left[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-rose-600 to-amber-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
              }} />
          </div>
                
      </div>
    </div>
  )
}
