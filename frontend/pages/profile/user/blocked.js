import { Page } from "../../../Components/Page";
import {
    BlockItem
} from '../../../Components/Cards'

export default function BlockedShop () {

    return <Page>
            <section className="flex flex-col w-full relative px-16 items-center">
                        <h1 className="heading1 my-6">Blocked Shops</h1>


                        <img src='/arrow.png' style={{
                                    top:"65%",
                                    right:"5%"
                              }} className=" absolute" />

                        <img src='/cart/star.svg' style={{
                                    top:"30%",
                                    left:"5%"
                              }} className=" absolute" />


                        <div className="rounded-2xl w-[75%] p-6 box-shadow-blocked  bg-white">
                                <BlockItem img={'/profile/user/notification/8.png'} name={'Ride Online Shop'} />
                                <BlockItem img={'/profile/user/notification/9.png'}  name={'One Click Shopping'} />
                                <BlockItem img={'/profile/user/notification/10.png'}  name={'Click & Connect'} />
                                <BlockItem img={'/profile/user/notification/11.png'}  name={'Mobile Store'} />
                                <BlockItem img={'/profile/user/notification/12.png'}  name={'Best Market'} />
                                <BlockItem img={'/profile/user/notification/13.png'}  name={'Happy Shop'} />


                        </div>
            </section>
    </Page>
}