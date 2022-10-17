export const CartInputText = ({
    label
}) => {

    return <div className="flex flex-col col-span-1">
            <label className="input-heading" >{label}</label>
            <div className="w-full rounded-xl px-4 py-2 border-1 text-slate-300">
                <input className=" outline-none border-none bg-transparent" />
            </div>
    </div>
}