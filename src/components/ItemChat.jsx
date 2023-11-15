export default function ItemChat({href, name, message}) {

    return <li className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white hover:bg-blue-100 cursor-pointer group">
        <a href={href} className="flex items-center space-x-3">
            <div className="border border-gray-200 rounded-full p-1 bg-white text-gray-300 group-hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-600 dark:text-white group-hover:text-blue-600">{name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-300 truncate">{message}</p>
            </div>
            <div className="hidden group-hover:block text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
            </div>
        </a>
    </li>
}