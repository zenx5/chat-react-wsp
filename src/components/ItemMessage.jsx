export default function ItemMessage({ start, message }) {

    return start ?
        <div className="flex justify-start">
            <div className="max-w-xs px-4 py-2  rounded-full bg-white dark:bg-blue-700 border border-blue-400 dark:border-blue-600 z-20">{message}</div>
        </div>:
        <div className="flex justify-end">
            <div className="max-w-xs px-4 py-2 rounded-full text-gray-700 bg-blue-200 dark:bg-blue-800 border border-blue-400">{message}</div>
        </div>


}