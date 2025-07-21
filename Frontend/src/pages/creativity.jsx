import Navbar  from "../components/navbar"
import Footer from "../components/footer";
import CreativityTitle from "../components/creativity-title";
import CategoryCards from "../components/category-cards";
import Writings from "../components/writings";



function Creativity() {
    return (
        <>
            <Navbar />
            <hr className="text-gray-700"/>
            <main className="flex-1 overflow-y-auto p-8">
                <CreativityTitle />
                <CategoryCards />
                <Writings/>
            </main>
            <Footer/>
        </>
    )
}

export default Creativity;