import React,{useEffect, useState} from 'react';
import {AiOutlineMenu} from "react-icons/ai";
import {FiShoppingCart} from "react-icons/fi";
import {BsChatLeft} from "react-icons/bs"; 
import {RiNotification3Line} from "react-icons/ri";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import {Cart,Chat,Notification,UserProfile} from ".";
import { useStateContext } from '../context/ContextProvider';

const NavButton=({title,icon,color,dotColor,customFunc})=>(
  <TooltipComponent content={title} position="BottomCenter">
      <button type="button" onClick={customFunc} style={{color}} className="relative text-xl rounded-full p-3
       hover:bg-light-gray">
          <span style={{background:dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
              {icon}
      </button>
  </TooltipComponent>
)




const Navbar = () => {
      const {activeMenu,setactiveMenu,isclicked,setisclicked,handleClick,
        screensize,setscreensize}=useStateContext();

        useEffect(()=>{ 
      const handleResize=()=>setscreensize(window.innerWidth);
      window.addEventListener('resize',handleResize);

      handleResize();

      return ()=>window.removeEventListener('resize',handleResize);

    },[])

    useEffect(()=>{
      if(screensize<=900){
        setactiveMenu(false);

      }
      else{
        setactiveMenu(true);
      }
    },[screensize])
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>

      <NavButton title="Menu" customFunc={()=>setactiveMenu((prevactiveMenu)=>!prevactiveMenu)} color="blue" icon={<AiOutlineMenu/>}/>

      <div className='flex'>
               <NavButton title="Cart" customFunc={()=>handleClick('cart')} color="blue" icon={<FiShoppingCart/>}/>
               <NavButton title="Chat" dotColor="#03C9D7" customFunc={()=>handleClick('chat')} color="blue" icon={<BsChatLeft/>}/>
               <NavButton title="Notifications" dotColor="#03C9D7" customFunc={()=>handleClick('notification')} color="blue" icon={<RiNotification3Line/>}/>
               <TooltipComponent content="userProfile" position="BottomCenter">
                    <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' 
                    onClick={()=>handleClick("userProfile")}>
                      <img src={avatar} className="rounded-full w-8 h-8 "/>
                      <p>
                        <span className='text-gray-400 text-14'>Hi,</span>{' '}
                        <span className='text-gray-400 font-bold ml-1 text-14'>Ahmed</span>
                      </p>
                      <MdOutlineKeyboardArrowDown className='text-gray-400 text-14'/>

                    </div>
               </TooltipComponent>

               {isclicked.cart && <Cart/>}
               {isclicked.chat && <Chat/>}
               {isclicked.notification && <Notification/>}
               {isclicked.userProfile && <UserProfile/>}




      </div>
    </div>
  )
}

export default Navbar