import { NextApiRequest, NextApiResponse } from "next"
import Airtable from "airtable"

Airtable.configure({
    apiKey: process.env.AIRTABLE_API_KEY,
    endpointUrl: "https://api.airtable.com",
})

let base = Airtable.base(process.env.AIRTABLE_BASE_ID)

export default async (req: NextApiRequest, res: NextApiResponse) => {
    let records = await base("👣 Learning Paths").select().firstPage()

    let data = records.map(record => ({ id: record.id, ...record.fields }))

    res.send(data)
}
