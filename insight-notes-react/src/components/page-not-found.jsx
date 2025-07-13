import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/")
    }

    return (
        <>
        <div className="flex flex-col items-center justify-center space-y-6">

            <div className='text-8xl'>404</div>
            <div className='text-5xl'>Page Not Found</div>
            <button onClick={handleRedirect} className="bg-white text-black flex justify-center items-center p-4 rounded-lg font-bold tracking-tight cursor-pointer hover:bg-gray-200">Return to Home</button>
        </div>
        </>
    )

}