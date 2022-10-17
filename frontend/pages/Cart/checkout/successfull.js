import Link from "next/link";
import { EmpytyState, OrderSummaryItem, PrimaryButton } from "../../../Components/Common";
import { Page } from "../../../Components/Page";
import { Breaker } from "../../../Components/Sidebar";


export default function Sucessfull () {

    return <Page>
         <section className='flex flex-col relative items-center'>


<h1 className='heading1'>My Cart</h1>

<img src='/common/spiral.svg' style={{
            top:"55%",
            right:"9%"
      }} className=" absolute" />

<img src='/cart/star.svg' style={{
            top:"30%",
            left:"5%"
      }} className=" absolute" />

<img src='/common/triangle.svg' style={{
            top:"90%",
            left:"15%"
      }} className=" absolute" />

<div className='mt-4 ' >
    


<div className="flex flex-col items-center p-16 relative">
        <div className="flex px-4 flex-col relative justify-center items-center">
           

        <div className='min-w-[400px] '>
                                        
                                        <div className='rounded-3xl bg-white py-8 m-2 order-summary-box-shadow px-8'>
                                        
                                        <h4 className='heading4'>Order Code #6789070 </h4>
                                        <Breaker />

                                       


                                        <div className='flex flex-row my-4  justify-between items-center'>
                                            <p  className='button-text' style={{color:"#94A3B8"}}>Recipient</p>
                                            <p className='ml-16 button-text' >John Doe</p>
                                        </div>

                                        <div className='flex flex-row my-4 justify-between items-center'>
                                            <p  className='button-text' style={{color:"#94A3B8"}}>Mobile Number</p>
                                            <p className='ml-16 button-text' >+34283921231</p>
                                        </div>

                                        <div className='flex flex-row my-4 justify-between items-center'>
                                            <p  className='button-text' style={{color:"#94A3B8"}}>Address </p>
                                            <p className='ml-16 button-text' >6391 Elgin St. Celina, Delaware 10299</p>
                                        </div>

                                        <div className='flex flex-row my-4 justify-between items-center'>
                                            <p  className='button-text' style={{color:"#94A3B8"}}>Delivery Method</p>
                                            <p className='ml-16 button-text' >Pickup Delivery</p>
                                        </div>


                                        <div className='flex flex-row my-4 justify-between items-center'>
                                            <p  className='button-text' style={{color:"#94A3B8"}}>Payment Card</p>
                                            <p className='ml-16 button-text' >**** **** 9914 4436</p>
                                        </div>

                                        <Breaker />

                                        <div className='flex flex-row justify-between items-center'>
                                            <h2 className='heading6'> 
                                                Order Total
                                            </h2>
                                            <h6 className='heading6 main-purple'>
                                            $1921.99
                                            </h6>
                                        </div>


                                        <div className='mt-16 mb-4'>
                                            <PrimaryButton className={'w-full'}>
                                                <Link href={'/profile/user/dashboard/orders'}>Track My Order</Link>
                                            </PrimaryButton>
                                        </div>

                                        
                                
                                        </div>
                                </div>

                                
           
           
           
            <img src='/header/Auth/sparkle.svg' style={{
                top:"-10%",
                right:"-8%"
            }} className=" absolute" />
        </div>

        <img src={'/index/circle.svg'} style={{
            zIndex:'-1',
            top:"0"
        }} className='absolute'  />
    </div>




    
</div>





</section> 
    </Page>
}