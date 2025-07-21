function NotesCard() {
    return (
        <>
            <Title/>
            <SearchBar />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </>
    )
}

function Title(){
    return(
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between ">
                <h2
                    className="text-2xl font-bold tracking-tight bg-gradient-to-r from-indigo-700 to-blue-700 bg-clip-text text-transparent">
                    Your Academic Notes</h2>
                <div className="flex gap-2">
                    <button
                        className="flex justify-center rounded-md text-sm font-bold items-center gap-1 border px-4 py-2 h-10 bg-blue-200 text-black cursor-pointer hover:bg-blue-400"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" className="lucide lucide-bot h-4 w-4">
                            <path d="M12 8V4H8"></path>
                            <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                            <path d="M2 14h2"></path>
                            <path d="M20 14h2"></path>
                            <path d="M15 13v2"></path>
                            <path d="M9 13v2"></path>
                        </svg>Ask AI</button>
                    <button
                        className="flex justify-center rounded-md text-sm font-bold items-center gap-1 border px-4 py-2 h-10 bg-blue-200 text-black cursor-pointer hover:bg-blue-400"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" className="lucide lucide-circle-plus h-4 w-4">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M8 12h8"></path>
                            <path d="M12 8v8"></path>
                        </svg>New Note</button>
                </div>
            </div>
    )
}

function SearchBar() {
    return (
        <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className="lucide lucide-search absolute left-2 top-2.5 h-4 w-4 text-muted-foreground">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
            </svg><input
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-8"
                placeholder="Search notes by title, content, or tags..." value="" />
        </div>
    )
}

function Card() {
    return (
        <div
            className="rounded-lg border border-gray-700 bg-[#222c39] shadow-sm cursor-pointer hover:shadow-md transition-all duration-200 hover:translate-y-[-2px] relative overflow-hidden group">
            <div
                className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <button
                    className="inline-flex hover:bg-gray-900 cursor-pointer items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" className="lucide lucide-pen h-4 w-4">
                        <path
                            d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z">
                        </path>
                    </svg><span className="sr-only">Edit</span></button><button
                        className="inline-flex cursor-pointer hover:bg-gray-900 items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm text-destructive hover:text-destructive"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="red" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" className="lucide lucide-trash h-4 w-4">
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    </svg><span className="sr-only">Delete</span></button>
            </div>
            <div className="flex flex-col space-y-1.5 p-6 pb-2">
                <h3 className="font-semibold tracking-tight text-lg truncate">Os</h3>
                <p className="text-sm  text-gray-400">about 22 hours ago</p>
            </div>
            <div className="p-6 pt-0">
                <p className="text-sm line-clamp-3 mb-3">Os full form is operating system. It is important part
                    of computer</p>
            </div>
            <div className="p-6 flex justify-between items-center pt-0">
                <div className="flex gap-2 flex-wrap">
                    <div
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 capitalize transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-900 text-white font-semibold hover:bg-primary/80 text-xs">
                        Important</div>
                </div>
                <p className="text-xs text-muted-foreground">12 words</p>
            </div>

        </div>
    )
}

export default NotesCard;