import Link from 'next/link'
import { AuthInputField, PrimaryButton } from '../../Components/Common'
import {HeaderLogin as Header} from '../../Components/Header'
export default function Reset () {


    return <div className='grid grid-rows-6 min-h-screen'>
            <Header />

            <div className='grid grid-cols-12 row-span-4'>
                        <div className='col-start-2 col-span-5 flex flex-col items-center justify-center'>
                               
                                <div className='relative min-w-694  max-w-2xl  py-2'>
                                        <h1 className='text-6xl text-left whitespace-nowrap text-black-ikon font-bold'  style={{
                                        fontSize:"64px"
                                    }}> Reset Password</h1>
                                        <img src='/header/Auth/sparkle.svg' className='sparkle absolute' style={{
                                                left:"75%" ,
                                                top :"-75%"
                                        }}/>
                                </div>

                               <br />
                               <br />

                                <div className='min-w-694 max-w-2xl  py-2'>

                                    <AuthInputField label={'Password'} icon={'/header/Auth/Lock.svg'} type={'password'} />  
                                    <AuthInputField label={'Confirm Password'} icon={'/header/Auth/Lock.svg'} type={'password'} />  

                                    <PrimaryButton className={'w-full my-2 py-4 '}><Link href={"/auth/login"}>Reset Password</Link></PrimaryButton>
                                </div>
                        </div>

                        <div className='col-span-5 flex flex-row items-center relative justify-center'>
                                    <img src='/header/Auth/hero-1.png' className='rounded-xl hero-img absolute' alt=''/>
                                    <img src='/header/Auth/hero-2.png' className='rounded-xl hero-2 absolute' alt=''/>
                                    <img src='/header/Auth/hero-3.svg' className='rounded-xl absolute hero-3' alt=''/>
                                    <img src='/index/circle.svg' className='rounded-xl absolute' style={{
                                        top:"0",
                                        left:"5%",
                                        right:"0",
                                        bottom:"0"
                                    }} alt=''  />         
                        </div>
            </div>

            <div className='grid row-span-1 grid-cols-12'>
                    <div className='col-start-1 col-end-6 items-center justify-center grid grid-cols-12'>
                        <img src='/header/Auth/bottom-img.svg' className='col-start-2' />
                    </div>
                    
            </div>
    </div>
}