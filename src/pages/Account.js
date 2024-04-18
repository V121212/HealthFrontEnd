import React , {useState} from 'react'
// import { FaBars } from "react-icons/fa";
// import { MdAccountCircle } from "react-icons/md";


function Account() {
     
    // let Links =[
    //     {name:"Profile", link:"/profile" },
    //     {name:"Tracker",link:"/tracker"},
    //   ];

      // let [open,setOpen]=useState(false);

  return (
    <div className='mt-20 bg flex flex-col'>
        
        <p>Hii there</p>

      {/* <div>
       <div className=' top-3'>
         <p className=' text-lg font-bold'>Account Section</p>
       </div>
        
        <div className=' mt-20'>
           <div onClick={()=>setOpen(!open)} className='text-3xl absolute left-1 top-32 cursor-pointer md:hidden'>
              <ion-icon name={open ? 'close':'menu'}> < MdAccountCircle size={40} className=' border-4 rounded-3xl shadow-2xl shadow-rose-800'/> </ion-icon>
           </div>
        </div>
        
       <div className='  '>
       <ul className={`md:flex felx flex-col  md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? ' -ml-4 -mt-3   ':'top-[-490px]'}`}>
         {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl max-md:my-0 my-2 '>
              <a href={link.link} className='text-xl text-gray-800  hover:text-blue-700 duration-500'>{link.name}</a>
            </li>
          ))
         }
      </ul>
       </div>
       </div> */}


           


    </div>
  )
}

export default Account