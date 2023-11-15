import Search from "./Search"

export default function NavBar({ onClose }){

    return <div className="flex items-center justify-between p-4 bg-blue-500 dark:bg-blue-700">
        <h1 className="text-2xl font-bold text-white">ChatApp</h1>
        <div className="relative w-1/2">
        <svg
            className=" absolute left-2.5 top-2.5 h-4 w-4 text-white"
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
        <Search />
        </div>
        <button onClick={onClose}>
            <svg
                className=" h-6 w-6 text-white ml-4"
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
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" x2="9" y1="12" y2="12" />
            </svg>
        </button>
    </div>
}