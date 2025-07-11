function SettingsCard() {
    return (
        <div className="space-y-6">
            <Title />
            <div className="rounded-lg border shadow-sm bg-[#222c39] border-gray-500">
                <div className="flex flex-col p-6 space-y-1.5">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">Preferences</h3>
                    <p className="text-sm text-[#b7bdc6]">Configure how the application works for you.</p>
                </div>
                <div className="p-6 pt-0 space-y-4">
                    <div className="w-full bg-gray-500 h-1"></div>
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5"><label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="ai-features">AI Features</label>
                            <p className="text-sm text-[#b7bdc6]">Enable AI-powered insights and analysis.</p>
                        </div>
                        <Buttons />
                    </div>
                    <div className="w-full bg-gray-700 h-1"></div>
                    <div className="flex  items-center justify-between">
                        <div className="space-y-0.5"><label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="ai-features">Dark Mode</label>
                            <p className="text-sm text-[#b7bdc6]">Enable dark mode for a better night-time experience.
                            </p>
                        </div>
                        <Buttons />
                    </div>
                    <div className="w-full bg-gray-700 h-1"></div>
                    <div className="flex  items-center justify-between">
                        <div className="space-y-0.5"><label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="ai-features">Notifications</label>
                            <p className="text-sm text-[#b7bdc6]">Receive notifications for new insights and reminders.
                            </p>
                        </div>
                        <Buttons />
                    </div>
                    <button
                        className="flex justify-center rounded-md text-sm font-bold items-center g border px-4 py-2 h-10 bg-white text-black cursor-pointer hover:bg-gray-300">Save
                        Changes</button>
                </div>
            </div>
            <div className="rounded-lg border shadow-sm bg-[#222c39] border-gray-500">
                <div className="flex flex-col p-6 space-y-1.5">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">Account</h3>
                    <p className="text-sm text-[#b7bdc6]">Manage your account and subscription details.</p>
                </div>
                <div className="p-6 pt-0 space-y-4">
                    <div className="w-full bg-gray-500 h-1"></div>
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5"><label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="ai-features">Current Plan</label>
                            <p className="text-sm text-[#b7bdc6]">Free Plan</p>
                        </div>

                    </div>

                    <div className="w-full bg-gray-700 h-1"></div>
                    <div className="flex  items-center justify-between">
                        <div className="space-y-0.5"><label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="ai-features">Storage Used</label>
                            <p className="text-sm text-[#b7bdc6]">100KB of 5MB Used
                            </p>
                        </div>

                    </div>
                    <div className="flex items-center justify-between">

                        <button
                            className="flex justify-center rounded-md text-sm font-bold items-center px-4 py-2 h-10 bg-gray-900 text-white cursor-pointer hover:bg-gray-700 hover:border hover:border-gray-900">Change Plan</button>
                        <button
                            className="flex justify-center rounded-md text-sm font-bold items-center px-4 py-2 h-10 bg-red-500 text-white cursor-pointer hover:bg-red-800">Delete Account</button>
                    </div>
                </div>
            </div>



        </div>
    )
}

function Buttons() {
    return (
        <div className="flex gap-2">
            <button className="cursor-pointer hover:opacity-75">✅</button>
            <button className="cursor-pointer hover:opacity-75">❌</button>
        </div>
    )
}

function Title() {
    return (
        <div>
            <h1 className="text-3xl font-bold tracking-normal">Settings</h1>
            <p>Manage your application preferences and account settings.</p>
        </div>
    )
}

export default SettingsCard;