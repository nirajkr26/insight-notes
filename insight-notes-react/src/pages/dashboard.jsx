import Navbar  from "../components/navbar"
import Footer from "../components/footer";
import DashboardHero from "../components/dashboard-hero";
import NotesCard from "../components/notes-card";



function Dashboard() {
    return (
        <div className="text-white min-h-screen flex flex-col bg-gray-800 pb-20">
            <Navbar />
            <hr class="text-gray-700"/>
            <main className="flex-1 overflow-y-auto p-8">
                <div className="space-y-6">
                    <DashboardHero/>
                    <NotesCard/>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Dashboard;