import Link from "next/link"
import { Children, useState } from "react"
import { OutlinedPrimaryButton, PrimaryButton } from "./Common"
import { Breaker } from "./Sidebar"

export const CartItemCard = ({
    products,
    shop
}) => {


    return <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-evenly items-center">

                <div className="flex-1">

                        <div className="flex flex-row my-4">
                            <div className="product-shop-avatar  px-4 py-4 rounded-full ">
                                 <img src={shop.img} className="w-[29.61px]" />
                            </div>

                        <div className="flex flex-row items-center">
                            <h3 className="heading6 mx-6 underline cursor-pointer">{shop.name}</h3>

                            <div className="flex flex-row items-center justify-evenly">
                                <img src="/common/star.svg" className="mr-1 w-[20px]" />
                                <img src="/common/star.svg" className="mx-1 w-[20px]" />
                                <img src="/common/star.svg" className="mx-1 w-[20px]" />
                                <img src="/common/star.svg" className="mx-1 w-[20px]" />
                                <img src="/star2.png" className="mx-1 w-[20px]" />

                            </div>
                        </div>
                    </div>
                </div>

                </div>


                <div>

                <div className="flex flex-row items-center my-2">
                            <div className="flex flex-row items-center mr-2">
                                <img src="/products/truxk.svg" />
                                <p className="badge-text mx-2">{shop.delivery} Delivery</p>
                            </div>  

                            <div className="flex flex-row items-center ml-2">
                                <img src="/products/box.svg" />
                                <p className="badge-text mx-2">{products.length}</p>
                            </div> 

                            <div className="flex flex-row items-center ml-2">
                                <img src="/common/calandar.svg" />
                                <p className="badge-text mx-2">07 May 2022</p>
                            </div> 
                        </div>

                </div>
        </div>

        <div className="w-full">
                


                    {
                        products ? products.map((item,i) => <Item 
                                                title={item.title} 
                                                key={i*Math.random()*19230}
                                                brand = {item.brand}
                                                propertyValue={item.propertyValue}
                                                price = {item.price}
                                                propertyName = {item.propertyName}
                                                />) : ''
                    }
        </div>
    </div>
}


const Item = ({
    img,
    title,
    brand,
    propertyValue,
    price,
    propertyName,
    key
}) => {


    return <div key={key}>

     <div className="flex flex-row w-full justify-between">
                <div className="flex-row flex items-center">
                    <img src="/Cart/placeholder/3.png" className="w-[124px] cart-item-img-box-shadow h-[124px]" />
                    <div className="flex flex-col ml-16 px-2">
                        <h1 className="heading-cart-item text-slate-900">{title}</h1>

                        <div className="flex flex-row  my-2">
                                                            <h3 className="button-text mr-16">Brand: </h3>
                                                            <p className="body-regular ">{brand}</p>
                                                </div>

                                                <div className="flex flex-row  my-2">
                                                            <h3 className="button-text mr-16">{propertyName}: </h3>
                                                            <p className="body-regular ">{propertyValue}</p>
                                                </div>


                                                <div className="flex-1 flex flex-row items-center">
                                        <p className="small-text-dark mr-4" style={{color:'#94A3B8'}}>Quantity</p>
                                        <button className="py-2 px-4 text-slate-400 rounded-xl bg-slate-100">
                                            -
                                        </button>

                                        <h6 className="heading6 mx-4">1</h6>

                                        <button className="py-2 text-white px-4 rounded-xl gradient-bg">
                                            +
                                        </button>
                                </div>
                    </div>
                </div>


                <div className="flex flex-col justify-between items-end">
                     <div>
                        <div className="bg-slate-100 hover:bg-slate-200 rounded-xl p-2 cursor-pointer ">
                            <img src="/Cart/Trash.svg"  />
                        </div>
                    </div>

                    <div>
                        <h5 className="heading5">${price}.00</h5>
                    </div>
                </div>


                
    </div>

    <Breaker />

    </div>
}




export const OtherMessage = ({
    message 
}) => {

    return <div className="flex my-2 flex-row w-full justify-end items-center">
    <div className="max-w-[35%] bg-slate-100 px-4 py-2" style={{
        borderRadius: "20px 20px 20px 1px"
    }}>
        <p className="text-slate-900">{message}</p>
    </div>
</div>

}


export const UserMessage = ({
    message
}) => {

    return <div className="flex my-2 flex-row w-full justify-end items-center">
    <div className="max-w-[65%] gradient px-4 py-2 rounded-lg">
        <p className="text-white">{message}</p>
    </div>
</div>
}


export const BlockItem = ({
    img, 
    name
}) => {

    const [blocked,setBlocked] = useState(true)

    return<div>

     <div className="flex my-4 flex-row justify-between items-center">
            <div className="flex flex-row items-center">
                <div className="flex flex-row items-center">
                    <img src={img} />
                </div>

                <h6 className="heading6 mx-4">{name}</h6>

            </div>

            <div className="flex flex-row items-center" onClick={() => setBlocked(!blocked)}>
                    {
                        blocked ? <PrimaryButton>Unblocked</PrimaryButton> : <OutlinedPrimaryButton className={'main-purple'}> UnBlock </OutlinedPrimaryButton>
                    }
            </div>

            </div>
            <Breaker />
        </div>
}







export const CardCartCheckbox = ({
    img,
    heading,
    desc,
    dashboard,
    modal,
    setModal,
    setModalOpen,
    modalOpen
}) => {

    const [checked,setChecked] = useState(false)

    return <div  className="flex my-4 col-span-1 w-full cursor-pointer flex-row" onClick={() => setChecked(!checked)}>
        <div className="flex flex-row justify-center items-center">
           <input type={'radio'} value={true} checked={checked}  />
        </div>
        <div 
        style={{ 
            border : checked ? "1.6px solid #3752D7" : '1.6px solid rgba(0,0,0,0)'
         }}
        className={ checked ? "px-4 w-full rounded-xl flex flex-row ml-2 mr-6 py-6 bg-indigo-50" : "px-4 w-full rounded-xl flex flex-row ml-2 mr-6 py-6 bg-slate-100"}>
                <div className="flex flex-row w-full">

                <div className="flex flex-row items-center ">
                    <img src={img ? img : '/common/location.svg'} className=" ml-4 mr-8" /> 
                </div>
                <div className="flex flex-col items-start ">
                        <h2 className="heading6">{heading}</h2>
                        <p className="small-text-dark">{desc}</p>
                </div>

                </div>

               {
                dashboard ? <div className="flex flex-row justify-end ">
                     <div className="grid grid-cols-2 items-center">
                        <img onClick={() => {
                            
                            setModalOpen(true)
                            setModal('Edit')
                        
                        }} src="/common/Create.svg" />
                        <img onClick={() => {
                            
                            setModalOpen(true)
                            setModal('trash')
                        
                        }} src="/Cart/Trash.svg"  />

                </div> </div>: "" 
               } 
        </div>
    
    </div>
}



export const MessageShopItem = ({
    img,
    heading,
    desc
}) => {

    const [checked,setChecked] = useState(false)

    return <div onClick={() => setChecked(!checked)} className="flex my-4 col-span-1 w-full cursor-pointer flex-row">
        <div className="flex flex-row justify-center items-center">
            <img src='/profile/user/notification/c.svg' style={{ visibility :  checked ? "" : ' hidden' }} /> 
        </div>
        <div className={ checked ? "px-4 w-full border-b-[1px] border-b-slate-300 flex flex-col ml-2 mr-6 py-6 bg-indigo-100" : "px-4 w-full border-b-[1px] border-b-slate-300 flex flex-col ml-2 mr-6 py-6"}>
                
                <div className="flex flex-row w-full" >
                
                <div className="flex flex-row items-center">
                    <img src={img ? img : '/common/location.svg'} className=" ml-4 mr-8" /> 
                </div>
                <div className="flex flex-col items-start justify-between pb-2">
                        <h2 className="heading6">{heading}</h2>
                        <p className="small-text-dark">{desc}</p>
                </div>
                <div className="flex flex-col items-start">
                        <p className="small-text-dark">1h ago</p>
                </div>

                </div>


                

        </div>
    
    </div>
}




export const Modal = ({
    setModalOpen,
    modalOpen,
    modal
}) => {

    const [step,setStep] = useState(1)

    return <section className="relative" style={{
        zIndex:"2"
    }}>
    <div className="top-0 right-0 bottom-0 left-0 fixed flex-row flex justify-center items-center  w-screen h-[100vh]" style={{
        background :"rgba(15,23,42,0.6)"
    }}>
                
               {
                    step == 1 ? <div className="min-w-[31.25vw] min-h-[32.2266vh] flex flex-row justify-center p-6 relative bg-white rounded-3xl">
                    <img src="/profile/user/5.png" className="w-[18.75vw] absolute" style={{
                        top:"-25%"
                    }} />

                    <img src="/group.png" className=" absolute" style={{
                        top:"-40%",
                        left:"74%"
                    }} />

                    <div className="mt-[25%]">
                        <div className="my-4">
                            <h1 className="heading1 text-center">{modal.heading}</h1>
                        </div>

                        <div className="my-4">
                            <p className="body-regular text-center">{modal.desc}</p>
                        </div>

                        <div className="flex w-full mt-8 flex-row justify-center items-center">
                            <PrimaryButton>
                                <p onClick={() => setStep(2)}>{modal.button}</p>
                            </PrimaryButton>
                        </div>


                        <div className="my-8" >
                            <p className="cursor-pointer button-text text-center main-purple" onClick={() => setModalOpen(!modalOpen)}>Cancel</p>
                        </div>
                    </div>
            </div> : step == 2 ? <div className="min-w-[31.25vw] px-16 min-h-[32.2266vh] flex flex-row justify-center p-6 relative bg-white rounded-3xl">
                    <div className="w-full">

                        <h4 className="heading4 text-center">
                            {modal.button}
                        </h4>

                        <div className="flex w-full flex-col my-16">
                            <div className="flex flex-row border-b-[1px] p-2 border-slate-300">
                                <CustomRadio className={'mr-4'} />
                                <p className="body-regular text-slate-900">Misleading or Scam</p>
                             </div>  

                             <div className="flex flex-row border-b-[1px] p-2 border-slate-300">
                             <CustomRadio className={'mr-4'} />
                                <p className="body-regular text-slate-900">Inappropriate</p>
                             </div> 

                             <div className="flex flex-row border-b-[1px] p-2 border-slate-300">
                             <CustomRadio className={'mr-4'} />
                                <p className="body-regular text-slate-900">Spam</p>
                             </div> 

                             <div className="flex flex-row border-b-[1px] p-2 border-slate-300">
                             <CustomRadio className={'mr-4'} />
                                <p className="body-regular text-slate-900">Offansive</p>
                             </div> 

                             <div className="flex flex-row border-b-[1px] p-2 border-slate-300">
                             <CustomRadio className={'mr-4'} />
                                <p className="body-regular text-slate-900">False Information</p>
                             </div>  
                        </div>   

                        <div className="flex w-[80%] mx-auto flex-row justify-between items-center">
                            <PrimaryButton className={'button-text'}>
                                <p onClick={() => setStep(3)}>{modal.button}</p>
                            </PrimaryButton>

                            <p className="button-text main-purple cursor-pointer" onClick={() => setModalOpen(false)}>Cancel</p>
                        </div>
                    </div>
            </div> : <div className="min-w-[31.25vw] px-16 min-h-[32.2266vh] flex flex-row justify-center p-6 relative bg-white rounded-3xl">
                    <div className="w-full flex flex-col items-center justify-center">
                            <div className="mt-16 mb-6 w-[200px] h-[200px] flex flex-row rounded-2xl bg-white items-center justify-center p-8" style={{boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"}}>
                                    <img className="w-[140px]" src="/profile/user/placeholder/1.svg" />
                            </div>

                            <div className="w-full text-center my-4">
                                <h4 className="heading4">İKon Mall is Blocked</h4> 
                            </div>

                            <div className="w-full my-8 flex flex-row justify-center items-center">
                                 <PrimaryButton>
                                    <p onClick={() => setModalOpen(!modalOpen)}>Back to Messages</p>
                                 </PrimaryButton>
                            </div>    
                    </div>
            </div>
               } 
                
                
    </div>
</section>
}



export const CustomRadio = ({
    className
}) => {
    const [checked,setChecked ] = useState(false)
    return <div className={"flex flex-row cursor-pointer items-center "+className } onClick={() => setChecked(!checked)}>
            <img src={checked ? '/common/rad-n.svg' : '/common/rad-o.svg'} />
    </div>
}




export const SidebarItem = ({
    img,
    text,
    active,
    address
}) => {

    return <Link href={`/profile/user/dashboard/${address}`}><div className="py-4 cursor-pointer flex flex-row border-b-[1px] border-slate-300">
            
            <div className="flex flex-row items-center">
                <img src={img} />
            </div>

            <div className="flex mx-4 flex-row items-center">
                <p className={active ? "sidebar-dashobord-item-text text-slate-900 underline" : "sidebar-dashobord-item-text hover:text-slate-900 transition-all hover:underline text-slate-400"}>{text}</p>
            </div>
    </div></Link>
}





export const DashboardModal = ({
    children
}) => {

    const [step,setStep] = useState(1)

    return <section className="relative" style={{
        zIndex:"2"
    }}>
    <div className="top-0 right-0 bottom-0 left-0 fixed flex-row flex justify-center items-center  w-screen h-[100vh]" style={{
        background :"rgba(15,23,42,0.6)"
    }}>
                
                <div className="min-w-[31.25vw] max-w-[55vw] min-h-[32.2266vh] flex flex-row justify-center p-6 relative bg-white rounded-3xl">
                        {children}
                </div> 
                
                
    </div>
</section>
}



export const OrderCardDashobard = () => {

    return <div className="flex flex-col border-b-[1px] border-b-slate-300 pb-4">

        <div className="flex flex-row justify-between ">

            <div className="flex mr-8 flex-col w-full">

                    {/*Shop with Rating Star */}
                    <div className="my-4 flex flex-row">

<div className="flex-1">

    <div className="flex flex-row my-4">
        <div className="product-shop-avatar  px-4 py-4 rounded-full ">
            <img src='/common/cart.svg' className="w-[29.61px]" />
        </div>

        <div className="flex flex-row items-center">
            <h3 className="heading6 mx-6">iKon Shop</h3>

            <div className="flex flex-row items-center justify-evenly">
    <img src="/common/star.svg" className="mr-1 w-[20px]" />
    <img src="/common/star.svg" className="mx-1 w-[20px]" />
    <img src="/common/star.svg" className="mx-1 w-[20px]" />
    <img src="/common/star.svg" className="mx-1 w-[20px]" />
    <img src="/star2.png" className="mx-1 w-[20px]" />

    </div>
        </div>
    </div>
</div>

                    </div>

                    <div className="flex flex-row justify-between items-end">
                        <div className="flex flex-row items-center">
                            <img src="/products/2.png" className="w-[80px] cursor-pointer" />
                            <img src="/products/2.png" className="w-[80px] cursor-pointer mx-4" />
                            <img src="/products/2.png" className="w-[80px] cursor-pointer   " />
                        </div>

                        <div className="flex flex-row  items-end">
                                <h5 className="order-dashboard-price">$294.00</h5>
                        </div>
                    
                    </div>
        </div>

        
        <div className="flex flex-col min-w-[200px] justify-between">
        <div className="flex flex-col my-2 py-5">
                            
                            <div className="flex flex-row items-center my-2">
                                <img src="/common/calandar.svg" />
                                <p className="badge-text mx-2">07 May 2022</p>
                            </div>  
                            <div className="flex flex-row items-center my-2">
                                <img src="/products/truxk.svg" />
                                <p className="badge-text mx-2">Pickup Delivery</p>
                            </div>  

                            <div className="flex flex-row items-center mt-2">
                                <img src="/products/box.svg" />
                                <p className="badge-text mx-2">3 Products</p>
                            </div> 
                        </div>

            <PrimaryButton><Link href={'/profile/user/dashboard/orders/213'}>Order Details</Link></PrimaryButton>
        </div>
        
        
        </div>


        

    </div>
}




export const OrderDetailCard = ({
    discount
}) => {

    return <div className="flex flex-row pb-6 my-2 border-b-[1px]   justify-between items-end  border-b-slate-300">
         <div className="flex flex-row">
                <img src="/products/2.png" className="w-[96px]" />

                <div className="flex flex-col mx-8">
                    <h4 className="heading-order-detail">2X  Bluetooth Speaker</h4>

                    <div className="flex flex-row my-2 justify-between">
                            <h6 className="text-[16px] font-medium">Brand:</h6>
                            <p className="text-[16px] font-normal text-slate-400">Ortizan</p>
                    </div>

                    <div className="flex flex-row justify-between">
                            <h6 className="text-[16px] font-medium">Model:</h6>
                            <p className="text-[16px] font-normal text-slate-400">X10</p>
                    </div>
                </div>
         </div>


         <div className="flex flex-row items-end">
                {
                    discount ? <p className="text-[20px] font-bold"> <span className="text-slate-300 font-normal line-through mr-2">$49.00</span> $1.294.00</p>: <p className="text-[20px] font-bold">$1.294.00</p>
         
                }    
         </div>
    </div>
} 



const Star = () => {
    const [hover,setHover] = useState(false)

    return <img onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="w-[48px] cursor-pointer" src={ hover ? '/common/star.svg' : "/Star.svg"} />

}

export const ReviewCardDashBoard = ({
    first,
    img,
    name
}) => {
    
    const [text,setText] = useState('')

    return <div className="flex my-8 flex-col pb-4">

            <div className="flex flex-row justify-between">
                <div className="flex flex-row">

                <div>
                    <img className="w-[96px]" src={img} />
                </div>

                <div className="mx-4 ">
                    <h4 className="text-[18px] font-semibold">{name}</h4>

                    <div className="max-w-[260px]">
                        <div className="grid my-2 grid-cols-5 gap-4">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />

                        </div>
                    </div>                    


            </div>

                </div>


                <div className="flex flex-row items-start my-2" style={{
                    display:first ? "flex" : "none"
                }}>
                                <img src="/common/calandar.svg" />
                                <p className="badge-text mx-2">07 May 2022</p>
                </div>


            </div>



            <div className="border-slate-300 flex flex-row border-2 p-4 rounded-xl my-4">
                    
                    <div className="flex flex-row items-start">
                            <img src="/common/Create.svg" />
                    </div>


                    <div className="px-2 w-full">
                            <textarea value={text} onChange={(e) => {
                                if (String(e.target.value).split('').length <= 300 ) {
                                    setText(e.target.value)
                                }
                            }} className="w-full outline-none border-none text-slate-300 min-h-[150px]" />
                    </div>


                    <div className="flex flex-row items-end">
                            <p className="text=[12px] text-slate-300 font-normal">{text.split('').length}/300</p>
                    </div>

            </div>


            <div className="flex flex-row items-center my-2">
                    <PrimaryButton>Save</PrimaryButton>

                    <p className="mx-6 text-[16px] main-purple font-semibold">Clear</p>
            </div>

    </div>
}

