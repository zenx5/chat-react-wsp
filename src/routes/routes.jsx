// import { Navigate } from "react-router-dom";
import ChatContent from "../components/ChatContent";
import ChatList from "../components/ChatList";

const routes = [
    {
        path: '/',
        element: <ChatList />
    },
    {
        path: '/chat/:id',
        element: <ChatContent />
    }
]

export default routes;