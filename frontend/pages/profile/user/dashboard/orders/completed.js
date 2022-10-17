import Link from "next/link"
import { useState } from "react"
import { DashboardModal, Modal, OrderCardDashobard, SidebarItem } from "../../../../../Components/Cards"
import { AuthInputField, BreadCrumbs, DashboardPasswordInputField, EmpytyState, PrimaryButton, SlideSwitch } from "../../../../../Components/Common"
import { CartInputText } from "../../../../../Components/Inputs"
import { Page } from "../../../../../Components/Page"


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
                                        <SidebarItem address={'orders'}  active={true} text={'My Orders'} img={'/profile/user/dashbaord/2.svg'} />
                                        <SidebarItem address={'stores'} text={'Connected Stores'} img={'/profile/user/dashbaord/3.svg'} />
                                        <SidebarItem address={'fav'} text={'Favorites'} img={'/profile/user/dashbaord/4.svg'} />
                                        <SidebarItem address={'payment'} text={'Payment Settings'} img={'/profile/user/dashbaord/5.svg'} />
                                        <SidebarItem address={'address'} text={'My Addresses'} img={'/profile/user/dashbaord/6.svg'} />
                                        <SidebarItem address={'notification'}  text={'Notification Settings'} img={'/profile/user/dashbaord/7.svg'} />
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
                                <div className="my-4">
                                    <h4 className="heading4">My Orders</h4>
                                </div>
                            


                    {
                        empty ? <div className='mt-4 mx-auto flex flex-row justify-center items-center w-[80%]' >
                        <EmpytyState desc={'Looks like you haven’t made your choice yet. Let’s shop!'} img={'/profile/user/placeholder/6.png'} heading={'Your order is empty'} >
                                <PrimaryButton>
                                    Shop Now
                                </PrimaryButton>
                        </EmpytyState>
                    </div> : <div> 


                            <div className="flex flex-row  items-center justify-start">
                                <Link href={'/profile/user/dashboard/orders'}><p className="flex-1 order-dashboard-order-text cursor-pointer hover:text-slate-900 text-slate-300 hover:underline transition-all">All Orders</p></Link>
                                <Link href={'/profile/user/dashboard/orders/pending'}><p className="text-slate-300 flex-1 order-dashboard-order-text cursor-pointer hover:text-slate-900">Pending</p></Link>
                                <Link href={'/profile/user/dashboard/orders/completed'}><p className=" flex-1 order-dashboard-order-text cursor-pointer underline text-slate-900 hover:text-slate-900 hover:underline transition-all">Completed</p></Link>
                                <Link href={'/profile/user/dashboard/orders/review'}><p className="text-slate-300 flex-1 order-dashboard-order-text cursor-pointer hover:text-slate-900 hover:underline transition-all">Reviews</p></Link>  
                            </div>


                            <OrderCardDashobard />
                            <OrderCardDashobard />
                            <OrderCardDashobard />

                            
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
                        
                         </div>
                    }
                        


                        </div>

            </section>
        


    </Page>
}