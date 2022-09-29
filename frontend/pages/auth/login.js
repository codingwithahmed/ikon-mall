import Link from 'next/link'
import { AuthInputField, PrimaryButton } from '../../Components/Common'
import {HeaderLogin as Header} from '../../Components/Header'
export default function Login () {


    return <div className='grid grid-rows-6 min-h-screen'>
            <Header />

            <div className='grid grid-cols-12 row-span-4'>
                        <div className='col-start-2 col-span-5 flex flex-col items-center justify-center'>
                               
                                <div className='relative min-w-694  max-w-2xl  py-2'>
                                        <h1 className='text-5xl text-left whitespace-nowrap text-black-ikon font-bold'> Welcome to iKon Mall</h1>
                                        <img src='/header/Auth/sparkle.svg' className='sparkle absolute' />
                                </div>

                                <div className='min-w-694  max-w-2xl py-2'>
                                    <p className='text-sm text-slate-700 whitespace-pre-line' >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor nibh quam aenean feugiat habitasse suspendisse nunc. Porttitor et, nibh ultrices nunc.
                                    </p>
                                </div>

                                <div className='min-w-694 max-w-2xl  py-2'>
                                    <AuthInputField label={'Email'} icon={'/header/Auth/Email.svg'} type={'email'} />
                                    <AuthInputField label={'Password'} icon={'/header/Auth/Lock.svg'} type={'password'} />
                                    <PrimaryButton className={'w-full my-2 py-2'}>Continue</PrimaryButton>

                                    <div className='flex flex-row my-2'>
                                            <p className='text-slate-900 text-sm text-right min-w-full'>
                                                <Link href={'/auth/forgotpassword'}>Forgot Password?</Link>  
                                            </p>
                                    </div>



                                    <div className='min-w-694 max-w-2xl grid grid-cols-12 items-center justify-center py-2'>
                                            <img src='/header/Auth/line.svg' className='col-span-4' />
                                            <p className='sign-font col-span-4 text-sm text-center'>Or sign in with</p>
                                            <img src='/header/Auth/line.svg' className='col-span-4' />
                                    </div>

                                    <div className='min-w-694 max-w-2xl flex flex-row cursor-pointer items-center justify-center my-4 border-gray-300 border-2 rounded-xl py-2'>
                                                <img src='/header/Auth/google.svg' alt='google' />
                                                <p className='ml-4 text-black-ikon text-lg'>Sign in with Google</p>
                                    </div>



                                </div>
                        </div>

                        <div className='col-span-5 flex flex-row items-center relative justify-center'>
                                    <img src='/header/Auth/hero-1.png' className='rounded-xl hero-img absolute' alt=''/>
                                    <img src='/header/Auth/hero-2.png' className='rounded-xl hero-2 absolute' alt=''/>
                                    <img src='/header/Auth/hero-3.svg' className='rounded-xl absolute hero-3' alt=''/>

                        </div>
            </div>

            <div className='grid row-span-1 grid-cols-12'>
                    <div className='col-start-1 col-end-6 items-center justify-center grid grid-cols-12'>
                        <img src='/header/Auth/bottom-img.svg' className='col-start-2' />
                    </div>
                    
            </div>
    </div>
}