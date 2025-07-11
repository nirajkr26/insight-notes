import Navbar from "../components/navbar"
import Footer from "../components/footer";
import NotesCardAllNotes from "../components/notes-card-all-notes";

function AllNotes() {
    return (
        <>
            <Navbar />
            <hr className="text-gray-700" />
            <main className="flex-1 overflow-y-auto p-8">
                <div className="space-y-6">
                    <NotesCardAllNotes />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default AllNotes;