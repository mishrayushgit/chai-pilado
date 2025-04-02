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
    <div className="text-white text-center container py-16">
      <h2 className="text-3xl font-bold">Your Friends can buy you a chai</h2>
      <div className="flex my-8 gap-5 items-center justify-around">
      <div className="item flex flex-col justify-center items-center">
          <img className="w-20 bg-white rounded-full" src="./hamster.png" alt="" />
          <p className="text-center py-2 font-bold">Your fans wants to help</p>
          <p className="text-center">Your fans are available to help you</p>
        </div>
        <div className="item flex flex-col justify-center items-center">
          <img className="w-20 bg-white rounded-full" src="./coin.gif" alt="" />
          <p className="text-center py-2 font-bold">Your fans wants to help</p>
          <p className="text-center">Your fans are available to help you</p>
        </div>
        <div className="item flex flex-col justify-center items-center">
          <img className="w-20 bg-white rounded-full" src="./people.gif" alt="" />
          <p className="text-center py-2 font-bold">Your fans wants to help</p>
          <p className="text-center">Your fans are available to help you</p>
        </div>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10 "></div>
    <div className="text-white text-center container py-16">
      <h2 className="text-3xl font-bold mb-20">Know more about us</h2>
      <div className="item flex flex-col justify-center items-center">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/4hILUXdGRZI?si=AC7-wmU5KNMUwdZ0&amp;start=18" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
    
    </>
  );
}
