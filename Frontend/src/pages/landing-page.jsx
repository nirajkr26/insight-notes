import { useNavigate } from "react-router-dom"

export default function LandingPage() {
    return (
        <>
            <Navbar />
        </>
    )
}


function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between items-center w-full p-6 sticky h-16 top-0 z-30">
            <div className="logo flex gap-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-brain-cog-icon lucide-brain-cog"><path d="m10.852 14.772-.383.923" /><path d="m10.852 9.228-.383-.923" /><path d="m13.148 14.772.382.924" /><path d="m13.531 8.305-.383.923" /><path d="m14.772 10.852.923-.383" /><path d="m14.772 13.148.923.383" /><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771" /><path d="M17.998 5.125a4 4 0 0 1 2.525 5.771" /><path d="M19.505 10.294a4 4 0 0 1-1.5 7.706" /><path d="M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516" /><path d="M4.5 10.291A4 4 0 0 0 6 18" /><path d="M6.002 5.125a3 3 0 0 0 .4 1.375" /><path d="m9.228 10.852-.923-.383" /><path d="m9.228 13.148-.923.383" /><circle cx="12" cy="12" r="3" /></svg>
                <p>Insight-Notes</p>
            </div>
            <div className="flex justify-evenly w-1/2 items-center ">
                
                <a href="" className="cursor-pointer hover:bg-gray-700 duration-300 flex justify-center items-center  px-5 py-2 rounded-4xl tracking-normal">Features</a>
                <a href="" className="cursor-pointer hover:bg-gray-700 duration-300 flex justify-center items-center  px-5 py-2 rounded-4xl tracking-normal">Pricing</a>
                <a href="" className="cursor-pointer hover:bg-gray-700 duration-300 flex justify-center items-center  px-5 py-2 rounded-4xl tracking-normal">About</a>
                <button onClick={() => { navigate("/login") }} className="bg-white cursor-pointer text-black font-bold hover:text-xl hover:px-3 hover:py-1 duration-300 flex justify-center items-center  px-5 py-2 rounded-4xl tracking-normal">Get Started</button>
            </div>
        </div>
    )
}