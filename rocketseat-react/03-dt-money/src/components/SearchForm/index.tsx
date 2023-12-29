export function SearchForm(){
    return (
        <div className="w-full max-w-[1120px] mb-0 mt-16 mx-auto px-6 py-0">
            <form className="flex gap-4">
                <input className="flex-1 border-none bg-gray-900 text-gray-300 p-4 placeholder:text-gray-500 rounded-md" type="text" placeholder="Buscar uma transação"/>
                <button className="flex items-center gap-3 p-4 bg-transparent border border-green-300 rounded-md hover:bg-green-500 hover:border-green-500 hover:text-white hover:transition-all hover:duration-500 cursor-pointer" type="button"><span>Buscar</span></button>
            </form>
        </div>
    )
}