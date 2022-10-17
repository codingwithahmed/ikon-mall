import { useState } from "react"

export const NotificationItem = ({
    object,
    action,
    event,
    time,
    img
}) => {

    const [checked,setChecked] = useState(false)

    return <div className="flex flex-row items-center cursor-pointer" onClick={() => setChecked(!checked)}>
        
        <img src='/profile/user/notification/c.svg' style={{ visibility :  checked ? "" : ' hidden' }} />

        <div className={ checked ?  "mx-4 w-full flex flex-row py-4 justify-between items-center bg-indigo-50" :  "mx-4 py-4 w-full flex flex-row justify-between items-center"}>
            <div className="flex flex-row">
                <img src={img}  /> 
                <div className="flex flex-row mx-4 items-center">
                    <p className="body-regular"><span className="button-text">{object}</span> {action} <span className="button-text">{event}</span> </p>
                </div>
            </div>

            <div className="flex flex-row items-center px-4">
                        
                        <p className="small-text-light mr-8">{time}</p>

                        <div className="bg-indigo-50 hover:bg-indigo-100 rounded-xl p-2 cursor-pointer ">
                            <img src="/Cart/Trash.svg"  />
                        </div>
            </div>  
    </div>
    
        
    </div> 
}

export const MessageItem = ({
    message,
    name,
    time,
    img
}) => {

    const [checked,setChecked] = useState(false)

    return <div className="flex flex-row items-center cursor-pointer" onClick={() => setChecked(!checked)}>
        <div className="flex flex-row items-center">
            <img src='/profile/user/notification/c.svg' style={{ visibility :  checked ? "" : ' hidden' }} />  
        </div>
        <div className={ checked ?  "mx-4 w-full flex flex-row py-4 justify-between items-center bg-indigo-50" :  "mx-4 py-4 w-full flex flex-row justify-between items-center"}>
            <div className="flex flex-row">
                <div className="flex flex-row items-center">
                    <img src={img}  /> 
                </div>
                <div className="flex flex-col mx-4 py-2 justify-between ">
                    <h6 className="heading6">{name}</h6>
                    <p className="body-regular">{ message.split(' ').length > 50 ? message.substring(0,50) + '...' : message} </p>
                </div>
            </div>

            <div className="flex flex-row items-center px-4">
                        
                        <p className="small-text-light mr-8">{time}</p>

                        <div className="bg-indigo-50 hover:bg-indigo-100 rounded-xl p-2 cursor-pointer ">
                            <img src="/Cart/Trash.svg"  />
                        </div>
            </div>  
    </div>
    
        
    </div> 
}