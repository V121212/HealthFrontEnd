import Bmi from "./Components/Bmi";
import Home1 from "./pages/Home1";
import NavBar from "./Components/NavBar";
import CaloriCounter from "./Components/CaloriCounter";
import AllGymWork from "./pages/AllGymWork";
import AllYogas from "./pages/AllYogas";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import Tracker from "./pages/Tracker";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import ProtectedRoute from "./Components/ProtectedRoute";

// import Home2 from "./Components/Home2";
// import Home3 from "./Components/Home3";
// import Graphs from "./Components/Graphs";
// import WorkOutExcercise from "./Components/WorkOutExcercise";


// NON imp
// import Timer from "./Components/Timer";
// import Demo from "./trash/Demo";
// import { useState } from "react";
// import imge from "../src/Images/bmiImg.jpg";


import {  Route, Routes } from "react-router-dom";
function App() {

  // const [isScaled, setIsScaled] = useState(false);

  // const handleClick = () => {
  //   setIsScaled(!isScaled);
  // };

  return (
    <div className=" overflow-x-hidden">
      <NavBar/>
      <Routes>
         <Route path="/" element={<Home1 />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/yoga" element={ <ProtectedRoute  Compo={AllYogas} />} />
         <Route path="/gym" element={ <ProtectedRoute  Compo={AllGymWork} />} />
         <Route path="/calori_counter" element={<CaloriCounter />} />
         <Route path="/bmi" element={ <ProtectedRoute  Compo={Bmi} />} />
         <Route path="/account" element={ <ProtectedRoute  Compo={Account} />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/tracker" element={<Tracker />} />
         <Route path="*" element={<div>404 PageNotFound</div>} />
      </Routes>


      {/* <Home1 /> */}
      {/* <Home2 /> */}
      {/* <Home3 /> */}
      {/* <Graphs /> */}
      {/* <Bmi /> */}
      {/* < CaloriCounter /> */}


      {/* <AllGymWork /> */}
      {/* <AllYogas />/ */}


      {/* <Timer /> */}
      {/* <WorkOutExcercise/> */}

      {/* <div className={` ${isScaled ? "hidden" : ""} `}>
        <div
          className={`relative flex justify-center items-center h-screen overflow-hidden`}
        >
          <div className="absolute inset-0 bg-center bg-cover blur-sm"></div>
          <div className="absolute gap-3 flex justify-center items-center image-container transform transition-transform">
          <img  className="image"  src="https://via.placeholder.com/150" alt="placeholder"/>
          <img  className="image"  src="https://via.placeholder.com/150" alt="placeholder"/>
            <img  className="image"  src="https://via.placeholder.com/150" alt="placeholder"/>
          </div>
          <button onClick={handleClick}  className="absolute bottom-0 mb-8 px-4 py-2 text-white bg-blue-500 rounded cursor-pointer z-10">
            {isScaled ? "Shrink" : "Scale"}
          </button>
        </div>
       </div>

       <div className={` ${isScaled ? "" : "hidden"} `}>
            <p>Hii vishal how are you</p>
            <div>
                <button onClick={handleClick}  className="absolute bottom-0 mb-8 px-4 py-2 text-white bg-blue-500 rounded cursor-pointer z-10">
                {isScaled ? "Shrink" : "Scale"}
               </button>
            </div>
        </div> */}

      {/* <Demo /> */}
    </div>
  );
}

export default App;
