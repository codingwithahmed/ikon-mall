import { useState } from "react";
import { MessageShopItem, Modal, OtherMessage, UserMessage } from "../../../Components/Cards";
import { BreadCrumbs, PrimaryButton } from "../../../Components/Common";
import { Page } from "../../../Components/Page";
import { Breaker } from "../../../Components/Sidebar";


export default function Messages () {

    const [open,setOpen ] = useState(false)
    const [modal,setModal] = useState({
        button: '',
        heading : "",
        desc : " "
    })
    const [modalOpen,setModalOpen] = useState(false)

    return <Page>

                { 
                    modalOpen ? <Modal modal={modal} setModalOpen={setModalOpen} modalOpen={modalOpen} /> : "" 
                }

                <BreadCrumbs path={
                            [   
                                
                                {
                                    src : '',
                                    label : "Messages"
                                },
                                {
                                    src : '/shop/explore',
                                    label: "Ride Online Shop"
                                }
                            ]
                        } /> 
                             
            
            <section className="grid  gap-4 grid-cols-12 px-16">
                    <div className="col-span-4 pb-8 p-2 rounded-3xl box-shadow-blocked ">
                            <MessageShopItem heading={'Ride Online Shop'} desc={'Lorem ipsum dolor sit amet, consectetur'} img={'/profile/user/notification/8.png'} />
                            <MessageShopItem heading={'One Click Shopping'} desc={'Lorem ipsum dolor sit amet, consectetur'} img={'/profile/user/notification/9.png'} />
                            <MessageShopItem heading={'Click & Connect'} desc={'Lorem ipsum dolor sit amet, consectetur'} img={'/profile/user/notification/10.png'} />
                            <MessageShopItem heading={'Mobile Store'} desc={'Lorem ipsum dolor sit amet, consectetur'} img={'/profile/user/notification/11.png'} />
                            <MessageShopItem heading={'Best Market'} desc={'Lorem ipsum dolor sit amet, consectetur'} img={'/profile/user/notification/12.png'} />

                    </div>

                    <div className="col-span-8 rounded-2xl p-3 ">
                            <div className="flex flex-col">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex mx-4 my-2 flex-row">
                                        <img src={'/profile/user/notification/8.png'} />
                                        <div className="mx-6 flex flex-col">
                                            <h4 className="heading4">Ride Online Shop</h4>
                                            <p className="button-text text-green-600">Online</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-row relative items-center justify-center">
                                        <div className="flex  flex-row cursor-pointer mx-5 px-4 py-5 hover:bg-slate-50 rounded-full" onClick={() => setOpen(!open)}>
                                                <img src="/profile/user/1.svg" />
                                                <img src="/profile/user/1.svg" className="mx-0.5" />
                                                <img src="/profile/user/1.svg" />
                                        </div>

                                        <div className="bg-white w-[230px] p-6 rounded-xl absolute" style={{
                                            top:"80%",
                                            boxShadow: "10px 10px 54px rgba(23, 23, 50, 0.08)",
                                            right:"0%",
                                            display : open ? '' : "none" 
                                        }}>
                                            <div  className="flex my-2 cursor-pointer flex-row items-center">
                                                    <img src="/profile/user/Store.svg" />
                                                    <p className="button-text ml-4">View Store Profile</p>
                                            </div>

                                            <div onClick={() => { 
                                                setModalOpen(!modalOpen)
                                                setModal({
                                                    heading:"Report the Shop?",
                                                    desc:"Are you sure you want to Report ‘’İKon Mall?’’",
                                                    button :"Report Shop"
                                                })
                                                setOpen(!open)
                                                }} className="flex my-2 cursor-pointer flex-row items-center">
                                                    <img src="/profile/user/alert.svg" />
                                                    <p className="button-text ml-4">Report </p>
                                            </div>

                                            <div onClick={() => { 
                                                setModalOpen(!modalOpen)
                                                setModal({
                                                    heading:"Block the Shop?",
                                                    desc:"Are you sure you want to block ‘’İKon Mall?’’",
                                                    button :"Block Shop"
                                                })
                                                setOpen(!open)

                                                }} className="flex my-2 cursor-pointer flex-row items-center">
                                                    <img src="/profile/user/slash.svg" />
                                                    <p className="button-text ml-4">Block</p>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bg-slate-300 w-full my-1" style={{
                                    height:'.05rem'
                                    }}></div>
                            </div>


                            <div className="flex w-full flex-col min-h-[87%] items-center justify-between">

                                    <div className="w-full flex flex-col justify-start items-start">
                                        <h6 className="m-2 text-center w-full text-slate-500">Today</h6>
                                       

                                        <UserMessage message={'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et'} />
                                        <OtherMessage message={'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'} />
                                        <UserMessage message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'} />
                                        
                                        <UserMessage message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis netus non massa, montes, cras mi non mi.'} />
                                        <OtherMessage message={'Ut enim ad minim veniam'} />
                                        <UserMessage message={'Lorem ipsum dolor'} />

                                        <div className="flex my-2 flex-row w-full justify-end items-center">
                                            <div>
                                                <img src='/profile/user/4.png' className="last-seen-drop-shadow" />
                                            </div>
                                        </div>


                                    </div>                                    
                                    
                                    <div className=" w-full ">
                                            <div className="w-full px-4 rounded-2xl  flex flex-row py-2 bg-white box-shadow-blocked ">
                                                
                                                <div className="flex flex-row cursor-pointer justify-center items-center">
                                                    <img src='/profile/user/3.svg' />
                                                </div>

                                                <div className= "w-full rounded-xl px-4 py-2 border-[0.5px] border-slate-300 bg-slate-100 flex flex-row items-center justify-between mx-2">
                                                    <input className=" w-full outline-none border-none bg-transparent" />

                                                    <img src="/profile/user/2.svg" className="cursor-pointer" />

                                                </div>

                                                <div className="flex flex-row cursor-pointer justify-center items-center">
                                                    <img src='/profile/user/send.svg' />
                                                </div>
                                            </div>
                                    </div>
                           
                            </div>

                    </div>
            </section>
    
    </Page>
}