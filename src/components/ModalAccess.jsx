import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import UserInput from "./UserInput"

export default function ModalAccess({ onClick }) {
    const [open, setOpen] = useState(false)

    const [searchParams] = useSearchParams()

    useEffect(()=>{
        setOpen( searchParams.get('modal')==='login' )
    },[searchParams])

    return open && <div className="absolute z-40" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-white bg-opacity-50 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto bg-white border border-gray-200 shadow-lg shadow-gray-400 w-10/12 h-1/2 mx-auto my-auto px-5 rounded-lg">
            <span className="text-blue-500 flex flex-col gap-3 items-center justify-center h-full">
                <h1 className="font-bold text-2xl">¿Como te llamas?</h1>
                <UserInput onClick={onClick}/>
            </span>
        </div>
    </div>
}