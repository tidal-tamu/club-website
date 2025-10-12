
export default function Prizes() {
  return (
    <div className="relative px-6 md:px-48 pt-20 flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col justify-center items-center md:w-1/2">
        <span className="text-white font-bungee text-3xl md:text-6xl mb-4">
          PRIZES
        </span>
        <div className="flex flex-row justify-center w-full hover:scale-110 duration-300">
          <div className="flex flex-col items-center bg-[#003132] shadow-lg rounded-xl border-opacity-70 border-8 border-b-[20px] border-[#FFD000] px-10 py-6 w-full">
            <span className="text-white font-inter font-black text-4xl md:text-5xl italic">1st</span>
            <p className="text-white font-inter text-2xl md:text-4xl">insert awesome prize</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-6 w-full">
        <div className="flex flex-col items-center bg-[#003132] shadow-lg rounded-xl border-opacity-70 border-8 border-b-[20px] border-[#DFDFDF] px-10 py-6 w-1/2 hover:scale-110 duration-300">
          <span className="text-white font-inter font-black text-4xl md:text-5xl italic">2nd</span>
          <p className="text-white font-inter text-2xl md:text-4xl">insert awesome prize</p>
        </div>
        <div className="flex flex-col items-center bg-[#003132] shadow-lg rounded-xl border-opacity-70 border-8 border-b-[20px] border-[#846914] px-10 py-6 w-1/2 hover:scale-110 duration-300">
          <span className="text-white font-inter font-black text-4xl md:text-5xl italic">3rd</span>
          <p className="text-white font-inter text-2xl md:text-4xl">insert awesome prize</p>
        </div>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 justify-center gap-6 w-full">
        <div className="flex flex-col items-center bg-[#003132] shadow-lg rounded-xl border-opacity-70 border-8 border-[#1E4F3E] px-10 py-6 hover:scale-110 duration-300">
          <div className="flex flex-row gap-3 items-center">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#4f7f6f"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0H24V24H0z"></path> <path d="M6 2c2.69 0 5.024 1.517 6.197 3.741C13.374 4.083 15.31 3 17.5 3H21v2.5c0 3.59-2.91 6.5-6.5 6.5H13v1h5v7c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2v-7h5v-2H9c-3.866 0-7-3.134-7-7V2h4zm10 13H8v5h8v-5zm3-10h-1.5C15.015 5 13 7.015 13 9.5v.5h1.5c2.485 0 4.5-2.015 4.5-4.5V5zM6 4H4c0 2.761 2.239 5 5 5h2c0-2.761-2.239-5-5-5z"></path> </g> </g></svg>
            <span className="text-white font-inter font-black text-xl md:text-3xl text-center">Sustainability Track</span>
          </div>
          <p className="text-white font-inter text-md md:text-xl">insert track description and awesome prize</p>
        </div>
        <div className="flex flex-col items-center bg-[#003132] shadow-lg rounded-xl border-8 px-10 py-6 border-t-red-500 border-r-blue-500 border-b-green-500 border-l-[#FBBC05] hover:scale-110 duration-300">

          <div className="flex flex-row gap-3 items-center">
            <img src="/f25/Gemini.png" className="h-14" />
            <span className="text-white font-inter font-black text-xl md:text-3xl text-center">Gemini Track</span>
          </div>
          <p className="text-white font-inter text-md md:text-xl">insert track description and awesome prize</p>
        </div>
        <div className="flex flex-col items-center bg-[#003132] shadow-lg rounded-xl border-opacity-70 border-8 border-[#AE4DFF] px-10 py-6 hover:scale-110 duration-300">
          <div className="flex flex-row gap-3 items-center">
            <img src="/f25/Figma.png" className="h-14" />
            <span className="text-white font-inter font-black text-xl md:text-3xl">UI/UX Track</span>
          </div>
          <p className="text-white font-inter text-md md:text-xl">insert track description and awesome prize</p>
        </div>
      </div>
    </div>
  );
}
