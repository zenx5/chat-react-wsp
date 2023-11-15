export default function ButtonPlus({ open, onClick }){

    return <button className="fixed right-4 bottom-4 bg-blue-500 dark:bg-blue-700 text-white rounded-full p-2 z-30" onClick={onClick}>
        <svg
            className={ open ? "h-6 w-6 rotate-45 transition-all" : "h-6 w-6 rotate-0 transition-all"}
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    </button>
}