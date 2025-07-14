import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function SignUp() {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="text-center mt-6">
                    <div className="flex justify-center mb-4">
                        <div className="rounded-full p-4 bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-circuit h-12 w-12 text-primary"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
                        </div>
                    </div>
                    <h2 className="text-3xl tracking-tight font-bold mb-2">Insight Notes</h2>
                    <p className="mb-8 text-gray-300">Take smarter notes with AI-powered insights and analysis.</p>
                </div>
                {/* <div className="rounded-lg border border-gray-700 bg-[#222c39] w-full max-w-md mx-auto ">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h3 className="font-semibold tracking-tight text-2xl text-center">Create Account</h3>
                        <p className="text-sm text-center text-gray-300">Sign up to start organizing your thoughts with AI</p>
                    </div>
                    <form>
                        <div className="p-6 pt-0 space-y-4 flex flex-col">
                            <div className="space-y-2 flex flex-col">
                                <label htmlFor="name" className="font-semibold tracking-tight px-3">Name</label>
                                <input type="text" name="name" id="name" placeholder="Enter your name" className="px-3 py-2 rounded-lg focus-visible:border-3 text-sm h-12 bg-gray-900 focus-visible:outline-none" required/>
                            </div>
                            <div className="space-y-2 flex flex-col">
                                <label htmlFor="email" className="font-semibold tracking-tight px-3">Email</label>
                                <input type="text" name="email" id="email" placeholder="Enter your email" className="px-3 py-2 rounded-lg focus-visible:border-3 text-sm h-12 bg-gray-900 focus-visible:outline-none" required/>
                            </div>
                            <div className="space-y-2 flex flex-col">
                                <label htmlFor="password" className="font-semibold tracking-tight px-3">Password</label>
                                <input type="password" name="password" id="password" placeholder="Enter your password" className="px-3 py-2 rounded-lg focus-visible:border-3 text-sm h-12 bg-gray-900 focus-visible:outline-none" required/>
                            </div>
                        </div>
                        <div className="items-center p-6 pt-0 flex flex-col space-y-4">
                            <button className="flex justify-center items-center bg-white text-black w-full py-2 rounded-lg font-bold tracking-tight cursor-pointer hover:bg-gray-200">Create Account</button>
                            <button className="flex justify-center items-cente text-gray-200 w-full py-2 rounded-lg font-bold tracking-tight cursor-pointer hover:bg-gray-900">Already have an account? Sign In</button>
                        </div>
                    </form>
                </div> */}
                <SignedOut>
                    <SignInButton signUpForceRedirectUrl={"/"} className="flex bg-white text-black px-4 py-2 rounded-lg font-bold text-2xl tracking-tight cursor-pointer hover:bg-gray-200"/>
                </SignedOut>
            </div>
        </>
    )
}

export default SignUp;