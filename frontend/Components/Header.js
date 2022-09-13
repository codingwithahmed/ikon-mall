import {useState,useEffect} from 'react'
import Link from 'next/link'
import { PrimaryButton } from './Common'


export const Header = () => { 
    
    return (
            <header className='grid row-span-1   py-6 grid-cols-12 items-center justify-around'>
                    
                    <div className='flex flex-col col-end-4 col-start-2 items-start justify-center'>
                           <span className='cursor-pointer'><Link href={'/'}><img className='' src={'/header/logo.svg'} /></Link> </span>
                    </div>

                    <div className='flex flex-row items-center justify-end col-start-5 col-end-12'>
                            <span className={'px-4'}><Link  href={'/auth/register'} >Don’t have an account? </Link></span>
                            <div className={'px-4'}><PrimaryButton className={"px-6 py-2"}><Link  href={'/'} >Sign up</Link></PrimaryButton></div>
                    </div>  
            </header> 
            )}  