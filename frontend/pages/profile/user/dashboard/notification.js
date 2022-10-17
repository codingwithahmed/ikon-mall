import { SidebarItem } from "../../../../Components/Cards"
import { BreadCrumbs, SlideSwitch } from "../../../../Components/Common"
import { Page } from "../../../../Components/Page"


export default function Index () {

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
                                        <SidebarItem address={'notification'}  active={true} text={'Notification Settings'} img={'/profile/user/dashbaord/7.svg'} />
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


                        <div className="col-span-8 px-8 relative flex flex-col" style={{
                            background:"url('/common/circle.svg') no-repeat center",
                            backgroundSize:"contain"
                        }}>
                                <div>
                                    <h4 className="heading4">Notification Settings</h4>
                                </div>

                                <div className="flex flex-row mt-8 mb-4 ">
                                    <div className="flex flex-col">
                                        <h6 className="heading6">Favorite Store Notification</h6>
                                        <p className="body-regular" style={{color:"#64748B"}}>Receive weekly push notification</p>
                                    </div>

                                    <div className="flex mx-16 flex-row items-center">
                                        <SlideSwitch />
                                    </div>
                                </div>

                                <div className="flex flex-row my-2 ">
                                    <div className="flex flex-col">
                                        <h6 className="heading6">Order Notification</h6>
                                        <p className="body-regular" style={{color:"#64748B"}}>Receive weekly push notification</p>
                                    </div>

                                    <div className="flex mx-16 flex-row items-center">
                                        <SlideSwitch />
                                    </div>
                                </div>

                                <div className="flex flex-row my-4 ">
                                    <div className="flex flex-col">
                                        <h6 className="heading6">Message Notification</h6>
                                        <p className="body-regular" style={{color:"#64748B"}}>Receive weekly push notification</p>
                                    </div>

                                    <div className="flex mx-16 flex-row items-center">
                                        <SlideSwitch />
                                    </div>
                                </div>


                                <img src="/profile/user/placeholder/2.png" className=" absolute" style={{
                                    right:"15%",
                                    width:"30%"
                                }} />
                        </div>

            </section>
        


    </Page>
}