import {
    HeaderIndexLogout as Header
} from './Header'


import {
    Footer
} from './Footer'
 
export const Page = ({
    children
}) => {
    return <>
            <Header /> 

            <main className=''>
                    { children }
            </main>

            <Footer />
    </>
}