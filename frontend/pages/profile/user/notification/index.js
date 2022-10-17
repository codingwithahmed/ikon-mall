import Image from 'next/image'
import { useState } from 'react'
import { EmpytyState, OrderSummaryItem, PrimaryButton } from '../../../../Components/Common'
import {Page} from '../../../../Components/Page'
import MenuCard from '../../../../Components/MenuCard'
import { CartItemCard } from '../../../../Components/Cards'
import { Breaker } from '../../../../Components/Sidebar'
import { MessageItem, NotificationItem } from '../../../../Components/Notification'


export default function Index () {
    const [empty ,setEmpty] = useState(false)

    const [selected ,setSelected] = useState('notification')

    return <Page>

            {
                empty ?
                // IF  Empty
                
                
                <section className='flex flex-col relative items-center'>


                        <h1 className='heading1'>Notification   </h1>

                        <img src='/arrow.png' style={{
                                    top:"45%",
                                    right:"5%"
                              }} className=" absolute" />

                        <img src='/cart/star.svg' style={{
                                    top:"30%",
                                    left:"5%"
                              }} className=" absolute" />

                        <div className='mt-4 ' >
                            <EmpytyState desc={'You’ll get updates on your account and shopping activity here'} img={'/profile/user/notification/1.png'} heading={'No Notifications Yet'} >
                                    <PrimaryButton>
                                        Shop Now
                                    </PrimaryButton>
                            </EmpytyState>

                            
                        </div>

                </section> : 
                
                // IF Not Empty
                
                
                <section className='flex flex-col relative items-center'>

                        <h1 className='heading1'>Notification</h1>

                        <div className='flex flex-row my-6'>
                                <div className='flex cursor-pointer flex-row mx-8' onClick={() => setSelected('notification')}>
                                    <img src={'/profile/user/notification/bell.svg'} />
                                    <h6 className='heading6 mx-2'>Notifications(54)</h6>
                                </div>

                                <div className='flex cursor-pointer flex-row mx-8' onClick={() => setSelected('message')}>
                                    <img src={'/profile/user/notification/message.svg'} />
                                    <h6 className='heading6 text-slate-300 mx-2'>Messages(12)</h6>
                                </div>
                        </div>


                        {
                            selected == 'message' ? <div className='flex flex-col w-[75%] mx-auto px-8'>
                                
                            <MessageItem name={'Ride Online Shop'} message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida adipiscing morbi tortor, eget ultricies urna.' time={'1h ago'} img={'/profile/user/notification/8.png'} />
                            <MessageItem name={'One Click Shopping'} message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' time={'1h ago'} img={'/profile/user/notification/9.png'} />
                            <MessageItem name={'Click & Connect'} message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida adipiscing morbi tortor, eget ultricies urna. Lorem Ip.....' time={'1h ago'} img={'/profile/user/notification/10.png'} />
                            <MessageItem name={'Mobile Store'} message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida adipiscing morbi tortor, eget ultricies ' time={'1h ago'} img={'/profile/user/notification/11.png'} />
                            <MessageItem name={'Best Market'} message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida adipiscing morbi tortor, eget' time={'1h ago'} img={'/profile/user/notification/12.png'} />
                            <MessageItem name={'Happy Shop'} message='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida adipiscing morbi tortor, eget ultricies urna.' time={'1h ago'} img={'/profile/user/notification/13.png'} />


                            <div className='flex mt-16 flex-row justify-center items-center'>
                                    <p className='underline main-purple cursor-pointer link-button'>See All</p>  
                            </div>
                    </div> 
                    
                    : 

                    <div className='flex flex-col w-[75%] mx-auto px-8'>
                                
                            <NotificationItem object={"Your Order"} img={'/profile/user/notification/7.png'} event={"Completed"} action={"has been"} time={"1h ago"} />
                            <NotificationItem object={"Your Order"} img={'/profile/user/notification/3.png'} event={"Pickedup"} action={"our order is in the store, waiting for you to be "} time={"1h ago"} />
                            <NotificationItem object={"The Product"} img={'/profile/user/notification/4.png'} event={"is on sale!"} action={"you added to favorites "} time={"1h ago"} />
                            <NotificationItem object={"Your Order"} img={'/profile/user/notification/5.png'} event={"Completed"} action={"has been"} time={"1h ago"} />
                            <NotificationItem object={"Your Order"} img={'/profile/user/notification/6.png'} event={"Pickedup"} action={"our order is in the store, waiting for you to be "} time={"1h ago"} />
                            <NotificationItem object={"Your Order"} img={'/profile/user/notification/2.png'} event={"is on sale!"} action={"you added to favorites "} time={"1h ago"} />


                        <div className='flex mt-16 flex-row justify-center items-center'>
                            <p className='underline main-purple cursor-pointer link-button'>See All</p>  
                        </div>
                    </div>
                        }

                       


                </section>
            }
            

    </Page> 
}