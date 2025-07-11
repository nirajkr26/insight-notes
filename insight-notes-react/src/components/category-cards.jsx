function CategoryCards() {
    return (
        <div className="space-y-6">
            <Title />
            <Card />
        </div>
    )
}

function Title() {
    return (
        <div>
            <h2 className="text-2xl font-bold tracking-tight text-white bg-clip-text ">
                Categories</h2>
        </div>
    )
}

function Card() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-gray-700 cursor-pointer bg-[#222c39]">
                <div className="flex flex-col p-6 pb-2  space-y-2">
                    <div className="flex items-center space-x-2">
                        <div className="text-purple-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" className="lucide lucide-feather h-5 w-5">
                                <path
                                    d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z">
                                </path>
                                <path d="M16 8 2 22"></path>
                                <path d="M17.5 15H9"></path>
                            </svg>
                        </div>
                        <div className="font-semibold tracking-tight text-xl">Poetry</div>
                    </div>
                    <div className="pb-6 pt-0">
                        <p className="text-sm text-gray-300">Express yourself through worth and rhythm</p>
                    </div>
                </div>
            </div>

            <div className="rounded-lg border border-gray-700 cursor-pointer bg-[#222c39]">
                <div className="flex flex-col p-6 pb-2  space-y-2">
                    <div className="flex items-center space-x-2">
                        <div className="text-pink-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book h-5 w-5"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg>
                        </div>
                        <div className="font-semibold tracking-tight text-xl">Short Stories</div>
                    </div>
                    <div className="pb-6 pt-0">
                        <p className="text-sm text-gray-300">Craft concise narratives with impact</p>
                    </div>
                </div>
            </div>
            <div className="rounded-lg border border-gray-700 cursor-pointer bg-[#222c39]">
                <div className="flex flex-col p-6 pb-2  space-y-2">
                    <div className="flex items-center space-x-2">
                        <div className="text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-pen-line h-5 w-5"><path d="M12 20h9"></path><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"></path></svg>
                        </div>
                        <div className="font-semibold tracking-tight text-xl">Journal</div>
                    </div>
                    <div className="pb-6 pt-0">
                        <p className="text-sm text-gray-300">Document your thoughts and experiences</p>
                    </div>
                </div>
            </div>
            <div className="rounded-lg border border-gray-700 cursor-pointer bg-[#222c39]">
                <div className="flex flex-col p-6 pb-2  space-y-2">
                    <div className="flex items-center space-x-2">
                        <div className="text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart h-5 w-5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                        </div>
                        <div className="font-semibold tracking-tight text-xl">Novel</div>
                    </div>
                    <div className="pb-6 pt-0">
                        <p className="text-sm text-gray-300">Develop your longer works and narratives</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CategoryCards