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

            <main className='min-h-screen'>
                    { children }
            </main>

            <Footer />
    </>
}