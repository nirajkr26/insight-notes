
import { SignedIn, UserButton } from '@clerk/clerk-react';
import { useClerk } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const { signOut } = useClerk()
    const navigate = useNavigate();

    function handleLogout() {
        signOut()
        navigate('/login')
    }

    return (
        <nav className="flex justify-between bg-gray-900 items-center h-16 z-30 top-0 sticky px-6">
            <div className="logo flex gap-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-brain-cog-icon lucide-brain-cog"><path d="m10.852 14.772-.383.923" /><path d="m10.852 9.228-.383-.923" /><path d="m13.148 14.772.382.924" /><path d="m13.531 8.305-.383.923" /><path d="m14.772 10.852.923-.383" /><path d="m14.772 13.148.923.383" /><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771" /><path d="M17.998 5.125a4 4 0 0 1 2.525 5.771" /><path d="M19.505 10.294a4 4 0 0 1-1.5 7.706" /><path d="M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516" /><path d="M4.5 10.291A4 4 0 0 0 6 18" /><path d="M6.002 5.125a3 3 0 0 0 .4 1.375" /><path d="m9.228 10.852-.923-.383" /><path d="m9.228 13.148-.923.383" /><circle cx="12" cy="12" r="3" /></svg>
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
                {/* <button aria-label="User profile"
                    className="font-medium rounded-full flex items-center justify-center hover:bg-gray-700 text-sm w-10 h-10 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-user h-5 w-5">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                </button> */}

                <SignedIn>
                    <UserButton />
                </SignedIn>
                <button onClick={handleLogout} aria-label="Logout"
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
