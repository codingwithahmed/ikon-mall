

export const ReviewCard  = () => {

    return <div className="px-8 flex flex-col py-4 profile-box-shadow rounded-xl">
            <div className="flex flex-row items-center justify-end">
                    <p className="small-text-dark">Jul 07, 2021</p>
            </div>
            <div className="flex flex-row mb-2">
                <img src='/Review/avatar.png' />


                <div className="flex flex-col justify-center ml-4">
                        <p className="review-text ">Theresa Webb</p>

                        <div className="flex flex-row mt-1">
                                <img src="/common/star.svg" className="mx-0.5 w-3" />
                                <img src="/common/star.svg" className="mx-0.5 w-3" />
                                <img src="/common/star.svg" className="mx-0.5 w-3"/>
                                <img src="/common/star.svg" className="mx-0.5 w-3" />
                                <img src="/Star2.png" className="mx-0.5 w-3"/>

                        </div>
                </div>
            </div>

            <div className="my-2">
                <p className="body-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            </div>

            <div className="my-2 flex flex-row">

                    <img src='/Review/1.png' className="mr-1" />
                    <img src='/Review/2.png' className="mx-1" />
                    <img src='/Review/3.png' className="mx-1" />
                    <img src='/Review/4.png' className="mx-1" />

                    <p className="body-12-16 bg-slate-100 ml-1 text-slate-400 p-4 rounded-lg">+2</p>

            </div>
    </div>
}


export const ReviewProductCard = () => {

        return <div className=" flex flex-col py-4 rounded-xl">
<div className="flex flex-row justify-between">

             
      
        <div className="flex flex-row mb-2">
            <img src='/Review/avatar.png' />


            <div className="flex flex-col justify-center ml-4">
                    <p className="review-text ">Theresa Webb</p>

                    <div className="flex flex-row mt-1">
                            <img src="/common/star.svg" className="mx-0.5 w-3" />
                            <img src="/common/star.svg" className="mx-0.5 w-3" />
                            <img src="/common/star.svg" className="mx-0.5 w-3"/>
                            <img src="/common/star.svg" className="mx-0.5 w-3" />
                            <img src="/Star2.png" className="mx-0.5 w-3"/>

                    </div>
            </div>
        </div>
        <div className="flex flex-row justify-end">
                <p className="small-text-dark">Jul 07, 2021</p>
        </div>
        </div>

        <div className="my-2">
            <p className="body-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        </div>


</div>
} 