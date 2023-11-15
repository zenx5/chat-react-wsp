import { useState } from "react"

export default function UserInput({ onClick }) {
    const [user, setUser] = useState("")

    return <div className="flex flex-row justify-between items-center px-4 rounded-md shadow-sm shadow-gray-400">
        <span>
            <svg
                className="h-4 w-4 text-gray-400"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
        </span>
        <input className="mx-2 tracking-wider text-gray-600 flex h-9 w-full bg-transparent px-3 py-1 text-sm transition-colors file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground outline-none ring-0 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Su usuario aquí..." type="" value={user} onChange={ev=>setUser(ev.target.value)}/>
        <button onClick={()=>onClick(user)}>
            <svg
                className="h-4 w-4 text-gray-400"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
        </button>
    </div>
}