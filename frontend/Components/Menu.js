import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import Image from "next/image"
import camera from "../public/camera.png"
import group from "../public/group.png"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MenuCard from './MenuCard';
import thunder from "../public/thunder.png"
import arrow from "../public/arrow.png"
import ExplorerCard from './ExplorerCard';
import triangle from "../public/triangle.png"

function Menu() {
    return (
        <div>
            <div className='px-20 m-10 rounded-2xl'>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"

                >
                    <SwiperSlide>
                        <img className='relative min-w-full' src={'slider/background2.png'} />
                        <div className='absolute' style={{ color: "#171732", left: "70px" }}>
                            <div className=' flex flex-col justify-items-start text-left'>
                                <h1 className='text-6xl font-bold'>Trend Alarm</h1>
                                <h1 className='text-6xl font-bold'> ‘’Green”</h1>
                                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit, sed do eiusmod tempor.</p>
                                <button className='btn rounded-md w-32 my-2 text-sm py-2 text-white ' style={{ background: "linear-gradient(71.85deg, #91AAFF 2.68%, #3752D7 97.55%)" }}>Shop Now</button>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className='relative min-w-full rounded-lg' src={'slider/slide-2.png'} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className='relative min-w-full rounded-lg' src={'slider/slide-3.png'} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className='relative min-w-full rounded-lg' src={'slider/slide-4.png'} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className='relative min-w-full rounded-lg' src={'slider/slide-5.png'} />
                    </SwiperSlide>
                    
                </Swiper>
            </div>
            <div className='flex flex-col justify-start mx-24' style={{ color: "#171732" }}>
                <div>
                    <h4 className='text-2xl font-bold mx-8 my-5'>
                        Categories
                    </h4>
                </div>
                <div>
                    <Swiper className="mySwiper">
                        <SwiperSlide>
                            <div className='grid grid-flow-col auto-cols-max md:auto-cols-min gap-5'>
                                <div style={{ backgroundColor: "rgb(244 245 246)", height: "70px", width: "260px", alignItems: "center" }} className=" px-3 rounded-xl flex justify-between">
                                    <p className='font-bold'>All</p>
                                    <div style={{ alignItems: "center" }} className="flex">
                                        <p className='text-sm mx-2'>1.150 products</p>
                                        <div className='bg-white w-12 h-12 rounded flex justify-center p-2'>
                                            <Image src={camera} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ backgroundColor: "rgb(244 245 246)", height: "70px", width: "260px", alignItems: "center" }} className=" px-3 rounded-xl flex justify-between">
                                    <p className='font-bold'>All</p>
                                    <div style={{ alignItems: "center" }} className="flex">
                                        <p className='text-sm mx-2'>1.150 products</p>
                                        <div className='bg-white w-12 h-12 rounded flex justify-center p-2'>
                                            <Image src={camera} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ backgroundColor: "rgb(244 245 246)", height: "70px", width: "260px", alignItems: "center" }} className=" px-3 rounded-xl flex justify-between">
                                    <p className='font-bold'>All</p>
                                    <div style={{ alignItems: "center" }} className="flex">
                                        <p className='text-sm mx-2'>1.150 products</p>
                                        <div className='bg-white w-12 h-12 rounded flex justify-center p-2'>
                                            <Image src={camera} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ backgroundColor: "rgb(244 245 246)", height: "70px", width: "260px", alignItems: "center" }} className=" px-3 rounded-xl flex justify-between">
                                    <p className='font-bold'>All</p>
                                    <div style={{ alignItems: "center" }} className="flex">
                                        <p className='text-sm mx-2'>1.150 products</p>
                                        <div className='bg-white w-12 h-12 rounded flex justify-center p-2'>
                                            <Image src={camera} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='grid grid-flow-col auto-cols-max md:auto-cols-min gap-5'>
                            <div style={{  height: "70px", width: "260px", alignItems: "center" }} className=" px-3 rounded-xl flex justify-between bg-slate-100">
                                    <p className='font-bold'>All</p>
                                    <div style={{ alignItems: "center" }} className="flex">
                                        <p className='text-sm mx-2'>1.150 products</p>
                                        <div className='bg-white w-12 h-12 rounded flex justify-center p-2'>
                                            <Image src={camera} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{  height: "70px", width: "260px", alignItems: "center" }} className=" px-3 rounded-xl flex justify-between bg-slate-100">
                                    <p className='font-bold'>All</p>
                                    <div style={{ alignItems: "center" }} className="flex">
                                        <p className='text-sm mx-2'>1.150 products</p>
                                        <div className='bg-white w-12 h-12 rounded flex justify-center p-2'>
                                            <Image src={camera} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{  height: "70px", width: "260px", alignItems: "center" }} className=" px-3 rounded-xl flex justify-between bg-slate-100">
                                    <p className='font-bold'>All</p>
                                    <div style={{ alignItems: "center" }} className="flex">
                                        <p className='text-sm mx-2'>1.150 products</p>
                                        <div className='bg-white w-12 h-12 rounded flex justify-center p-2'>
                                            <Image src={camera} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{  height: "70px", width: "260px", alignItems: "center" }} className=" px-3 rounded-xl flex justify-between bg-slate-100">
                                    <p className='font-bold'>All</p>
                                    <div style={{ alignItems: "center" }} className="flex">
                                        <p className='text-sm mx-2'>1.150 products</p>
                                        <div className='bg-white w-12 h-12 rounded flex justify-center p-2'>
                                            <Image src={camera} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center my-20' style={{ color: "#171732" }}>
                <div className='relative flex flex-col justify-center items-center' style={{ width: "700px" }}>
                    
                    <img src='/index/circle.svg' className='w-full absolute' style={{
                        right:"-60%",
                        maxWidth:"893px",
                        top:"10%"
                    }} />

                    <h1 className='text-5xl font-bold'>
                        New Arrivals
                    </h1>
                    <p className='text-xs'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <p className='text-xs'>
                        sed do eiusmod tempor incididunt.
                    </p>
                    <div className='absolute w-12' style={{ left: "483px", top: "-26px" }}>
                        <Image src={group} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='grid grid-cols-3' style={{ width: "1100px" }}>
                    <MenuCard imgClass="250px" upperSection="48" bagIconLeft="88%" bagIconTop="343px" />
                    <MenuCard imgClass="250px" upperSection="48" bagIconLeft="88%" bagIconTop="343px" />
                    <MenuCard imgClass="250px" upperSection="48" bagIconLeft="88%" bagIconTop="343px" />
                </div>
                <a href='#' className='mt-10 text-blue-600 text-sm underline'>See All</a>
            </div>
            <div className='flex flex-col mt-10' style={{ color: "#171732" }}>
                <div className='flex mx-36 relative'>
                    <img src='/index/circle.svg' className='w-full absolute ' style={{
                        left:"-6%",
                        maxWidth:"893px"
                    }} />
                    <div >
                        <h2 className='text-3xl font-bold'>
                            Flash Sale
                        </h2>
                        <p className='w-64' style={{ fontSize: "10px" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </p>
                    </div>
                    <div className='w-6 mb-2 absolute' style={{ top: "-7px", left: "160px" }}>
                        <Image src={thunder} />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='grid grid-cols-4 gap-5 mt-10' style={{ width: "1050px" }}>
                        <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="NEW" />
                        <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="NEW" />
                        <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="NEW" />
                        <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="NEW" />
                    </div>
                    <a href='#' className='mt-10 text-blue-600 text-sm underline'>See All</a>
                </div>
            </div>
            <div className='flex flex-col mt-10' style={{ color: "#171732" }}>
                <div className='flex mx-36 relative'>
                    <div >
                        <h2 className='text-3xl font-bold'>
                            Top Rated Products
                        </h2>
                        <p className='w-64' style={{ fontSize: "10px" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </p>
                    </div>
                    <div className='w-16 mb-2 absolute' style={{ top: "-7px", left: "900px" }}>
                        <Image src={arrow} />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='grid grid-cols-4 gap-5 mt-10' style={{ width: "1050px" }}>
                        <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                        <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                        <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                        <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%"/>
                    </div>
                    <a href='#' className='mt-10 text-blue-600 text-sm underline'>See All</a>
                </div>
            </div>
            <div className='flex flex-col mt-10' style={{ color: "#171732" }}>
                <div className='flex mx-36 relative'>
                     <div >
                        <h2 className='heading1'>
                            Explorer Shops
                        </h2>
                        <p className='w-[480px] body-regular' >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </p>
                    </div>
                    <div className='w-16 mb-2 absolute' style={{ top: "-7px", left: "900px" }}>
                        <Image src={triangle} />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center px-24'>
                    <div className='grid grid-cols-3 w-full gap-5 mt-10' >
                        <ExplorerCard/>
                        <ExplorerCard/>
                        <ExplorerCard/>
                        <ExplorerCard/>
                        <ExplorerCard/>
                        <ExplorerCard/>
                    </div>
                    <a href='/shop/explore' className='mt-10 text-blue-600 text-sm underline'>See All</a>
                </div>
            </div>
        </div>
    )
}

export default Menu