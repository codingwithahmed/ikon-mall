import {Header} from '../../Components/Header'
export default function Register () {


    return <div className='grid grid-rows-5'>
            <Header />

            <div className='grid grid-cols-12 row-span-4'>
                        <div className='col-start-2 col-span-5 flex flex-col items-center justify-center'>
                               
                                <div className='relative min-w-lg max-w-2xl py-2'>
                                        <h1 className='text-6xl text-left whitespace-nowrap text-black-ikon font-bold'> Welcome to iKon Mall</h1>
                                        <img src='/header/Auth/sparkle.svg' className='sparkle absolute' />
                                </div>

                                <div className='min-w-lg max-w-2xl py-2'>
                                    <p className='text-light-gray-ikon text-lg whitespace-pre-line' >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor nibh quam aenean feugiat habitasse suspendisse nunc. Porttitor et, nibh ultrices nunc.
                                    </p>
                                </div>
                        </div>

                        <div className='col-span-5'>

                        </div>
            </div>
    </div>
}