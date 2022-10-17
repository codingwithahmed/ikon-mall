import { useState } from 'react'
import {  OrderSummaryItem, OutlinedPrimaryButton, PrimaryButton } from '../../../Components/Common'
import {Page} from '../../../Components/Page'
import { CardCartCheckbox } from '../../../Components/Cards'
import { Breaker } from '../../../Components/Sidebar'
import { CartInputText } from '../../../Components/Inputs'
import Link from 'next/link'


export default function Index () {
    const [empty ,setEmpty] = useState(true)
    return <Page>

            
                
                <section className='flex flex-col relative px-8 items-center'>


                        <h1 className='heading1'>Checkout</h1>

                        <div className='my-4  flex-row flex items-center'>
                                <div className=' flex flex-row items-center'>
                                        <h2 className='px-4 py-2 gradient text-white rounded-xl'>
                                                1
                                        </h2>

                                        <p className='button-text mx-2 main-purple'>Address</p>
                                        
                                </div>

                                <div className='  mx-2'>
                                        <img src='/common/line.svg' />
                                </div>

                                <div className='  ml-2 flex flex-row items-center'>
                                        <h2 className='px-4 py-2 border-slate-300 text-slate-300 border-1  rounded-xl'>
                                                2
                                        </h2>
                                        <p className='button-text whitespace-nowrap mx-2 text-slate-300'>Delivery Method</p>
        
                                </div>


                                <div className=' mx-2'>
                                        <img src='/common/line.svg' />
                                </div>

                                <div className=' flex flex-row items-center'>
                                        <h2 className='px-4 py-2 border-slate-300 text-slate-300 border-1  rounded-xl'>
                                                3
                                        </h2>
                                        <p className='button-text whitespace-nowrap mx-2 text-slate-300'>Payment</p>
        
                                </div>
                                

                        </div>





                        <div className='grid grid-cols-12 w-full '>
                                <div className='col-span-8 px-16'>

                                    <h3 className='heading4'>Delivery Address</h3>


                                    <form className='grid grid-cols-2'>

                                                <CardCartCheckbox heading={"Pickup"} desc={"Order online and pick up from the store"} />
                                                <CardCartCheckbox img={'/Cart/card/2.png'} heading={"Shippo Delivery"} desc ="Online marketplaces and platforms integrate shipping" />
                                                <CardCartCheckbox img={'/Cart/card/5.svg'} heading={"Vendor Delivery"} desc="Vendor delivers directly to your home" />

                                    </form>









                                </div>

                                <div className='col-span-4 '>
                                        
                                        <div className='rounded-3xl py-8 order-summary-box-shadow px-8'>
                                        
                                        <h4 className='heading4'>Your Order Summary</h4>
                                        <Breaker />

                                        <OrderSummaryItem name={' Bluetooth Speaker'} price={'588.00'} quntity={'2'} />
                                        <OrderSummaryItem name={' 2022 Apple MacBook Pro Laptop with M2 chip'} price={'1,245.00'} quntity={'1'} />
                                        <OrderSummaryItem name={"Mevlzz Men's Running Shoes Air Low Top Shoes"} price={'39.00'} quntity={'1'} />
                                        
                                        <Breaker />


                                        <div className='flex flex-row my-4 justify-between items-center'>
                                            <p  className='button-text' style={{color:"#94A3B8"}}>Subtotal</p>
                                            <p className='button-text' style={{color:"#94A3B8"}}>$1921.99</p>
                                        </div>

                                        <div className='flex flex-row my-4 justify-between items-center'>
                                            <p  className='button-text' style={{color:"#94A3B8"}}>Shipping</p>
                                            <p className='button-text' style={{color:"#94A3B8"}}>$0.99</p>
                                        </div>

                                        <div className='flex flex-row my-4 justify-between items-center'>
                                            <p  className='button-text' style={{color:"#94A3B8"}}>Taxes</p>
                                            <p className='button-text' style={{color:"#94A3B8"}}>$1921.99</p>
                                        </div>

                                        <Breaker />

                                        <div className='flex flex-row justify-between items-center'>
                                            <h2 className='heading6'> 
                                                Order Total
                                            </h2>
                                            <h6 className='heading6 main-puruple'>
                                            $1921.99
                                            </h6>
                                        </div>

                                        <div className='mt-8 mb-4'>
                                            <PrimaryButton className={'w-full'}>
                                                <Link href={'/Cart/checkout/card'}>Checkout</Link>
                                            </PrimaryButton>
                                            
                                        </div>

                                        <div>
                                            <p className='text-center cursor-pointer main-purple'><Link href={'/'}>Continue Shopping</Link></p>
                                        </div>
                                
                                        </div>
                                </div>
                        </div>  

                </section> 
                        

    </Page> 
}