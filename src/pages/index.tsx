import Hero from "../components/Hero"
import Navigation from "../components/Navigation"
import Results from "../components/Results"
import Filter from "../components/Filter"
import Newsletter from "../components/Newsletter"

export default function index() {
    return (
        <div className="bg-black">
            <Navigation />
            <Hero />
            <Filter />
            <Results />
            <Newsletter />
            <p className="text-center px-4 text-white pb-6">
                &copy; Copyright Trends.vc 2021, All rights reserved.
            </p>
        </div>
    )
}
