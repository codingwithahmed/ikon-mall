import { useState } from "react"
import { BreadCrumbs, OutlinedPrimaryButton, PrimaryButton } from "../../Components/Common"
import { Page } from "../../Components/Page"
import { ReviewProductCard } from "../../Components/Review"
import { Breaker } from "../../Components/Sidebar"


export const SingleProduct = () => {

    const [seeMore,setSeeMore] = useState(false)
    const [reviewAll, setReviewAll] = useState(false)


    let x = [1,2,3,4,5,6,7,8,9,10,11,12 ]

    return <Page>

                        <BreadCrumbs path={
                            [
                                {
                                    src : '/search/allcatog',
                                    label: "Products"
                                },
                                {
                                    src : '/products/123',
                                    label:'Product Name'
                                }
                            ]
                        } />

        <div className="flex flex-row justify-between px-8">
                <section className="flex-1 flex flex-col items-center">
                            <div>
                                <img src="/products/1.png" className="rounded-xl" />
                            </div>

                            <div className="flex flex-row justify-evenly mt-6">
                                <div className="flex flex-row justify-around items-center">

                                    <div className="px-5 py-4 slate-100 signle_product_arrow cursor-pointer">
                                            <img src="/products/left.svg" className=" w-3 " />
                                    </div>

                                </div>

                                    <div className="px-5 py-4 rounded-lg cursor-pointer">
                                            <img src="/products/2.png" className=" cursor-pointer rounded-lg w-32   " />
                                    </div>
                                    <div className="px-5 py-4 rounded-lg">
                                            <img src="/products/3.png" className=" cursor-pointer rounded-lg w-32" />
                                    </div>
                                    <div className="px-5 py-4 rounded-lg ">
                                            <img src="/products/4.png" className=" cursor-pointer rounded-lg w-32" />
                                    </div>


                                    <div className="flex flex-row justify-around items-center">
                                        <div className="px-5 py-4 slate-100 cursor-pointer signle_product_arrow">
                                            <img src="/products/right.svg" className=" w-3" />
                                        </div>
                                    </div>

                                    

                                    
                            </div>
                </section>


                <section className="flex-1 flex flex-col mx-8">
                        
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row items-center justify-evenly">
                                <img src="/common/star.svg" className="mr-1 w-[20px]" />
                                <img src="/common/star.svg" className="mx-1 w-[20px]" />
                                <img src="/common/star.svg" className="mx-1 w-[20px]" />
                                <img src="/common/star.svg" className="mx-1 w-[20px]" />
                                <img src="/star2.png" className="mx-1 w-[20px]" />

                                <p className=" text-orange-400 ml-2 mt-1 button-text">
                                    4.9
                                </p>

                                <div className="flex flex-row justify-between items-center ml-2 mt-1 ">
                                    <p className="small-text-dark text-slate-400">
                                        Review (12)
                                    </p>

                                    <p className="px-4 text-slate-400">
                                        |
                                    </p>

                                    <p className="small-text-dark" style={{color:"#0F172A"}}>
                                        Sold 99
                                    </p>
                                </div>

                                
                            </div>


                            <div className="flex flex-row items-center">
                                    <div className="bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer rounded-xl mx-4 p-2">
                                         <img src='/products/heart.svg' />
                                    </div>

                                    <div className="flex flex-row justify-around items-center">
                                        <p>Add to Wishlist</p>
                                    </div>
                            </div>
                        </div>

                        <div className="flex flex-row items-center my-4">
                                <h2 className="signle-product-heading">Bluetooth Speaker</h2>
                        </div>  

                        <div className="flex flex-row items-center my-4">
                            <div className="flex flex-row items-center">
                                <h2 className="signle-product-heading">$294.00</h2>
                                <h4 className="body-large imp_slate-400-text mx-4">$399.00</h4>
                            </div>

                            <div className="flex flex-row items-center ml-8">
                                    <p className="button-text text-red-500 px-4 py-2 border-2 border-red-500 rounded-lg">Save 50%</p>
                            </div>
                        </div>


                        <div className="flex flex-row items-center my-2">
                            <div className="flex flex-row items-center mr-2">
                                <img src="/products/truxk.svg" />
                                <p className="badge-text mx-2">Pickup Delivery</p>
                            </div>  

                            <div className="flex flex-row items-center ml-2">
                                <img src="/products/box.svg" />
                                <p className="badge-text mx-2">In Stock</p>
                            </div> 
                        </div>



                        <Breaker />


                        <div >
                                <h6 className="heading6">Description</h6>

                                <p className="body-regular my-4" style={{
                                                        color:"#334155"
                                                    }}>Bluetooth Speaker with the new style, shockproof, clear voice reception that suitable for recording, online meeting, vlogging, and calling. Free casing with high-quality zipper.</p>
                                {
                                    seeMore ? <div className="flex flex-col transtion-all my-4">
                                                
                                                <div className="flex flex-row justify-between w-[310px] my-2">
                                                            <h3 className="button-text flex-1">Brand:</h3>
                                                            <p className="body-regular flex-1">Ortizan</p>
                                                </div>

                                                <div className="flex flex-row justify-between w-[310px] my-2">
                                                            <h3 className="button-text flex-1">Model:</h3>
                                                            <p className="body-regular flex-1">x10</p>
                                                </div>

                                                <div className="flex flex-row justify-between w-[310px] my-2">
                                                            <h3 className="button-text flex-1">Connectivity:</h3>
                                                            <p className="body-regular flex-1">Bluetooth</p>
                                                </div>

                                                <div className="flex flex-row justify-between w-[310px] my-2">
                                                            <h3 className="button-text flex-1">Special Feature:</h3>
                                                            <p className="body-regular flex-1">Waterproof, WIRELESS</p>
                                                </div>

                                                <div>

                                                    <p className="body-regular" style={{
                                                        color:"#334155"
                                                    }}>[Hi-Fi Stereo Sound and Dual Pairing Function]: The bluetooth speaker equips with 24w of stereo audio drivers speaker and advanced digital signal processor, which pumps out crisp treble, detailed mids, and especially enhanced bass at any volume. You can purchase two speakers at the same time to truly enjoy the surround sound of a movie theater by using the Dual Pairing function, it's an auditory experience that's truly unparalleled.
[RGB Colorful Light Show]: The wireless LED Bluetooth speakers not only a speaker but also as a unique night theme light, it provide different color-changing themes. Using Ortizan bluetooth speakers, a totally reimagined rainbow light show that pulses, phases, and shines to the beat of your music. While you enjoy music, gradient lights would truly bring you party atmospher. Using night theme light, you could just open it as a led light without use it to play music.</p>

                                                </div>

                                    </div> : ''
                                }
                                
                        </div>


                        <div className="my-4 flex flex-row items-center">
                             
                             {
                                seeMore ? <div className="flex flex-row items-center cursor-pointer" onClick={() => setSeeMore(!seeMore)} >
                                <p className="link-button main-purple">See Less</p>
                                <img className="mx-2 rotate-180" src="/common/down_arrow_purple.svg"/>
                         </div> : <div className="flex flex-row items-center cursor-pointer" onClick={() => setSeeMore(!seeMore)} >
                                <p className="link-button main-purple">See More</p>
                                <img className="mx-2" src="/common/down_arrow_purple.svg"/>
                         </div>
                             }
                             
                             


                        </div>



                        <div className="flex flex-row justify-between items-center">
                                <div className="flex-1 flex flex-row items-center">
                                        <p className="small-text-dark mr-4" style={{color:'#94A3B8'}}>Quantity</p>
                                        <button className="py-2 px-4 text-slate-400 rounded-lg bg-slate-100">
                                            -
                                        </button>

                                        <h6 className="heading6 mx-4">1</h6>

                                        <button className="py-2 text-white px-4 rounded-lg gradient-bg">
                                            +
                                        </button>
                                </div>

                                <div className="flex-1 flex-col flex">
                                        <PrimaryButton>
                                            Add to Cart
                                        </PrimaryButton>
                                </div>

                        </div>


                        <div className="my-8">
                                <h6 className="heading6 text-slate-900">Colors</h6>
                                <div className="flex flex-row items-center my-2">
                                    <img src="/products/4.png" className=" cursor-pointer mr-4 rounded-lg w-[72px]" />
                                    <img src="/products/5.png" className=" cursor-pointer mx-4 rounded-lg w-[72px]" />
                                    <img src="/products/6.png" className=" cursor-pointer ml-4 rounded-lg w-[72px]" />
                                </div>
                        </div>

                        <div>
                            <h6 className="heading6">Seller </h6>
                        </div>
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

                        <div className="flex-1 flex flex-row items-center justify-end">
                                    <OutlinedPrimaryButton className={'main-purple font-semibold'}>
                                            Message
                                    </OutlinedPrimaryButton>
                        </div>
                    </div>



                    <div className="my-4">

                        <h6 className="heading6">Reviews (12)</h6>
                        
                        <div className="flex flex-col">

                            {
                                reviewAll ? x.map(i => <ReviewProductCard /> ) : x.splice(0,3).map(i => <ReviewProductCard /> )
                            }


                        </div>
                    </div>


                    <div className="my-4 flex flex-row items-center">
                             
                             {
                                reviewAll ? <div className="flex flex-row items-center cursor-pointer" onClick={() => setReviewAll(!reviewAll)} >
                                <p className="link-button main-purple">See Less</p>
                                <img className="mx-2 rotate-180" src="/common/down_arrow_purple.svg"/>
                         </div> : <div className="flex flex-row items-center cursor-pointer" onClick={() => setReviewAll(!reviewAll)} >
                                <p className="link-button main-purple">See More</p>
                                <img className="mx-2" src="/common/down_arrow_purple.svg"/>
                         </div>
                             }
                             
                             


                        </div>

                </section>
        </div>
    </Page>
}


export default SingleProduct