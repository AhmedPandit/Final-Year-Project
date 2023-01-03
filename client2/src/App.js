import React,{useEffect} from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";

import {Navbar,Sidebar,Footer,ThemeSettings} from "./components";
import {Ecommerce,Employees,Stacked,Orders,Calendar,Pyramid,Customers,Kanban,Area,Bar,Pie,Financial,ColorPicker
,ColorMapping,Editor,ViewProducts,Addproduct} from "./pages"; 


import "./App.css";
import { useStateContext } from './context/ContextProvider';
import {FiSettings} from "react-icons/fi";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";


const App = () => { 
 const {activeMenu}=useStateContext();
   return (
    <div>
        <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'>
                <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
                    <TooltipComponent content="Settings" position="Top">
                        <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                        style={{
                            background:"blue",
                            borderRadius:'50%'
                        }}>
                            <FiSettings/>
                        </button>

                    </TooltipComponent>

                </div>
                {activeMenu ? (
                    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                      <  Sidebar />
                    </div>
                ):(<div className='w-0 dark:bg-secondary-dark-bg'>
                       <Sidebar/>
                    </div>
                )}
                <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu? 'md:ml-72' :'flex-2'}`}>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                        <Navbar/>
                    </div>

               
                <div>
                    <Routes>
                        {/* Dashboard */}
                        <Route path="/" element={<Ecommerce/>} />
                        <Route path="/Ecommerce" element={<Ecommerce/>}/>

                        {/* Add Product */}
                        <Route path="/Addproduct" element={<Addproduct/>}/>

                        {/* View Product */}
                        <Route path="/Viewproducts" element={<ViewProducts/>}/>

                        {/* Orders */}
                        <Route path="/Orders" element={<Orders/>}/>

                       




                    </Routes>
                </div>
            </div>

            </div>
        </BrowserRouter>
    </div>
  )
}

export default App