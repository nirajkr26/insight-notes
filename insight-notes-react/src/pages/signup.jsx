import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function SignUp() {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="text-center mt-6">
                    <div className="flex justify-center mb-4">
                        <div className="rounded-full p-4 bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-brain-cog-icon lucide-brain-cog"><path d="m10.852 14.772-.383.923" /><path d="m10.852 9.228-.383-.923" /><path d="m13.148 14.772.382.924" /><path d="m13.531 8.305-.383.923" /><path d="m14.772 10.852.923-.383" /><path d="m14.772 13.148.923.383" /><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771" /><path d="M17.998 5.125a4 4 0 0 1 2.525 5.771" /><path d="M19.505 10.294a4 4 0 0 1-1.5 7.706" /><path d="M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516" /><path d="M4.5 10.291A4 4 0 0 0 6 18" /><path d="M6.002 5.125a3 3 0 0 0 .4 1.375" /><path d="m9.228 10.852-.923-.383" /><path d="m9.228 13.148-.923.383" /><circle cx="12" cy="12" r="3" /></svg>
                        </div>
                    </div>
                    <h2 className="text-3xl tracking-tight font-bold mb-2">Insight Notes</h2>
                    <p className="mb-8 text-gray-300">Take smarter notes with AI-powered insights and analysis.</p>
                </div>
                <div className="rounded-lg border border-gray-700 bg-[#222c39] w-full max-w-md mx-auto ">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h3 className="font-semibold tracking-tight text-2xl text-center">Create Account</h3>
                        <p className="text-sm text-center text-gray-300">Sign up to start organizing your thoughts with AI</p>
                    </div>
                    <form>
                        <div className="p-6 pt-0 space-y-4 flex flex-col">
                            <div className="space-y-2 flex flex-col">
                                <label htmlFor="name" className="font-semibold tracking-tight px-3">Name</label>
                                <input type="text" name="name" id="name" placeholder="Enter your name" className="px-3 py-2 rounded-lg focus-visible:border-3 text-sm h-12 bg-gray-900 focus-visible:outline-none" required />
                            </div>
                            <div className="space-y-2 flex flex-col">
                                <label htmlFor="email" className="font-semibold tracking-tight px-3">Email</label>
                                <input type="text" name="email" id="email" placeholder="Enter your email" className="px-3 py-2 rounded-lg focus-visible:border-3 text-sm h-12 bg-gray-900 focus-visible:outline-none" required />
                            </div>
                            <div className="space-y-2 flex flex-col">
                                <label htmlFor="password" className="font-semibold tracking-tight px-3">Password</label>
                                <input type="password" name="password" id="password" placeholder="Enter your password" className="px-3 py-2 rounded-lg focus-visible:border-3 text-sm h-12 bg-gray-900 focus-visible:outline-none" required />
                            </div>
                        </div>
                        <div className="items-center p-6 pt-0 flex flex-col space-y-4">
                            <button className="flex justify-center items-center bg-white text-black w-full py-2 rounded-lg font-bold tracking-tight cursor-pointer hover:bg-gray-200">Create Account</button>
                            <SignedOut>
                                <SignInButton forceRedirectUrl={"/"} className="flex justify-center items-center gap-1 bg-white text-black w-full py-2 rounded-lg font-bold tracking-tight cursor-pointer hover:bg-gray-200" >
                                    <button >Sign In Using Google <p> <svg width="24" height="24" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg></p></button>
                                </SignInButton>
                            </SignedOut>
                            <button className="flex justify-center items-cente text-gray-200 w-full py-2 rounded-lg font-bold tracking-tight cursor-pointer hover:bg-gray-900">Already have an account? Sign In</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default SignUp;