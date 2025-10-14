
export default function Prizes() {
  return (
    <div className="relative px-6 lg:px-12 xl:px-24 pt-20 flex flex-col justify-center items-center gap-6 max-w-7xl mx-auto">
      <div className="flex flex-col justify-center items-center w-full">
        <span className="text-white font-bungee text-3xl md:text-5xl lg:text-6xl mb-8 text-center">
          PRIZES
        </span>
        
        <div className="flex flex-row justify-center w-full mb-6">
          <div className="flex flex-col items-center bg-[#003132] shadow-lg rounded-xl border-opacity-70 border-4 sm:border-6 lg:border-8 border-b-[12px] sm:border-b-[16px] lg:border-b-[20px] border-[#FFD000] px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 w-full hover:scale-105 duration-300">
            <span className="text-white font-inter font-black text-3xl sm:text-4xl lg:text-5xl italic">1st</span>
            <p className="text-white font-inter text-lg sm:text-xl md:text-3xl lg:text-4xl text-center">Samsung "24 Monitor</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full mb-6">
          <div className="flex flex-col items-center bg-[#003132] shadow-lg rounded-xl border-opacity-70 border-4 sm:border-6 lg:border-8 border-b-[12px] sm:border-b-[16px] lg:border-b-[20px] border-[#DFDFDF] px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 w-full sm:w-1/2 hover:scale-105 duration-300">
            <span className="text-white font-inter font-black text-2xl sm:text-3xl lg:text-4xl md:text-5xl italic">2nd</span>
            <p className="text-white font-inter text-base sm:text-lg md:text-2xl lg:text-4xl text-center">JBL 770NC Headphones</p>
          </div>
          <div className="flex flex-col items-center bg-[#003132] shadow-lg rounded-xl border-opacity-70 border-4 sm:border-6 lg:border-8 border-b-[12px] sm:border-b-[16px] lg:border-b-[20px] border-[#846914] px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 w-full sm:w-1/2 hover:scale-105 duration-300">
            <span className="text-white font-inter font-black text-2xl sm:text-3xl lg:text-4xl md:text-5xl italic">3rd</span>
            <p className="text-white font-inter text-base sm:text-lg md:text-2xl lg:text-4xl text-center">Mini Projector</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4 sm:gap-6 w-full">
          <div className="flex flex-col items-center bg-[#003132] shadow-lg rounded-xl border-opacity-70 border-4 sm:border-6 lg:border-8 border-[#1E4F3E] px-4 sm:px-6 lg:px-10 py-4 sm:py-5 lg:py-6 hover:scale-105 duration-300">
            <div className="flex flex-row gap-2 sm:gap-3 items-center mb-2">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#4f7f6f" className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0H24V24H0z"></path> <path d="M6 2c2.69 0 5.024 1.517 6.197 3.741C13.374 4.083 15.31 3 17.5 3H21v2.5c0 3.59-2.91 6.5-6.5 6.5H13v1h5v7c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2v-7h5v-2H9c-3.866 0-7-3.134-7-7V2h4zm10 13H8v5h8v-5zm3-10h-1.5C15.015 5 13 7.015 13 9.5v.5h1.5c2.485 0 4.5-2.015 4.5-4.5V5zM6 4H4c0 2.761 2.239 5 5 5h2c0-2.761-2.239-5-5-5z"></path> </g> </g></svg>
              <span className="text-white font-inter font-black text-sm sm:text-base md:text-2xl lg:text-3xl text-center">Sustainability Track</span>
            </div>
            <p className="text-white font-inter text-sm sm:text-base lg:text-md md:text-lg lg:text-xl text-center">Chrysanthemum Legos</p>
          </div>
          
          <div className="flex flex-col items-center bg-[#003132] shadow-lg rounded-xl border-4 sm:border-6 lg:border-8 px-4 sm:px-6 lg:px-10 py-4 sm:py-5 lg:py-6 border-t-red-500 border-r-blue-500 border-b-green-500 border-l-[#FBBC05] hover:scale-105 duration-300">
            <div className="flex flex-row gap-2 sm:gap-3 items-center mb-2">
              <img src="/f25/Gemini.png" className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
              <span className="text-white font-inter font-black text-sm sm:text-base lmd:text-2xl lg:text-3xl text-center">Gemini Track</span>
            </div>
            <p className="text-white font-inter text-sm sm:text-base lg:text-md md:text-lg lg:text-xl text-center">Google Swag and MLH Bundle</p>
          </div>
          
          <div className="flex flex-col items-center bg-[#003132] shadow-lg rounded-xl border-opacity-70 border-4 sm:border-6 lg:border-8 border-[#AE4DFF] px-4 sm:px-6 lg:px-10 py-4 sm:py-5 lg:py-6 hover:scale-105 duration-300 sm:col-span-2 lg:col-span-1">
            <div className="flex flex-row gap-2 sm:gap-3 items-center mb-2">
              <img src="/f25/Figma.png" className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
              <span className="text-white font-inter font-black text-sm sm:text-base lg:text-xl md:text-2xl lg:text-3xl text-center">UI/UX Track</span>
            </div>
            <p className="text-white font-inter text-sm sm:text-base lg:text-md md:text-lg lg:text-xl text-center">$50 Figma Credits</p>
          </div>
        </div>
      </div>
    </div>
  );
}
