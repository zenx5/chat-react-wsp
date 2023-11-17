
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useCookies } from "react-cookie";
import NavBarChat from "./NavBarChat";
import ItemMessage from "./ItemMessage";
import Conversation from "../services/models/Conversation";

export default function ChatContent() {
    const [cookies, setCookie, removeCookie] = useCookies([process.env.REACT_APP_COOKIE_NAME_USER])
    const [user, setUser] = useState(null)
    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if( !user ) {
            const responseUser = cookies[process.env.REACT_APP_COOKIE_NAME_USER]
            if( responseUser ) {
                setUser( responseUser )
            }
            else {
                navigate('/?modal=login')
            }
        }
    },[user, cookies, navigate])


    useEffect(()=>{
        if( id && user ) {
            Conversation.onChange( items => {
                setTitle( items?.name )
                setMessages(items.messages)
            }, id)
        }
    },[id,user])

    const handlerSend = () => {
        const newMessages = [
            ...messages,
            {
                content: message,
                sender: user.id
            }
        ]
        setMessages( prev => newMessages )
        Conversation.put(id, {
            messages: newMessages
        })
        setMessage(prev => "")
    }

    const handlerChangeTitle = (event) => {
        Conversation.put(id, {
            name: {
                ...title,
                [user.id]: event.target.value
            }
        })
    }

    return (
        <div className="flex flex-col h-screen w-full">
        <NavBarChat />
        <div className="flex-1 overflow-auto p-4 space-y-4">
            <div className="italic text-center border-b border-blue-200 pb-5 text-blue-300 font-medium">
                <input type="text" value={title[user?.id] ?? ""} onChange={handlerChangeTitle} className="bg-transparent px-2 focus:underline outline-none text-center"/>
            </div>
            { messages.map( (message, index) => <ItemMessage key={index} message={message.content} start={message.sender!==user.id} /> ) }
        </div>
        <div className="flex items-center gap-4 p-4 bg-blue-100 dark:bg-blue-900">
            <button size="icon" variant="ghost">
                <svg
                    className=" h-4 w-4"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            </button>
            <input className="flex-1 px-4 py-2 rounded-md bg-white dark:bg-blue-950" placeholder="Type a message" onChange={ev => setMessage(ev.target.value)} value={message}/>
            <button disabled={message.trim()===""} onClick={handlerSend} className="disabled:text-gray-400">
                <svg
                    className=" h-4 w-4"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                </svg>
            </button>
        </div>
        </div>
  )
}

