import React from "react";
import Img1 from "../Images/dietImg1.webp";
// import Img2 from "../Images/dietImg2.jpeg";
// import Img3 from "../Images/dietImg3.jpeg";
import { GoArrowUpRight } from "react-icons/go";

import Home2 from "./Home2"
import Home3 from "./Home3"

export default function Home() {
 
  function handler(){
    console.log("Add up signin routes")
  }


  return (

    <div className="min-h-screen flex flex-col  justify-center items-center bg-slate-200 max-sm:mt-16">
    <div className="min-h-screen flex flex-row max-sm:flex-col justify-center items-center gap-6 bg-slate-200">
      <div className="text-center sm:text-left">
        <div className="text-4xl font-bold">
          <p>Manage Your Mile According To You</p>
        </div>
        <div className="text-1xl">
          <p>We help you personalize your diet without compromising on your taste/food habit.</p>
        </div>
        <div className="flex flex-row max-sm:flex-row justify-center sm:justify-start gap-5 m-6">
          <div className="p-4 max-sm:w-32  flex flex-row bg-blue-600 rounded-full items-center hover:bg-blue-800 hover:scale-105 hover:shadow-2xl">
            <div>
              <button className="text-xl max-sm:text-lg" onClick={handler}>Try Chatbot</button>
            </div>
            <div>
              <GoArrowUpRight size={25} className=" max-sm:w-5" />
            </div>
          </div>
          <div className="p-4 max-sm:w-44 flex flex-row bg-white rounded-full items-center hover:scale-105 hover:shadow-2xl">
            <div>
              <button className="text-2xl max-sm:text-lg" onClick={handler}>Manage Mile</button>
            </div>
            <div>
              <GoArrowUpRight size={25} className=" max-sm:w-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="inline-block shadow-2xl hover:border-white max-w-full max-sm:max-w-xs">
          <img src={Img1} alt="dietimage" className="rounded-lg w-full h-auto" />
        </div>
      </div>
    </div>
    
    <div>
      <Home2 />
    </div>
    <div className=" mt-24">
      <Home3 />
    </div>
  </div>
  




    // <div className="min-h-screen flex flex-col justify-center items-center w-screen bg-slate-200">
    //   <div className="min-h-screen flex flex-row justify-center items-center gap-6 w-screen bg-slate-200 ">
    //   <div>
    //     <div className="text-4xl font-bold  ">
    //       <p>Manage Your Mile According To You</p>
    //     </div>
    //     <div className="text-1xl">
    //       <p>
    //         We helps you personalise your diet without compromising on your
    //         taste/food habit.
    //       </p>
    //     </div>
    //     <div className="flex flex-row justify-start gap-5 m-6 ">
    //       <div className=" p-4 flex flex-row bg-blue-600 rounded-full items-center hover:bg-blue-800 hover:scale-105 hover:shadow-2xl">
    //         <div>
    //           <button className=" text-2xl " onClick={handler} >SignUp </button>
    //         </div>
    //         <div>
    //           <GoArrowUpRight size={25} />
    //         </div>
    //       </div>
    //       <div className=" p-4 flex flex-row bg-white rounded-full items-center hover:scale-105 hover:shadow-2xl">
    //         <div>
    //           <button className=" text-2xl "  onClick={handler} >Manage Mile </button>
    //         </div>
    //         <div>
    //           <GoArrowUpRight size={25} />
    //         </div>
    //       </div>
    //     </div>

    //   </div>

    //   <div>
    //     <div className="inline-block shadow-2xl hover:border-white">
    //       <img src={Img1} alt="dietimage" className=" rounded-lg" />
    //     </div>
    //   </div>
    //   </div>
     
    //  <div>
    //    <Home2/>
    //  </div>
    //  <div>
    //   <Home3/>
    //  </div>
    

    // </div>
  );
}
