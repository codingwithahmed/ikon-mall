import Link from "next/link"
import { useState } from "react"
import { DashboardModal, Modal, OrderCardDashobard, OrderDetailCard, SidebarItem } from "../../../../../Components/Cards"
import { AuthInputField, BreadCrumbs, DashboardPasswordInputField, EmpytyState, PrimaryButton, SlideSwitch } from "../../../../../Components/Common"
import { CartInputText } from "../../../../../Components/Inputs"
import { Page } from "../../../../../Components/Page"
import { ReviewPCard } from "../../../../../Components/Review"


export default function Index () {

    const [empty,setEmpty] = useState(false)
    const [modalOpen,setModalOpen] = useState(false)

    return <Page>
        <BreadCrumbs path={
                            [   
                                
                                {
                                    src : '',
                                    label : "My Profile"
                                },
                                {
                                    src : '/profile/user/dashboard/notification',
                                    label : "Notification Settings"
                                }
                            ]
                        } />

            
                { 
                    modalOpen ?  <DashboardModal > 

            <img src={"/profile/user/placeholder/5.png"} className="w-[18.75vw] absolute" style={{
                        top:"-25%"
                    }} />

                    <img src="/group.png" className=" absolute" style={{
                        top:"-40%",
                        left:"74%"
                    }} />

                    <div className="mt-[20vh]">
                        <div className="my-4">
                            <h1 className="heading4 text-center">Are You Sure You Want to Log Out?</h1>
                        </div>

                        <div className="my-4">
                            <p className="body-regular text-center">Are you sure you want to log out?</p>
                        </div>

                        <div className="flex w-full mt-8 flex-row justify-center items-center">
                            <PrimaryButton>
                                <p>Log Out</p>
                            </PrimaryButton>
                        </div>


                        <div className="my-8" >
                            <p className="cursor-pointer button-text text-center main-purple" onClick={() => setModalOpen(!modalOpen)}>Cancel</p>
                        </div>
                    </div>

                    
                    </DashboardModal> : "" 
                } 

            
            <section className="grid grid-cols-12 gap-4 px-16">

            <div className="col-span-4 flex-col flex  ">
                            <div className="box-shadow-dashboard-sidebar p-4 rounded-[32px]">

                                <div className="flex flex-row items-center px-8 mt-8">
                                    
                                    <div className="flex mr-4 flex-row justify-center items-center">
                                        <img src="/profile/user/dashbaord/1.png" />
                                    </div>

                                    <div className="flex flex-col">
                                        <h4 className="heading4">John Doe</h4>
                                        <p className="body-regular text-slate-900">johndoe@example.com</p>
                                    </div>

                            </div>




                                <div className="flex flex-col mt-8 px-8">
                                        <SidebarItem address={'orders'} active={true} text={'My Orders'} img={'/profile/user/dashbaord/2.svg'} />
                                        <SidebarItem address={'stores'} text={'Connected Stores'} img={'/profile/user/dashbaord/3.svg'} />
                                        <SidebarItem address={'fav'}  text={'Favorites'} img={'/profile/user/dashbaord/4.svg'} />
                                        <SidebarItem address={'payment'} text={'Payment Settings'} img={'/profile/user/dashbaord/5.svg'} />
                                        <SidebarItem address={'address'} text={'My Addresses'} img={'/profile/user/dashbaord/6.svg'} />
                                        <SidebarItem address={'notification'} text={'Notification Settings'} img={'/profile/user/dashbaord/7.svg'} />
                                        <SidebarItem address={'account'} text={'Edit Account Info'} img={'/profile/user/dashbaord/9.svg'} />
                                        

                                        <div onClick={() => setModalOpen(!modalOpen)} className="py-4 cursor-pointer flex flex-row mt-8">
            
                                            <div className="flex flex-row items-center">
                                                <img src={'/profile/user/dashbaord/8.svg'} />
                                            </div>

                                            <div className="flex mx-4 flex-row items-center">
                                                <p className="sidebar-dashobord-item-text text-red-400">{'Log Out'}</p>
                                            </div>

                                        </div>

                                </div>

                            </div>

                        </div>


                        <div className="col-span-8 px-8 relative flex flex-col" >
                                
                                
                                <div className="my-4 flex flex-row justify-between items-center">
                                    <h4 className="heading4"> Order Details</h4>
                                    <h4 className="text-[20px] font-semibold">Order Number #6789070</h4>

                                </div>
                            
                                {
        // Shop wit Rating
                                }

                                <div className="flex flex-row justify-between">

                                <div className="my-4 flex flex-row">

<div className="flex-1">

    <div className="flex flex-row my-4">
        <div className="product-shop-avatar  px-4 py-4 rounded-full ">
            <img src='/common/cart.svg' className="w-[29.61px]" />
        </div>

        <div className="flex flex-row items-center">
            <h3 className="heading6 mx-6">iKon Shop</h3>

            <div className="flex flex-row items-center justify-evenly">
    <img src="/common/star.svg" className="mr-1 w-[20px]" />
    <img src="/common/star.svg" className="mx-1 w-[20px]" />
    <img src="/common/star.svg" className="mx-1 w-[20px]" />
    <img src="/common/star.svg" className="mx-1 w-[20px]" />
    <img src="/star2.png" className="mx-1 w-[20px]" />

    </div>
        </div>
    </div>
</div>



                                </div>



                                <div className="flex flex-row items-center">

                            
                            <div className="flex flex-row items-center my-2">
                                <img src="/products/truxk.svg" />
                                <p className="badge-text mx-2">Pickup Delivery</p>
                            </div>  

                            <div className="flex flex-row items-center mx-2 my-2">
                                <img src="/products/box.svg" />
                                <p className="badge-text mx-2">3 Products</p>
                            </div> 

                            <div className="flex flex-row items-center my-2">
                                <img src="/common/calandar.svg" />
                                <p className="badge-text mx-2">07 May 2022</p>
                            </div>  

</div>




                                </div>  




                                {
        // End Shop with rating
                                }
                        

                                <OrderDetailCard />
                                <OrderDetailCard />
                                <OrderDetailCard discount={true} />
                                
                                
                                <h5 className="text-[20px] mt-16 font-semibold">Order Summary</h5>

                                <div className="flex flex-col pb-6 border-b-[1px] border-b-slate-300">
                                    
                                    <div className="flex flex-row mt-8 mb-4 justify-between">
                                        <p className="text-[16px] font-normal">Recipient</p>
                                        <label className="text-[16px] font-semibold">John Doe</label>
                                    </div>

                                    <div className="flex flex-row my-2 justify-between">
                                        <p className="text-[16px] font-normal">Mobile number</p>
                                        <label className="text-[16px] font-semibold">+34283921231</label>
                                    </div>

                                    <div className="flex flex-row my-2 justify-between">
                                        <p className="text-[16px] font-normal">Address</p>
                                        <label className="text-[16px] font-semibold">6391 Elgin St. Celina, Delaware
                                        10299</label>
                                    </div>

                                    <div className="flex flex-row my-2 justify-between">
                                        <p className="text-[16px] font-normal">Delivery method</p>
                                        <label className="text-[16px] font-semibold">Pickup Delivery</label>
                                    </div>

                                    <div className="flex flex-row my-2 justify-between">
                                        <p className="text-[16px] font-normal">Payment Card</p>
                                        <label className="text-[16px] font-semibold">**** **** 9914 4436</label>
                                    </div>

                                </div>


                                <div className="flex flex-row my-2 justify-between">
                                        <p className="text-[16px] font-normal">Order Total</p>
                                        <label className="text-[20px] font-semibold main-purple">$1921.99</label>
                                </div>




                                <div className="mt-16">
                                        <h4 className="text-[20px] font-semibold">Delivery Status</h4>
                                
                                        <div className="flex mt-6 mb-4 max-w-full flex-row items-center px-16">

                                            <div className="gradient rounded-full p-2 cursor-pointer">
                                                    <img src="/profile/user/dashbaord/box.svg" />
                                            </div>

                                            <div className="flex-1 border-t-[4px] border-dotted border-[#586BCA] ">

                                            </div>

                                            <div className="gradient rounded-full p-2 cursor-pointer">
                                                    <img  src="/profile/user/dashbaord/store.svg" />
                                            </div>


                                            <div className="flex-1 border-t-[4px] border-dotted border-slate-300 ">

                                            </div>


                                            <div className="bg-slate-300 rounded-full p-2 cursor-pointer">
                                                    <img src="/profile/user/dashbaord/receive.svg" />
                                            </div>

                                        </div>

                                        <div className="flex flex-row justify-between items-start">
                                                <div className="flex cursor-pointer flex-col items-center w-[160px]">
                                                        <h5 className="text-[17px] text-center font-semibold">Order Received</h5>
                                                        <p className="text-[15px] text-center font-normal">9:00 AM June 09, 2022</p>
                                                </div>

                                                <div className="flex cursor-pointer flex-col items-center w-[160px]">
                                                        <h5 className="text-[17px] text-center font-semibold"> Order Processing</h5>
                                                        <p className="text-[15px] text-center font-normal">9:00 AM June 09, 2022</p>
                                                </div>

                                                <div className="flex cursor-pointer flex-col items-center w-[160px]">
                                                        <h5 className="text-[17px] text-center font-semibold text-slate-300">Delivered</h5>
                                                        <p className="text-[15px] text-center font-normal"></p>
                                                </div>
                                        </div>
                                
                                </div>


                                <div className="flex w-full flex-col justify-center my-8 items-center">
                                    <div className="my-2">
                                        <PrimaryButton >Complete Order</PrimaryButton>
                                    </div>
                                    <div className="my-2">
                                        <p className="main-purple font-semibold cursor-pointer"><Link href={'/profile/user/dashboard/orders'}>Back to Orders List</Link></p>
                                    </div>
                                </div>


                        </div>

            </section>
        


    </Page>
}