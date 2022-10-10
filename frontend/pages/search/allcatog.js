import Link from "next/link";
import { BreadCrumbs, PrimaryButton } from "../../Components/Common";
import { Page } from "../../Components/Page";
import { Breaker } from "../../Components/Sidebar";
import {
    useEffect,useCallback,useState,useMemo
} from 'react'
import ExplorerCard from "../../Components/ExplorerCard";
import MenuCard from "../../Components/MenuCard";

const RatingCheckBox = ({
    stars
}) => {
    const [checked,setChecked] = useState(false)

    useEffect(() =>{
        console.log(stars)
    },[])

    return <div className="flex my-1 flex-row items-center">
        

        <div className="p-2 rounded-lg flex flex-row items-center justify-center cursor-pointer transition-all" onClick={( ) => {
            setChecked(!checked)
        }} style={{
            background:checked ? "linear-gradient(136.85deg, #91AAFF 10.37%, #3752D7 89.53%)" : "white",
            border:checked ?  "1px solid #FFFFFF"  : "1px solid #CBD5E1"
        }}>
                <img className="pointer-events-none" src="/common/tick.svg"  />
        </div>

        <div className="flex flex-row items-center">
            {
                stars.map((i,e) => 
                    <img key={e} src='/common/star.svg' className="ml-2" />
                    )
            }
        </div>

    </div>
}


export default function ExploreShops () {

    return <Page>

            <div className=" relative">
                        <BreadCrumbs path={
                            [
                                {
                                    src : '/search/allcatog',
                                    label: "All Categories"
                                }
                            ]
                        } />

                   
                       <img
                            className=" absolute"
                            src='/common/arrow.svg'
                            style={{
                                top:"15%",
                                right:"10%",
                                width:"109px"
                            }}
                        /> 
            </div>

            
        
            <div className="grid grid-cols-12 text-slate-900 ">

                {/* Filter Section of page */}

                    <section id='filter' className={`col-span-4 grid grid-cols-12 w-full  `}>
                       
                        <div className="col-start-2 col-end-11 shadow-dark rounded-lg p-5 my-2 w-full flex flex-col" >
                            <h5 className="heading5">All Categories</h5>

                            <div className="flex flex-col">
                                    <p className="text-sidebar-filter underline my-2"><span className="underline main-purple">All</span> <span className="text-slate-300 underline">(25)</span></p>
                                    <p className="text-sidebar-filter my-2"><span className="">Clothes</span> <span className="text-slate-300">(125)</span></p>
                                    <p className="text-sidebar-filter my-2"><span className="">Electronics</span> <span className="text-slate-300">(150)</span></p>
                                    <p className="text-sidebar-filter my-2"><span className="">Toys</span> <span className="text-slate-300">(75)</span></p>
                                    <p className="text-sidebar-filter my-2"><span className="">Accessories</span> <span className="text-slate-300">(75)</span></p>
                                    <p className="text-sidebar-filter my-2"><span className="">Shoes</span> <span className="text-slate-300">(45)</span></p>
                                    <p className="text-sidebar-filter my-2"><span className="">Other</span> <span className="text-slate-300">(10)</span></p>
                                   
                                   
                                    
                                        
                                    <Breaker />


                                        <div className="flex flex-row item-center justify-between">
                                                <h6  className="text-sidebar-filter py-4" style={{
                                                    fontWeight:"600"
                                                }}>Gender</h6>

                                                <div className="flex flex-row justify-center items-center">
                                                    <img src="/common/down_arrow.svg" className="hover:bg-slate-50 transition-all  cursor-pointer active:bg-slate-100 p-4 rounded-full "/>
                                                </div>
                                        </div>

                                        <p className="text-sidebar-filter my-2"><span className="">All</span> <span className="text-slate-300">(75)</span></p>
                                        <p className="text-sidebar-filter my-2"><span className="">Men</span> <span className="text-slate-300">(45)</span></p>
                                        <p className="text-sidebar-filter my-2"><span className="">Women</span> <span className="text-slate-300">(10)</span></p>
                                        <p className="text-sidebar-filter my-2"><span className="">Kids</span> <span className="text-slate-300">(45)</span></p>

                                    <Breaker />

                                    <div className="flex flex-row item-center justify-between">
                                                <h6  className="text-sidebar-filter py-4" style={{
                                                    fontWeight:"600"
                                                }}>Rating</h6>

                                                <div className="flex flex-row justify-center items-center">
                                                    <img src="/common/down_arrow.svg" className="hover:bg-slate-50 transition-all  cursor-pointer active:bg-slate-100 p-4 rounded-full "/>
                                                </div>
                                    </div>

                                    
                                    <div>
                                                <RatingCheckBox stars={Array(1).fill(undefined)} />
                                                <RatingCheckBox stars={Array(2).fill(undefined)} />
                                                <RatingCheckBox stars={Array(3).fill(undefined)} />
                                                <RatingCheckBox stars={Array(4).fill(undefined)} />
                                                <RatingCheckBox stars={Array(5).fill(undefined)} />

                                    </div>

                                    <Breaker />

                                    <div className="flex flex-row item-center justify-between">
                                                <h6  className="text-sidebar-filter py-4" style={{
                                                    fontWeight:"600"
                                                }}>Delivery</h6>

                                                <div className="flex flex-row justify-center items-center">
                                                    <img src="/common/down_arrow.svg" className="hover:bg-slate-50 transition-all  cursor-pointer active:bg-slate-100 p-4 rounded-full "/>
                                                </div>
                                    </div>     

                                    <p className="text-sidebar-filter my-2"><span className="">Pickup</span> <span className="text-slate-300">(25)</span></p>
                                    <p className="text-sidebar-filter my-2"><span className="">Shipping</span> <span className="text-slate-300">(125)</span></p>
                                    

                                    <Breaker />


                                        <div className="flex flex-row item-center justify-between">
                                                <h6  className="text-sidebar-filter py-4" style={{
                                                    fontWeight:"600"
                                                }}>Color</h6>

                                                <div className="flex flex-row justify-center items-center">
                                                    <img src="/common/down_arrow.svg" className="hover:bg-slate-50 transition-all  cursor-pointer active:bg-slate-100 p-4 rounded-full "/>
                                                </div>
                                        </div>

                                        <div className="grid grid-cols-3 gap-3 text-center text-slate-900 mb-8">
                                                <p className="px-3 py-1 rounded-xl text-sidebar-filter border-1 border-slate-300-imp cursor-pointer text-slate-900 border-2">Red</p>
                                                <p className="px-3 py-1 rounded-xl text-sidebar-filter border-1 border-slate-300-imp cursor-pointer text-slate-900">White</p>
                                                <p className="px-3 py-1 rounded-xl text-sidebar-filter border-1 border-slate-300-imp cursor-pointer text-slate-900">Black</p>
                                                <p className="px-3 py-1 rounded-xl text-sidebar-filter border-1 border-slate-300-imp cursor-pointer text-slate-900">Brown</p>
                                                <p className="px-3 py-1 rounded-xl text-sidebar-filter border-1 border-slate-300-imp cursor-pointer text-slate-900">Yellow</p>
                                                <p className="px-3 py-1 rounded-xl text-sidebar-filter border-1 border-slate-300-imp cursor-pointer text-slate-900">Pink</p>


                                                <p className="px-3 py-1 rounded-xl text-sidebar-filter border-1 border-slate-300-imp cursor-pointer text-slate-900">Purple</p>
                                                <p className="px-3 py-1 rounded-xl text-sidebar-filter border-1 border-slate-300-imp cursor-pointer text-slate-900">Gray</p>
                                                <p className="px-3 py-1 rounded-xl text-sidebar-filter border-1 border-slate-300-imp cursor-pointer text-slate-900">Orange</p>


                                                <p className="px-3 py-1 rounded-xl text-sidebar-filter border-1 border-slate-300-imp cursor-pointer text-slate-900">Green</p>
                                                <p className="px-3 py-1 rounded-xl text-sidebar-filter border-1 border-slate-300-imp cursor-pointer text-slate-900">Blue</p>
                                                <p className="px-3 py-1 rounded-xl text-sidebar-filter border-1 border-slate-300-imp cursor-pointer text-slate-900">Various</p>




                                        </div>

                                    <PrimaryButton className={'my-2'} >
                                            Filter
                                    </PrimaryButton>

                                    <p className="mt-2 mb-16 button-text text-center cursor-pointer main-purple">Reset Filter</p>

                            </div>
                        </div>

                    </section>


                    {/* Filter Section of page */}
                    


                    <section id='main-content' className="col-span-7  w-full">
                        <div className="flex flex-row justify-between items-center">
                             <h3 className="heading3">
                                    All Categories
                             </h3>

                            
                        </div>

                        <div className="py-4 flex flex-row w-full">
                                    <div className="px-4 mx-4 cursor-pointer py-4 flex-1 flex flex-row justify-between items-center bg-indigo-50 rounded">
                                            <p className="underline category-label-text text-slate-900">All</p>
                                            <p className="body-regular text-slate-900">180 products</p>
                                    </div>

                                    <div className="px-4 mx-4 cursor-pointer py-4 flex-1 flex flex-row justify-between items-center bg-indigo-50 rounded">
                                            <p className="underline category-label-text text-slate-900">Bags</p>
                                            <p className="body-regular text-slate-900">180 products</p>
                                    </div>

                                    <div className="px-4 mx-4 cursor-pointer py-4 flex-1 flex flex-row justify-between items-center bg-indigo-50 rounded">
                                            <p className="underline category-label-text text-slate-900">Shoes</p>
                                            <p className="body-regular text-slate-900">80 products</p>
                                    </div>
                        </div>

                        <h2 className="heading3 my-8">
                            From Nearby Shops
                        </h2>

                        <div className="grid grid-cols-3 w-full gap-6 mt-4">
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                        </div>


                        <h2 className="heading3 my-8">
                                Best Sellers
                        </h2>

                        <div className="grid grid-cols-3 w-full gap-6 mt-4">
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                        </div>


                        <h2 className="heading3 my-8">
                                Top Rated
                        </h2>

                        <div className="grid grid-cols-3 w-full gap-6 mt-4">
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                        </div>

                        <div className="flex flex-row items-center justify-center mt-4">   
                                <img src="/common/left_.svg" className=" cursor-pointer" />  
                                <p className="p-1 w-6 h-6 flex flex-row items-center justify-center cursor-pointer small-text-light rounded mx-2" style={{
                                    background:"linear-gradient(136.85deg, #91AAFF 10.37%, #3752D7 89.53%)",
                                    borderRadius:"8px",
                                    color:"white",
                                    border:"1px solid"

                                }}>
                                     1
                                </p>

                                <p className="p-1 cursor-pointer w-6 h-6 flex flex-row items-center justify-center border-slate-300 small-text-light rounded-lg mx-3" style={{
                                    border:"1px solid"
                                }}>
                                        2
                                </p>

                                <p className="p-1 cursor-pointer w-6 h-6 flex flex-row items-center justify-center border-slate-300 small-text-light rounded-lg mx-2" style={{
                                    border:"1px solid"
                                }}>
                                        3
                                </p>

                                <p className="p-1 cursor-pointer w-6 h-6 flex flex-row items-center justify-center border-slate-300 small-text-light rounded-lg mx-2" style={{
                                    border:"1px solid"
                                }}>
                                        4
                                </p>
                                <img src="/common/right_.svg" className=" cursor-pointer" />     
                        </div>

                    </section>
            </div>


            <div className='flex flex-col mt-16' style={{ color: "#171732" }}>
                <div className='flex mx-36 relative'>
                    <div >
                        <h2 className='heading1'>
                            Explorer Shops
                        </h2>
                        <p className='w-[480px] body-regular' >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </p>
                    </div>
                    
                </div>
                <div className='flex flex-col justify-center items-center px-24'>
                    <div className='grid grid-cols-3 w-full gap-5 mt-10' >
                        <ExplorerCard/>
                        <ExplorerCard/>
                        <ExplorerCard/>
                        <ExplorerCard/>
                        <ExplorerCard/>
                        <ExplorerCard/>
                    </div>
                </div>
            </div>
    </Page>
}