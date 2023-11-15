
export default function NavBarChat() {
  return <div className="bg-blue-500 dark:bg-blue-900 p-4 flex items-center space-x-4">
  <a href="/" className="text-white">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>

  </a>
  <div className="flex-1">
    <h1 className="text-white text-lg font-bold">Chat</h1>
  </div>
  <div className="space-x-2">
    <button size="icon" variant="ghost">
      <svg
        className=" h-4 w-4 text-white"
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
    </button>
  </div>
</div>
}

