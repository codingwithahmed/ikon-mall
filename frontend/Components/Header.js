import {useState,useEffect} from 'react'
import Link from 'next/link'
import { CartIcon, PrimaryButton } from './Common'
import Image from 'next/image'


export const HeaderLogin = () => { 
    
    return (
            <header className='grid row-span-1   py-6 grid-cols-12 items-center justify-around'>
                    
                    <div className='flex flex-col col-end-4 col-start-2 items-start justify-center'>
                           <span className='cursor-pointer'><Link href={'/'}><img 
                                className='w-28' 
                                src={'/header/logo.svg'} 
                                
                                /></Link> </span>
                    </div>

                    <div className='flex flex-row items-center justify-end col-start-5 col-end-12'>
                            <span className={'px-4'}>Don’t have an account? </span>
                            <div className={'px-4'}><PrimaryButton className={"px-6 py-2"}><Link  href={'/auth/register'} >Sign up</Link></PrimaryButton></div>
                    </div>  
            </header> 
)}  

export const HeaderRegister = () => { 
    
        return (
                <header className='grid row-span-1   py-6 grid-cols-12 items-center justify-around'>
                        
                        <div className='flex flex-col col-end-4 col-start-2 items-start justify-center'>
                               <span className='cursor-pointer'><Link href={'/'}><img className='' src={'/header/logo.svg'} /></Link> </span>
                        </div>
    
                        <div className='flex flex-row items-center justify-end col-start-5 col-end-12'>
                                <span className={'px-4'}>Already have an account? </span>
                                <div className={'px-4'}><PrimaryButton className={"px-6 py-2"}><Link  href={'/auth/login'} >Sign In</Link></PrimaryButton></div>
                        </div>  
                </header> 
    )}  




export const HeaderIndexLogout = () => {

        return (
                <header className='grid grid-cols-12 row-span-1 mt-5 items-center justify-center' >

                                <div className='flex col-span-2 flex-col items-center justify-center'>
                                        <img alt='' className='w-32' src={'/header/logo.svg'} />
                                </div>

                                <div className='col-span-6 flex flex-row justify-between items-center col-start-3 bg-gray-100  rounded-lg'>
                                        <input className='outline-none p-3 bg-none border-none bg-transparent w-full' />
                                        <PrimaryButton className={'p-3 h-full'} ><img src='/header/search.svg' /> </PrimaryButton>
                                </div>

                                <nav className='flex col-start-10 col-span-3 flex-row items-center justify-evenly'>
                                        <CartIcon />    
                                        <Link href={'/auth/login'}><p className='cursor-pointer ikon-primary-color hover:underline'>Sign in</p></Link>
                                        <PrimaryButton className={'px-4 py-2'}><Link href={'/auth/register'}>Sign Up</Link></PrimaryButton>
                                </nav>

                </header>
        )
}