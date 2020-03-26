import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        console.log("login out with brauth");
        const r = await axios.post("https://brauth.minsky.cc/login?logout=true");
        console.log(r.headers);
        for (let header in r.headers) {
            const val = r.headers[header];
            res.setHeader(header, val);
        }
    } catch (err) {
        console.log(err);
    }

    res.status(200).end();
};
