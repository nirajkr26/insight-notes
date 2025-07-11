function Navbar() {
    return (
        <nav className="flex justify-between bg-gray-900 items-center h-16 z-30 top-0 sticky px-6">
            <div className="logo flex gap-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-brain-circuit h-6 w-6 text-primary">
                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                    <path d="M9 13a4.5 4.5 0 0 0 3-4" />
                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                    <path d="M6 18a4 4 0 0 1-1.967-.516" />
                    <path d="M12 13h4" />
                    <path d="M12 18h6a2 2 0 0 1 2 2v1" />
                    <path d="M12 8h8" />
                    <path d="M16 8V5a2 2 0 0 1 2-2" />
                    <circle cx="16" cy="13" r=".5" />
                    <circle cx="18" cy="3" r=".5" />
                    <circle cx="20" cy="21" r=".5" />
                    <circle cx="20" cy="8" r=".5" />
                </svg>
                <p>Insight-Notes</p>
            </div>
            <div className="functions flex justify-evenly gap-2">
                <button aria-label="Toggle theme"
                    className="font-medium rounded-full flex items-center justify-center hover:bg-gray-700 text-sm w-10 h-10 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-sun h-5 w-5">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2" />
                        <path d="M12 20v2" />
                        <path d="m4.93 4.93 1.41 1.41" />
                        <path d="m17.66 17.66 1.41 1.41" />
                        <path d="M2 12h2" />
                        <path d="M20 12h2" />
                        <path d="m6.34 17.66-1.41 1.41" />
                        <path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                </button>
                <button aria-label="User profile"
                    className="font-medium rounded-full flex items-center justify-center hover:bg-gray-700 text-sm w-10 h-10 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-user h-5 w-5">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </button>
                <button aria-label="Logout"
                    className="font-medium rounded-full flex items-center justify-center hover:bg-gray-700 text-sm w-10 h-10 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-log-out h-5 w-5">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                </button>
            </div>
        </nav>
        
    );
}

export default Navbar;
