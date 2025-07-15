function Writings() {
    return (
        <>
            <Title />
            <NoWriting />
        </>
    )
}

function Title() {
    return (
        <div className="flex flex-col sm:flex-row md:flex-row pt-4 lg:flex-row items-center justify-between ">
            <h2 className="text-2xl font-bold tracking-tight text-white bg-clip-text ">
                All Writings</h2>
            <div className="flex gap-2">
                <button
                    className="flex justify-center rounded-md text-sm font-bold items-center gap-1 border px-4 py-2 h-10 bg-white text-black cursor-pointer hover:bg-gray-300"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" className="lucide lucide-message-circle h-5 w-5">
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    </svg></button>
                <button
                    className="flex justify-center rounded-md text-sm font-bold items-center gap-1 border px-4 py-2 h-10 bg-white text-black cursor-pointer hover:bg-gray-300"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" className="lucide lucide-plus mr-2 h-4 w-4">
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path>
                    </svg>New Writing</button>
            </div>
        </div>
    )
}

function NoWriting() {
    return (
        <div className="flex flex-col justify-center items-center text-center py-10 px-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-pen-tool h-12 w-12 mb-5"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
            <h2 className="text-2xl font-bold mt-6 mb-2">No writings yet</h2>
            <p className="text-muted-foreground mb-6">Start your creative journey by adding your first writing piece.</p>
            <button
                className="flex justify-center rounded-md text-sm font-bold items-center gap-1 border px-4 py-2 h-10 bg-white text-black cursor-pointer hover:bg-gray-300"><svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" className="lucide lucide-plus mr-2 h-4 w-4">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                </svg>Create Your First Writing</button>
        </div>
    )
}

export default Writings;