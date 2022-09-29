import { ContactInputField, PrimaryButton } from "../Components/Common"
import { Footer } from "../Components/Footer"
import { HeaderIndexLogout as Header } from "../Components/Header"


const Contact = () => {

    return (
        <>
            <Header />

            <main className="my-4 grid grid-cols-12">
                    <section className="col-start-2 col-end-12 flex flex-row justify-between items-center my-4">
                            <div className="flex-1 min-h-full">
                                    <div className="mt-8 mb-8" >
                                            <h1 className="heading1">Contact</h1>
                                            <p className="body-regular">The main goal of iKon Mall is to become the community for businesses who want to build a brand that is supported by a platform that gives them the tools to create and scale at a higher conversion rate.  </p>
                                    </div>

                                    <div className="flex flex-row mt-16">
                                            
                                            <div className="gradient px-4 py-4 rounded-full">
                                                <img src="/contact/mail.svg" />
                                            </div>

                                            <div className="flex flex-col ml-2">
                                                    <p className="button-text">Say Hi!</p>
                                                    <p className="link-button">support@theikonmall.com</p>
                                            </div>
                                    </div>


                                    <div className="mt-16 relative">
                                                <h1 className="heading1">Why Choose Us?</h1>
                                                <img src='/header/Auth/sparkle.svg' className="absolute sparkle_contact"  />
                                                <p className="body-regular">
                                                        iKon Mall was built to help businesses market their brand to a wider audience at a faster pace and increase conversion rates by using our 3D Mall, 2D Storefronts, Social feature, and Delivery app. 
                                                            <br />
                                                            <br />
                                                        The iKon Mall delivery system was built so vendors can have full control of the customers delivery experience. We offer 3 delivery options self-delivery, label delivery, and drop-shipping.
                                                </p>
                                    </div>
                            </div>

                            <div className="flex-1 relative flex flex-row justify-center" >

                                    <div style={{
                                        backgroundImage:"url('/contact/circle.svg')",
                                        backgroundSize:"contain",
                                        backgroundPosition:"center center",
                                        backgroundRepeat:"no-repeat",
                                        maxWidth:"565px"

                                    }} className="h-full w-full p-8 flex flex-row justify-center items-center" >
                                        <div className="rounded-lg shadow_contact bg-white p-4 mt-8 mx-8" style={{
                                           maxWidth:"565px",
                                           minWidth:"100%",
                                           maxHeight:"719px"
                                        }}>
                                             <h4 className="heading4 text-center">Send a Message</h4>

                                             <ContactInputField label={'Name Surname'} />
                                             <ContactInputField label={'Email'} />
                                             <ContactInputField label={'Subject'} />
                                             <ContactInputField label={'Message'} multiline={true} />
                                            <div className="flex flex-row justify-center items-center">
                                                <PrimaryButton className={'px-4 py-2'}>Send Message</PrimaryButton>
                                            </div>
                                        </div>
                                    </div>

                            </div>
                    </section>
            </main>

            <Footer />
        </>
    )
}


export default Contact
