function SignUp() {
    return (
        <>
            <div className="Container border flex flex-col  items-center h-screen space-y-8 max-w-md box-border pt-10">
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="rounded-full p-4 bg-gray-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-circuit h-12 w-12 text-primary"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg></div>
                    <h1 className="font-bold text-3xl ">Insight-Notes</h1>
                    <p className="text-gray-400">Take smarter notes with AI-powered insights and analysis.</p>
                </div>
                <div className="flex gap-2 w-auto flex-col justify-center items-center border border-gray-700  bg-gray-900 p-4 rounded-lg">
                    <h1 className="text-2xl font-semibold text-gray-200">Create Account</h1>
                    <p className="text-sm">Sign up to start organizing your thoughts with AI</p>
                    <div className=""></div>
                    <button className="bg-white text-black rounded-sm w-full text-lg p-1 font-bold flex justify-center items-center hover:bg-gray-200 cursor-pointer" >Create Account</button>
                    <button className="rounded-sm w-full text-sm py-2 font-medium flex justify-center items-center hover:bg-gray-800 cursor-pointer text-gray-200 ">Already have an account? Sign In</button>
                </div>
            </div>
        </>
    )
}

export default SignUp;