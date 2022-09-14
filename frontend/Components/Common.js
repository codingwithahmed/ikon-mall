import { useCallback, useState } from "react"

export const PrimaryButton = ({
    children,
    className
}) => {

    return <button className={`primary-button ${className}`}> 

        {children}

    </button>
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

    return <div className="flex flex-col w-full py-2">
        <label className="text-black-ikon font-semibold text-lg">{label}</label>
        <div className="bg-none flex flex-row outline-none border-gray-400 border-2 px-4 py-2 rounded-2xl w-full">
            <img src={icon} className={"w-5"} />
            <input type={ show ? 'text' : type} className={"ml-1 text-light-gray-ikon bg-none outline-none w-full"}/>
            {
                type == 'password' ? <img src={'/header/Auth/show.svg'} onClick={handleShow}  className={"w-5 cursor-pointer"} /> : '' 
            }
        </div>
    </div>
}