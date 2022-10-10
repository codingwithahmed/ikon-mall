import React from 'react'
import Image from "next/image"
import lamp from "../public/Lamp.png"
import line from "../public/Line.svg"
import filledStar from "../public/Star.png"
import star from "../public/Star2.png"
import bag from "../public/bag.png"
import heart from "../public/Heart.png"
import Link from 'next/link'

function MenuCard({imgClass, upperSection, bagIconLeft, bagIconTop, redCircle}) {
    return (
        <Link href={'/products/exampleproduct'}><div className='rounded-lg cursor-pointer'>
            <div className="flex flex-col justify-center items-center">
                <div className="block px-6 relative rounded-lg shadow-lg bg-white max-w-sm">
                    <div className="flex flex-col justify-center items-center">
                        <div className={`grid grid-cols-2 gap-${upperSection} w-full`}>
                            <div className='rounded-full flex justify-center items-center text-white p-0.5' style={{ width: "30px", height: "30px", backgroundColor: "#FF6264" }}>
                                <p className=' text-xs'>{redCircle}</p>
                            </div>
                            <div className='flex flex-row items-center justify-end'>
                                <button className='w-8 flex justify-center items-center rounded p-2' style={{ backgroundColor: "#EFEFEF"}}>
                                    <Image src={heart}/>
                                </button>
                            </div>
                        </div>
                        <div style={{ width: `${imgClass}` }} >
                            <Image src={lamp} alt="man" />
                        </div>
                        <Image src={line} width="200px" />
                        <div className='flex my-2 w-24'>
                            <Image src={filledStar} />
                            <Image src={filledStar} />
                            <Image src={filledStar} />
                            <Image src={filledStar} />
                            <Image src={star} />
                        </div>
                        <p className='text-sm font-bold'>Black Table Lamp</p>
                        <div className='grid grid-flow-col gap-10 my-2'>
                            <p className='text-sm line-through' style={{ color: "#8991A4" }}>$398.00</p>
                            <p className='text-sm font-bold'>$299</p>
                        </div>
                        <div className='absolute' style={{ left: bagIconLeft, top: bagIconTop }}>
                            <button className='text-white p-1.5 flex justify-center items-center w-9' style={{ borderRadius: "9px 0 9px 0", background: "linear-gradient(71.85deg, #91AAFF 2.68%, #3752D7 97.55%)" }}>
                                <Image src={bag} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div></Link>
    )
}

export default MenuCard