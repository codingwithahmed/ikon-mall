import Image from 'next/image'
import React, { useState } from 'react'
import logo from "../public/Logo.png"

function ExplorerCard() {
    const [connect, setConnect] = useState(false)
    const [active, setActive] = useState("")

    const onClick = ()=>{
        setConnect(!connect)
        setActive("active:bg-blue-800")
    }


    return (
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
    )
}

export default ExplorerCard