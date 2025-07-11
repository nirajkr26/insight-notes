import Navbar  from "../components/navbar"
import Footer from "../components/footer";
import DashboardHero from "../components/dashboard-hero";
import NotesCard from "../components/notes-card";



function Dashboard() {
    return (
        <>
            <Navbar />
            <hr class="text-gray-700"/>
            <main className="flex-1 overflow-y-auto p-8">
                <div className="space-y-6">
                    <DashboardHero/>
                    <NotesCard/>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Dashboard;