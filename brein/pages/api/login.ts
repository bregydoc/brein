import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("login with brauth");
    if (req.body) {
        const username = req.body.username;
        const password = req.body.username;

        try {
            const r = await axios.post(
                "https://brauth.minsky.cc/login",
                {
                    username: username,
                    password: password
                },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            console.log(r.headers);
            for (let header in r.headers) {
                const val = r.headers[header];
                res.setHeader(header, val);
            }
            res.send(r.data);
            res.status(r.status).end();
        } catch (err) {
            console.log(err);
        }
    }
};
