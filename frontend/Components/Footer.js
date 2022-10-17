import Link from "next/link"
import { AuthInputField, NewsLetterInputField, WhiteButton } from "./Common"

export const Footer = () => {

    return (
        <footer className="min-h-screen flex-col mt-8 flex relative" >

            <div className="grid grid-cols-12 " >
                <div className="col-span-10 grid grid-cols-12 bg-newsletter col-start-2" style={{
                    backgroundImage : "url('/footer/background.png')",
                    zIndex:'1'
                }}>

                    
                    
                    <div className=" col-start-7 col-end-12 flex flex-col justify-center" >
                        <h1 className="text-white font-extrabold text-5xl"  >Join our newsletter now!</h1>
                        <p className="text-white ">Register now and get our latest updates and promos.</p>
                        <div className="flex flex-row">
                            <NewsLetterInputField type={'email'} label="Email" icon={'/footer/Email.svg'} />
                            <div className="flex flex-row items-end mb-3 ml-4 justify-center">
                                <WhiteButton className={'p-4 px-6'}>
                                     Send
                                </WhiteButton>
                            </div>
                         </div>
                    </div>
                    
                    

                </div>
            </div>

            <div className="flex  w-full justify-center bg-indigo-50 items-center absolute flex-col" style={{
                minHeight:"70vh",
                top:"30%",
            }}>

            <div className="grid grid-cols-12 " >
                    <img className="col-start-2 col-span-1" src='/header/logo.svg' />

                    <div className="col-start-4 col-span-6 w-full items-center grid grid-rows-2">

                         <nav className="row-span-1 flex flex-row justify-evenly items-center  w-full" >
                            <div className=" px-3 body-regular whitespace-nowrap cursor-pointer"><Link href={'/policy'}>Privacy Policy</Link></div>
                            <div className=" px-3 body-regular whitespace-nowrap cursor-pointer"><Link href={'/terms'}>Terms &Services</Link></div>
                            <div className=" px-3 body-regular whitespace-nowrap cursor-pointer"><Link href={'/about'}>About us</Link></div>
                            <div className=" px-3 body-regular whitespace-nowrap cursor-pointer"><Link href={'/contact'}>Contact us</Link></div>
                         </nav> 


                         <p className="row-span-1 small-text-light  text-center">Copyright © 2022 iKon Mall | Powered by iKon Mall</p>
                    </div>

                    <div className="flex flex-row col-start-10 col-span-2 justify-evenly items-center">
                            <img src='/footer/twitter.svg' />
                            <img src='/footer/facebook.svg' />
                            <img src='/footer/youtube.svg' />

                    </div>
            </div>

            </div>
        </footer>
    )
}