function DashboardHero() {
    return (
        <>
            <Title />
            <Card />
        </>
    )
}

function Title() {
    return (
        <div>
            <h1 className="text-3xl font-bold tracking-normal">Dashboard</h1>
            <p>Welcome to your personal academic knowledge hub.</p>
        </div>
    )
}

function Card() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-gray-700 bg-[#222c39]">
                <div className="flex justify-around items-center py-4">
                    <p>Total Notes</p>
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-full"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" className="lucide lucide-file-text w-4 h-4">
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                        <path d="M10 9H8"></path>
                        <path d="M16 13H8"></path>
                        <path d="M16 17H8"></path>
                    </svg></div>
                </div>
                <div className="p-6 pt-0 text-2xl font-bold flex items-center justify-around">
                    1
                </div>
            </div>
            <div className="rounded-lg border border-gray-700 bg-[#222c39]">
                <div className="flex justify-around items-center py-4">
                    <p>Words Written</p>
                    <div className="bg-purple-100 text-purple-600 p-2 rounded-full"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" className="lucide lucide-book-open w-4 h-4">
                        <path d="M12 7v14"></path>
                        <path
                            d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                        </path>
                    </svg></div>
                </div>
                <div className="p-6 pt-0 text-2xl font-bold flex items-center justify-around">
                    12
                </div>
            </div>
            <div className="rounded-lg border border-gray-700 bg-[#222c39]">
                <div className="flex justify-around items-center py-4">
                    <p>Study Topics</p>
                    <div className="bg-green-100 text-green-600 p-2 rounded-full"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" className="lucide lucide-brain w-4 h-4">
                        <path
                            d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z">
                        </path>
                        <path
                            d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z">
                        </path>
                        <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                        <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                        <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                        <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                        <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                        <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                    </svg></div>
                </div>
                <div className="p-6 pt-0 text-2xl font-bold flex items-center justify-around">
                    1
                </div>
            </div>
            <div className="rounded-lg border border-gray-700 bg-[#222c39]">
                <div className="flex justify-around items-center py-4">
                    <p>Last Activity</p>
                    <div className="bg-orange-100 text-orange-600 p-2 rounded-full"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" className="lucide lucide-clock w-4 h-4">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg></div>
                </div>
                <div className="p-6 pt-0 text-2xl font-bold flex items-center justify-around">
                    7/7/2025
                </div>
            </div>
        </div>
    )
}

export default DashboardHero;