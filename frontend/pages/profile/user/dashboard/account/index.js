import Link from "next/link"
import { useState } from "react"
import { SidebarItem } from "../../../../../Components/Cards"
import { BreadCrumbs, PrimaryButton, SlideSwitch } from "../../../../../Components/Common"
import { CartInputText } from "../../../../../Components/Inputs"
import { Page } from "../../../../../Components/Page"


export default function Index () {

    const [hover,setHover] = useState(false)
    

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
                                        <SidebarItem address={'orders'} text={'My Orders'} img={'/profile/user/dashbaord/2.svg'} />
                                        <SidebarItem address={'stores'} text={'Connected Stores'} img={'/profile/user/dashbaord/3.svg'} />
                                        <SidebarItem address={'fav'} text={'Favorites'} img={'/profile/user/dashbaord/4.svg'} />
                                        <SidebarItem address={'payment'} text={'Payment Settings'} img={'/profile/user/dashbaord/5.svg'} />
                                        <SidebarItem address={'address'} text={'My Addresses'} img={'/profile/user/dashbaord/6.svg'} />
                                        <SidebarItem address={'notification'}  text={'Notification Settings'} img={'/profile/user/dashbaord/7.svg'} />
                                        <SidebarItem address={'account'} active={true} text={'Edit Account Info'} img={'/profile/user/dashbaord/9.svg'} />
                                        

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
                                <div>
                                    <h4 className="heading4">Edit Account Info</h4>
                                </div>

                                

                                <div className="grid my-8 grid-cols-2 gap-8">
                                    
                                    <CartInputText label={'Full Name'} /> 
                                    
                                    <CartInputText label={'Email'} /> 
                                    <CartInputText label={'User Name'} /> 
                                    <CartInputText label={'Phone Number'} /> 
                                        
                                </div>


                                <div className="my-8 flex flex-row items-center">

                                        <div className="relative" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                                                
                                                <img src="/profile/user/placeholder/3.png" className="w-[164px] h-[164px]" />

                                                <div className="cursor-pointer flex flex-row transition-all justify-center items-center absolute rounded-full top-0 w-[164px] h-[164px]" style={{background:"rgba(15, 23, 42,0.1)",display:hover ? "flex" : "none"}}>
                                                        <img src="/profile/user/dashbaord/10.svg" /> 
                                                </div>
                                        </div>


                                        <div className="flex flex-row items-center mx-8">
                                            <p className="link-button cursor-pointer main-purple">Change Profile Photo</p>
                                        </div>

                                </div>


                                <div className="flex flex-row items-center my-8">
                                    <p className="link-button cursor-pointer main-purple"><Link href={'/profile/user/dashboard/account/change'}>Change Password</Link></p>
                                </div>


                                <div className="my-8 w-[50%] flex-row flex">
                                    <PrimaryButton className={"w-[100%]"}>Save Info</PrimaryButton>
                                </div>


                                
                        </div>

            </section>
        


    </Page>
}