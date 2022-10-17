import Image from 'next/image'
import { useState } from 'react'
import { EmpytyState, OrderSummaryItem, PrimaryButton } from '../../Components/Common'
import {Page} from '../../Components/Page'
import MenuCard from '../../Components/MenuCard'
import { CartItemCard } from '../../Components/Cards'
import { Breaker } from '../../Components/Sidebar'
import Link from 'next/link'


export default function Index () {
    const [empty ,setEmpty] = useState(false)
    return <Page>

            {
                empty ?
                // IF  Empty
                
                
                <section className='flex flex-col relative items-center'>


                        <h1 className='heading1'>My Cart</h1>

                        <img src='/arrow.png' style={{
                                    top:"45%",
                                    right:"5%"
                              }} className=" absolute" />

                        <img src='/cart/star.svg' style={{
                                    top:"30%",
                                    left:"5%"
                              }} className=" absolute" />

                        <div className='mt-4 ' >
                            <EmpytyState desc={'Looks like you haven’t made your choice yet. Let’s shop!'} img={'/Cart/empty.png'} heading={'Your cart is empty'} >
                                    <PrimaryButton>
                                        Shop Now
                                    </PrimaryButton>
                            </EmpytyState>

                            
                        </div>



                        <div className='mt-4 w-full px-16 text-left'>
                                <h1 className='heading1'>Recommended Products</h1>
                                <p className='body-regular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
                        
                                <div className="grid grid-cols-4 w-full gap-6 mt-8">
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                           
                        </div>
                        
                        </div>
                        


                </section> : 
                
                // IF Not Empty
                
                
                <section className='flex flex-col relative items-center'>

                        <h1 className='heading1'>My Cart</h1>



                        <div className='grid grid-cols-12 w-full px-8'>
                                <div className='col-span-8 px-16'>

                                    <CartItemCard products={[
                                        {
                                            title:'2X  Bluetooth Speaker',
                                            brand : 'Ortizan',
                                            propertyValue : 'X10',
                                            price :"588",
                                            propertyName : "Model"

                                        },

                                        {
                                            title: "1X  2022 Apple MacBook Pro Laptop with M2 chip",
                                            brand : "Apple",
                                            propertyValue : "2022 MacBook Pro M2...",
                                            price : "1,245",
                                            propertyName : "Model "

                                        }
                                    ]} shop={{
                                        name :"İKon Shop",
                                        delivery : "Pickup",
                                        rating :4,
                                        img : '/common/cart.svg'
                                    }} />


                                <CartItemCard products={[
                                        {
                                            title:"1X  Mevlzz Men's Running Shoes Air Low Top Shoes",
                                            brand : 'Mevlzz',
                                            propertyValue : '10',
                                            price :"39",
                                            propertyName : "Size"
                                        }
                                    ]} shop={{
                                        name :"Shoes Shop",
                                        delivery : "Pickup",
                                        rating :4,
                                        img : '/common/cart.svg'
                                    }} />

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
                                                <Link href={'/Cart/checkout/address'}>Checkout</Link>
                                            </PrimaryButton>
                                        </div>

                                        <div>
                                            <p className='text-center cursor-pointer main-purple'><Link href={'/'}>Continue Shopping</Link></p>
                                        </div>
                                
                                        </div>
                                </div>
                        </div>  


                </section>
            }
            

    </Page> 
}