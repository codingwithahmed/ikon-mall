import { AuthInputField, PrimaryButton } from '../../Components/Common'
import {HeaderRegister as Header} from '../../Components/Header'
export default function Register () {


    return <div className='grid grid-rows-6 min-h-screen'>
            <Header />

            <div className='grid grid-cols-12 row-span-4'>
                        <div className='col-start-2 col-span-5 flex flex-col items-center justify-center'>
                               
                                <div className='relative min-w-694  max-w-2xl  py-2'>
                                        <h1 className='text-6xl text-left whitespace-nowrap text-black-ikon font-bold'> Welcome to iKon Mall</h1>
                                        <img src='/header/Auth/sparkle.svg' className='sparkle absolute' />
                                </div>

                            

                                <div className='min-w-694 max-w-2xl my-2 py-2'>
                                    <AuthInputField label={'Email'} icon={'/header/Auth/Email.svg'} type={'email'} />
                                    <AuthInputField label={'Phone'} icon={'/header/Auth/Phone.svg'} type={'phone'} />
                                    <AuthInputField label={'Password'} icon={'/header/Auth/Lock.svg'} type={'password'} />
                                    <div className='flex flex-row my-2'>
                                            <input type={'checkbox'} />
                                            <label className='ml-3'>I accepted <strong>Terms & Privacy Policy</strong></label>
                                    </div>

                                    <div className='min-w-694 max-w-2xl grid grid-cols-12 items-center justify-center py-2'>
                                            <img src='/header/Auth/line.svg' className='col-span-4' />
                                            <p className='sign-font col-span-4 text-center'>Or sign up with</p>
                                            <img src='/header/Auth/line.svg' className='col-span-4' />

                                    </div>

                                    <div className='min-w-694 max-w-2xl flex flex-row cursor-pointer items-center justify-center my-4 border-gray-300 border-2 rounded-xl py-2'>
                                                <img src='/header/Auth/google.svg' alt='google' />
                                                <p className='ml-4 text-black-ikon text-lg'>Sign Up with Google</p>
                                    </div>

                                    <PrimaryButton className={'w-full my-2  py-2'}>Sign Up</PrimaryButton>
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