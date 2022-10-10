import Link from "next/link";
import { OutlinedPrimaryButton, PrimaryButton } from "../../../Components/Common";
import MenuCard from "../../../Components/MenuCard";
import { Page } from "../../../Components/Page";

export default function Index () {

    return <Page>

        <div className="flex flex-col mt-5">

        
            <section className="grid grid-cols-12 px-10 items-center">

                
                    <div className="col-span-12  rounded-3xl items-center" >
                        <img src="/profile/shop/profile.png" className="w-full"/>

                        <div className="flex flex-row items-center justify-between px-8">

                                <div className="flex flex-row items-center">
                                        <div className="rounded-full profile-box-shadow -translate-y-9 bg-white px-8 py-8">
                                                <img src="/common/cart.svg" className="w-[50.99px]" />
                                        </div>

                                        <div className="flex flex-row ml-8">
                                                <PrimaryButton>
                                                    Connect
                                                </PrimaryButton>

                                                <OutlinedPrimaryButton className={'ml-8 rounded-md main-purple'}>
                                                    Message
                                                </OutlinedPrimaryButton>
                                        </div>
                                </div>


                                <div className="flex flex-row items-center justify-around">
                                        <img src="/common/twitter.svg"  className="mx-2 cursor-pointer" />
                                        <img src="/common/facebook.svg" className="mx-2 cursor-pointer" />
                                        <img src="/common/youtube.svg"  className="ml-2 cursor-pointer" />

                                </div>

                        </div>



                        <div className="flex flex-row justify-between items-center w-full">
                            <h1 className="heading3 flex-1">İKon Shop</h1>

                            <div className="flex flex-row items-center">
                                <img src="/common/avtar.svg" />
                                <p className="button-text ml-4">1.1 M Connects</p>
                            </div>
                         </div>

                         <div className="flex flex-row items-center mt-2">

                            <div className="flex flex-row items-center justify-evenly">
                                <img src="/common/star.svg" className="mr-1 w-[20px]" />
                                <img src="/common/star.svg" className="mx-1 w-[20px]" />
                                <img src="/common/star.svg" className="mx-1 w-[20px]" />
                                <img src="/common/star.svg" className="mx-1 w-[20px]" />
                                <img src="/star2.png" className="mx-1 w-[20px]" />

                                <p className=" text-orange-400 ml-2 mt-1 button-text">
                                    4.9/5.0
                                </p>
                            </div>

                            

                         </div>


                         <div className="mt-2">
                            <p className="body-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam dignissim risus quisque sollicitudin sed mollis. Et blandit quis volutpat dui. Feugiat risus tellus pulvinar aliquam. Ultrices cursus id et, netus est et tristique cras pellentes Ornare malesuada ornare parturient nec. Diam dis adipiscing scelerisque quis. Posuere integer vestibulum, quis ut scelerisque nunc volutpat. Sed ipsum mattis leo curabitur.</p>
                         </div>


                         <div className="flex flex-row my-16 items-center">
                            
                             <p className="heading-nav mr-16 text-slate-300 ">
                                <Link href={'/profile/shop'}>All Products</Link>
                             </p>

                             <p className="heading-nav  underline text-slate-900">
                                   <Link href={'/profile/shop/arrival'}>New Arrivals</Link> 
                             </p>

                             <p className="heading-nav text-slate-300 mx-16 ">
                                <Link href={'/profile/shop/sale'}>On Sale</Link>
                             </p>

                             <p className="heading-nav text-slate-300">
                                   <Link href={'/profile/shop/review'}>Reviews</Link> 
                             </p>
                             
                        </div>


                        <div className="grid grid-cols-4 w-full gap-8 mt-4">
                            
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                            <MenuCard imgClass="180px" upperSection="36" bagIconLeft="86%" bagIconTop="272px" redCircle="70%" />
                        
                        </div>

                    </div>



            </section>
        
        
        </div>
    </Page>
}