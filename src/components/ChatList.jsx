import { useEffect, useState } from "react";
import Conversation from "../services/models/Conversation";
import User from "../services/models/User";
import ItemChat from "./ItemChat";
import { useCookies } from "react-cookie";
import NavBar from "./NavBar";
import ButtonPlus from "./ButtonPlus";
import ModalNewChat from "./ModalNewChat";
import ModalAccess from "./ModalAccess";
import { useNavigate } from "react-router-dom";


export default function ChatList() {
    const [cookies, setCookie, removeCookie] = useCookies([process.env.REACT_APP_COOKIE_NAME_USER])
    const [user, setUser] = useState(null)
    const [conversations, setConversations] = useState([])
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        if( !user ) {
            const responseUser = cookies[process.env.REACT_APP_COOKIE_NAME_USER]
            if( responseUser ) {
                setUser( responseUser )
            }
            else {
                navigate('?modal=login')
            }
        }
    },[user, cookies, navigate])

    useEffect(()=>{
      if( user ) {
          Conversation.onChange( items => {
              setConversations(items)
          } )
      }
    },[user])

    const handlerNew = () => {
      if( open ) navigate('?')
      else navigate('?modal=new')
      setOpen( !open )
    }

    const handlerAccess = async userName => {
        const [ responseUser ] = await User.search('firstname', userName)
        if( responseUser ) {
          setCookie(
            process.env.REACT_APP_COOKIE_NAME_USER,
            JSON.stringify(responseUser)
          )
          setUser( responseUser )
        } else {
          const data = {
            email: `${user}@mail.com`,
            firstname: user,
            lastname: '',
            name: user,
            password: '123456'
          }
          const response = await User.post(data)
          setCookie(
            process.env.REACT_APP_COOKIE_NAME_USER,
            JSON.stringify({
              id:response.id,
              ...data
            })
          )
          setUser( {
            id:response.id,
            ...data
          } )
        }
        navigate('?')
    }


    return <div className="flex flex-col h-screen bg-white dark:bg-[#0d1418]">
        <NavBar onClose={()=>{
          removeCookie(process.env.REACT_APP_COOKIE_NAME_USER)
          window.location.reload()
        }}/>
        <ul className="overflow-y-auto divide-y-2 divide-gray-300">
            { conversations.filter( conversation => conversation.members.map( member => member.id ).includes(user.id) ).map( conversation => <ItemChat key={conversation.id} href={`/chat/${conversation.id}`} name={conversation.name[user.id]} message={conversation.lastMessage.content} /> ) }
        </ul>
        <ButtonPlus onClick={handlerNew} open={open}/>
        <ModalNewChat user={user}/>
        <ModalAccess onClick={handlerAccess}/>
    </div>
}