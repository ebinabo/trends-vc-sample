import Head from "next/head"
import Hero from "../components/Hero"
import Navigation from "../components/Navigation"
import Results from "../components/Results"
import Filter from "../components/Filter"
import Newsletter from "../components/Newsletter"
import Airtable from "airtable"

export default function Home({ data }) {
    return (
        <div className="bg-black">
            <Head>
                <title>Trends.vc • Reports</title>
            </Head>
            <Navigation />
            <Hero />
            <Filter />
            <Results records={data} />
            <Newsletter />
            <p className="text-center px-4 text-white pb-6">
                &copy; Copyright Trends.vc 2021, All rights reserved.
            </p>
        </div>
    )
}

export async function getStaticProps() {
    Airtable.configure({
        apiKey: process.env.AIRTABLE_API_KEY,
        endpointUrl: "https://api.airtable.com",
    })

    let base = Airtable.base(process.env.AIRTABLE_BASE_ID)

    let records = await base("👣 Learning Paths").select().firstPage()

    let data = records.map(record => ({ id: record.id, ...record.fields }))

    return {
        props: { data },
        revalidate: 1,
    }
}
