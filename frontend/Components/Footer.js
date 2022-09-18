import { AuthInputField, NewsLetterInputField, WhiteButton } from "./Common"

export const Footer = () => {

    return (
        <footer className="flex flex-col " >

            <div className="grid grid-cols-12" >
                <div className="col-span-10 grid grid-cols-12 bg-newsletter col-start-2" style={{
                    backgroundImage : "url('/footer/background.png')"
                }}>

                    
                    
                    <div className="col-start-7 col-span-5 flex flex-col justify-center" >
                        <h1 className="text-white font-extrabold text-5xl"  >Join our newsletter now!</h1>
                        <p className="text-white ">Register now and get our latest updates and promos.</p>
                        <div className="flex flex-row">
                            <NewsLetterInputField type={'email'} label="Email" icon={'/footer/email.svg'} />
                            <div className="flex flex-row items-end mb-3 ml-4 justify-center">
                                <WhiteButton className={'p-4 px-6'}>
                                     Send
                                </WhiteButton>
                            </div>
                         </div>
                    </div>
                    
                    

                </div>
            </div>


            <div className="grid grid-cols-12" >
                    <img className="col-start-2 col-span-1" src='/header/logo.svg' />

                    <div className="col-start-5 col-span-6 w-full items-center justify-center grid grid-rows-2">
                         <nav className="row-span-1 grid grid-cols-4">
                            <label className="col-span-1">Privacy Policy</label>
                            <label className="col-span-1">Terms &Services</label>
                            <label className="col-span-1">About us</label>
                            <label className="col-span-1">Contact us</label>
                         </nav>


                         <p>Copyright © 2022 iKon Mall | Powered by iKon Mall</p>
                    </div>
            </div>
            
        </footer>
    )
}