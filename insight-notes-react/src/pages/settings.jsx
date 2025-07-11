import Navbar  from "../components/navbar"
import Footer from "../components/footer";
import SettingsCard from "../components/settings-card";

function Settings() {
    return (
        <>
            <Navbar />
            <hr className="text-gray-700"/>
            <main className="flex-1 overflow-y-auto p-8">
               <SettingsCard />
            </main>
            <Footer/>
        </>
    )
}

export default Settings;