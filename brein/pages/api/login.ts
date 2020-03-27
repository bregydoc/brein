import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default (req: NextApiRequest, res: NextApiResponse) => {
    console.log("login with brauth");
    if (req.body) {
        const username = req.body.username;
        const password = req.body.username;

        axios
            .post(
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
            )
            .then(r => {
                console.log(r.headers);
                for (let header in r.headers) {
                    const val = r.headers[header];
                    res.setHeader(header, val);
                }
                res.send(r.data);
                res.status(r.status).end();
            })
            .catch(err => {
                console.log(err);
            });
    }
};
