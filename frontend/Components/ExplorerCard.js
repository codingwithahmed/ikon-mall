import Image from 'next/image'
import React, { useState } from 'react'
import logo from "../public/Logo.png"
import { OutlinedPrimaryButton, PrimaryButton } from './Common'

function ExplorerCard() {
    const [connect, setConnect] = useState(false)
    const [active, setActive] = useState("")

    const onClick = ()=>{
        setConnect(!connect)
        setActive("active:bg-blue-800")
    }


    /* return (
        <div>
            <div className="flex justify-center">
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                    <div className='flex justify-center items-center'>
                        <Image src={logo}/>
                    </div>
                    <button onClick={onClick} type="button" className={`inline-block px-6 py-2.5 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 ${active} active:shadow-lg hover:text-white active:text-white focus:text-white transition duration-150 ease-in-out`}>{connect? "Connected": "Connect"}</button>
                </div>
            </div>
        </div>
    ) */

    return (
        <div>
            <div className='flex flex-col p-5 px-10' style ={{
                border:"0.5px solid #CBD5E1",
                borderRadius: "32px"
            }}>
                    <div className='flex flex-row justify-between items-center'>
                            <div className='flex flex-row justify-between w-full items-center'>
                                    <img src='/header/logo.svg' className='rounded-full w-12 shadow-slate-300 ' />
                                    <div className='flex flex-col'>
                                        <h5 className='heading5 underline'>İKon Shop</h5>
                                        <div className='flex flex-row'>
                                            <img src='/index/star.svg'/>
                                            <img src='/index/star.svg'/>
                                            <img src='/index/star.svg'/>
                                            <img src='/index/star.svg'/>
                                            <img src='/index/empty_star.svg'/>
                                        </div>
                                        <p className='body-regular'>244 Connects</p>
                                    </div>

                                    <div className='flex flex-col'>
                                            <PrimaryButton className={'body-regular my-3'}> <p className='text-white'>View Shop</p>  </PrimaryButton>
                                            <OutlinedPrimaryButton className={'body-regular my-3'}> <p className='main-purple'>Message</p> </OutlinedPrimaryButton>
                                    </div>
                            </div>  
                    </div>

                    <div className='flex flex-row  justify-evenly items-center'>

                            <div className='shadow-md rounded-xl mx-2 flex flex-row justify-center items-center' style ={{
                                width:"148px",
                                height:"148px"
                            }}>
                                <img src='/index/i3.png' />
                            </div>

                            <div className='shadow-md rounded-xl mx-2 flex flex-row justify-center items-center' style ={{
                                width:"148px",
                                height:"148px"
                            }}>
                                <img src='/index/i1.png' />
                            </div>

                            <div className='shadow-md rounded-xl mx-2 flex flex-row justify-center items-center' style ={{
                                width:"148px",
                                height:"148px"
                            }}>
                                <img src='/index/i2.png' />
                            </div>

                            
                    </div>
            </div>
        </div>
    )
}

export default ExplorerCard