import Link from "next/link"
import { useState } from "react"
import { CardCartCheckbox, DashboardModal, Modal, SidebarItem } from "../../../../../Components/Cards"
import { AuthInputField, BreadCrumbs, DashboardPasswordInputField, EmpytyState, OutlinedPrimaryButton, PrimaryButton, SlideSwitch } from "../../../../../Components/Common"
import { CartInputText } from "../../../../../Components/Inputs"
import { Page } from "../../../../../Components/Page"


export default function Index () {

    const [empty,setEmpty] = useState(false)
    const [modalOpen,setModalOpen] = useState(false)
    const [modal,setModal] = useState('')
    const [addNew,setAddNew] = useState(false)
    const [step,setStep] = useState(1)

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
                    
                    
                    modal == 'trash' && modalOpen ? <DashboardModal>

                        <div className="p-6 w-[100%]">
                            <h1 className="heading4">Edit Your Address</h1>
                            

                            <div className='mt-8 grid grid-cols-2 gap-4'>
                                <CartInputText label={'Cardholder Name'} /> 
                                <CartInputText label={'Card Number '} /> 
                                <CartInputText label={'Expiration Date'} /> 
                                <CartInputText label={'CVC'} /> 
                        
                            </div>

                            <div className="flex mt-8 flex-row justify-center items-center">
                                <PrimaryButton>
                                    <p onClick={() => setModalOpen(!modalOpen)}>Save Changes</p>    
                                </PrimaryButton>

                                <p onClick={() => setModalOpen(!modalOpen)} className="mx-4 cursor-pointer button-text main-purple">Cancel</p>
                            </div>

                        </div>

                    </DashboardModal>  :
                    
                    modalOpen ?  <DashboardModal > 
                            {
                                step == 1 ? <>

                           <img src={"/profile/user/dashbaord/2.png"} className="w-[18.75vw] absolute" style={{
                        top:"-25%"
                    }} />

                    <img src="/group.png" className=" absolute" style={{
                        top:"-40%",
                        left:"74%"
                    }} />

                    <div className="mt-[20vh]">
                        <div className="my-4">
                            <h1 className="heading4 text-center">Delete Your Card?</h1>
                        </div>

                        <div className="my-4">
                            <p className="body-regular text-center">Are you sure you want to delete your card information?</p>
                        </div>

                        <div className="flex w-full mt-8 flex-row justify-center items-center">
                            <PrimaryButton>
                                <p onClick={() => setStep(2)}>Delete Card</p>
                            </PrimaryButton>
                        </div>


                        <div className="my-8" >
                            <p className="cursor-pointer button-text text-center main-purple" onClick={() => setModalOpen(!modalOpen)}>Cancel</p>
                        </div>
                    </div>                 
                                
                                </>  : <>
                                

                                <img src={"/profile/user/dashbaord/2.png"} className="w-[18.75vw] absolute" style={{
                        top:"-25%"
                    }} />

                    <img src="/group.png" className=" absolute" style={{
                        top:"-40%",
                        left:"74%"
                    }} />

                    <div className="mt-[20vh]">
                        <div className="my-4">
                            <h1 className="heading4 text-center">Your Card is Deleted!</h1>
                        </div>


                        <div className="flex w-full my-8 flex-row justify-center items-center">
                            <PrimaryButton className={'w-full'}>
                                <p onClick={() => {
                                    
                                    setStep(1)
                                    setModalOpen(!modalOpen)
                                    
                                    }}>Delete Card</p>
                            </PrimaryButton>
                        </div>



                    </div>
                                
                                
                                </>
                            }


                    
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
                                        <SidebarItem address={'orders'} text={'My Orders'} img={'/profile/user/dashbaord/2.svg'} />
                                        <SidebarItem address={'stores'} text={'Connected Stores'} img={'/profile/user/dashbaord/3.svg'} />
                                        <SidebarItem address={'fav'} text={'Favorites'} img={'/profile/user/dashbaord/4.svg'} />
                                        <SidebarItem address={'payment'} active={true} text={'Payment Settings'} img={'/profile/user/dashbaord/5.svg'} />
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
                                <div className="my-4">
                                    <h4 className="heading4">My Cards</h4>
                                </div>
                            


                    {
                        empty ? <div className='mt-4 mx-auto flex flex-row justify-center items-center w-[80%]' >
                        <EmpytyState desc={'Looks like you haven’t add any cards yet. Let’s explore!'} img={'/profile/user/placeholder/7.png'} heading={'No Saved Cards'} >
                                <PrimaryButton>
                                    Add New Card
                                </PrimaryButton>
                        </EmpytyState>
                    </div> :                                 <div>



<form className='grid grid-cols-2'>

            <CardCartCheckbox setModalOpen={setModalOpen} modalOpen={modalOpen} modal={modal} setModal={setModal} dashboard={true} heading={"Credit Card"} desc={"**** **** 7812 3436"} img={'/Cart/card/3.png'}  />
            <CardCartCheckbox setModalOpen={setModalOpen} modalOpen={modalOpen} modal={modal} setModal={setModal} dashboard={true} heading={"Credit Card"} desc={"**** **** 7812 3436"} img={'/Cart/card/1.png'} />
            <CardCartCheckbox setModalOpen={setModalOpen} modalOpen={modalOpen} modal={modal} setModal={setModal} dashboard={true} img={'/Cart/card/4.png'} desc={"**** **** 7812 3436"} heading={"Debit Card"} />

</form>


<OutlinedPrimaryButton className={'main-purple mt-16'}>
         <p onClick={() =>setAddNew(!addNew)}>Add New Card</p>
</OutlinedPrimaryButton>


{
    addNew ? <div className='mt-16'>
    <h4 className='heading4'>Add New Card</h4>

    <div className='mt-8 grid grid-cols-2 gap-4'>
           <CartInputText label={'Cardholder Name'} /> 
           <CartInputText label={'Card Number '} /> 
           <CartInputText label={'Expiration Date'} /> 
           <CartInputText label={'CVC'} /> 
                        
    </div>

    <div className='mt-8'>

        <PrimaryButton>
            <p onClick={() =>setAddNew(!addNew)}>Save Card</p>
        </PrimaryButton>
    
    </div>


</div> : ""
}




</div>
                    }
                        


                        </div>

            </section>
        


    </Page>
}