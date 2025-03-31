import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex flex-col gap-4 justify-center text-white h-[44vh] items-center">
      <div className=" flex gap-2 items-center text-5xl font-bold">
        Buy me a Chai <span><img src="./chai.gif" className="w-20" /></span>
      </div>
      <p>
      Chai ho ya rishta, initiative tumhe hi lena padega!
      </p>
      <div>
      <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
      <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10"></div>
    <div className="text-white font-bold text-center container">
      <h1 className="text-2xl">Your friends can buy you a chai</h1>
      <div className="flex my-8 gap-5 justify-around">
        <div className="item">
          <img className="w-25 bg-white rounded-full" src="./hamster.png" alt="" />
          <p className="text-center font-bold">fund yourself</p>
        </div>
        <div className="item">
          <img className="w-25 bg-white rounded-full" src="./hamster.png" alt="" />
          <p className="text-center font-bold">fund yourself</p>
        </div>
        <div className="item">
          <img className="w-25 bg-white rounded-full" src="./hamster.png" alt="" />
          <p className="text-center font-bold">fund yourself</p>
        </div>
      </div>
    </div>
    </>
  );
}
