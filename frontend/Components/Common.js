import { useCallback, useState } from "react"
import Link from "next/link"


export const PrimaryButton = ({
    children,
    className
}) => {

    return <button className={`primary-button cursor-pointer ${className}`}> 

        {children}

    </button>
}

export const OutlinedPrimaryButton = ({
    children,
    className
}) => {

    return <button className={`outline-primary-button cursor-pointer ${className}`}> 

        {children}

    </button>
}

export const WhiteButton = ({
    children,
    className
}) => {

    return <button className={`white-button cursor-pointer ${className}`}> 

        {children}

    </button>
    
}


export const CartIcon = () => {

    return <Link href={'/Cart'}><div className='flex cursor-pointer flex-row  justify-between items-center'>
                <div className="relative flex flex-row  justify-between items-center">
                            <div className="ikon-primary-color_bg px-1 text-xs absolute ikon_cart_circle rounded-xl text-white">
                                    <p>2</p>
                            </div>
                        <img className='w-6 mr-2 ' src='/header/bag.svg' /> 
                </div>
                <p>My Cart</p> 
        </div></Link>
}


export const AuthInputField = ({
    label,
    icon,
    type
}) => {
    const [show,setShow] = useState(false)
    const handleShow = useCallback(() => {
            setShow(!show)
    },[show])

    return <div className="flex flex-col my-2 w-full py-2">
        <label className="text-slate-900 font-semibold text-lg">{label}</label>
        <div className="bg-none flex flex-row outline-none border-slate-400 px-6 py-3 rounded-2xl w-full" style={{borderWidth : "0.8px"}}>
            <img src={icon} className={"w-5"} />
            <input type={ show ? 'text' : type} className={"ml-1 text-slate-400 text-sm bg-none outline-none w-full"}/>
            {
                type == 'password' ? <img src={'/header/Auth/show.svg'} onClick={handleShow}  className={"w-5 cursor-pointer"} /> : '' 
            }
        </div>
    </div>
}

export const ContactInputField = ({
    label,
    icon,
    multiline
}) => {
    const [show,setShow] = useState(false)
    const handleShow = useCallback(() => {
            setShow(!show)
    },[show])

    return <div className="flex flex-col my-2 w-full py-2">
        <label className="input-heading">{label}</label>
        <div className="bg-none flex flex-row outline-none border-slate-400 px-6 py-3 rounded-2xl w-full" style={{borderWidth : "0.8px"}}>
            
            {
                multiline == true ? <textarea typeof="text" style={{
                    minHeight:'145px'
                }} className="ml-1 text-slate-400 text-sm bg-none outline-none w-full" /> : <input type='text'  className={"ml-1 text-slate-400 text-sm bg-none outline-none w-full"}/> 
            }


        </div>
    </div>
}

export const NewsLetterInputField = ({
    label,
    icon,
    type
}) => {
    const [show,setShow] = useState(false)
    const handleShow = useCallback(() => {
            setShow(!show)
    },[show])

    return <div className="flex flex-col w-full max-w-xl py-2">
        <label className="text-white font-semibold text-lg">{label}</label>
        <div className="bg-none flex flex-row outline-none border-white border-2 px-4 py-4 rounded-2xl w-full">
            <img src={icon} className={"w-5"} />
            <input type={ show ? 'text' : type} className={"ml-1 text-white bg-transparent outline-none w-full"}/>
            {
                type == 'password' ? <img src={'/header/Auth/show.svg'} onClick={handleShow}  className={"w-5 cursor-pointer"} /> : '' 
            }
        </div>
    </div>
}

export const BreadCrumbs = ({
    path
}) => {

    return <div className="grid grid-cols-12 min-h-full">
    <div className="col-start-1 cols-end-11 grid grid-cols-12 ">
       
        <div className="col-start-4 col-end-11 p-5 flex flex-row items-center" >
            <p className="small-text-light"><Link href={'/'}>{"Home"}</Link></p>
            
                {
                   path ? path.map((item,i) => <>
                 
                            <span className="text-medium mx-2">{">"}</span>
                            <p className={ path.length - 1 == i ? "small-text-light main-purple whitespace-nowrap " : "small-text-light whitespace-nowrap "}><Link href={item.src}>{item.label}</Link></p> 
                    </>) : ''
                }
    
            
        </div>
    </div>
</div>
} 




export const EmpytyState = ({
    img,
    heading,
    desc,
    children
}) => {

    return <div className="flex flex-col items-center p-28 relative">
        <div className="flex px-4 flex-col relative justify-center items-center">
            <img src={img} className='' />       
            <h1 className="emptysate-heading text-center max-w-[80%] mt-4">{heading}</h1>        
            <p className="body-regular my-4 text-center max-w-[80%]">{desc}</p>
            <div className="my-8">
                {children}
            </div>
            <img src='/header/Auth/sparkle.svg' style={{
                top:"-10%",
                right:"-8%"
            }} className=" absolute" />
        </div>

        <img src={'/index/circle.svg'} style={{
            zIndex:'-1',
            top:"6.5%"
        }} className='absolute'  />
    </div>
}


export const OrderSummaryItem = ({
    quntity,
    price,
    name
}) =>  {

    return <div className="flex flex-row my-4 justify-between items-center">
            <div className="flex flex-row">
                <p className="button-text main-purple mr-3">{quntity}x</p>
                <p className="body-regular">{name}</p>
            </div>

            <p className="button-text">${price}</p>
    </div>
} 



export const SlideSwitch = () => {

    return <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
    </label>
}




export const DashboardPasswordInputField = ({
    label,
    icon,
    type
}) => {
    const [show,setShow] = useState(false)
    const handleShow = useCallback(() => {
            setShow(!show)
    },[show])

    return <div className="flex flex-col w-full">
        <label className="text-slate-900 font-semibold text-lg">{label}</label>
        <div className="bg-none flex flex-row outline-none border-slate-400 px-6 py-3 rounded-2xl w-full" style={{borderWidth : "0.8px"}}>
            <img src={icon} className={"w-5"} />
            <input type={ show ? 'text' : type} className={"ml-1 text-slate-400 text-sm bg-transparent outline-none w-full"}/>
            {
                type == 'password' ? <img src={'/header/Auth/show.svg'} onClick={handleShow}  className={"w-5 cursor-pointer"} /> : '' 
            }
        </div>
    </div>
}