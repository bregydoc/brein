import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const token: string = req.cookies["jwt_token"];

    console.log("verifing token");
    const secret = process.env.JWT_SECRET || "";
    jwt.verify(token, secret, (err: any, decoded: any) => {
        if (err) {
            console.log(err);
            res.status(403).json({ cause: "cannot perform token verification" });
            return;
        }
        console.log(decoded);
        res.status(200).json({ claims: decoded });
    });
};
