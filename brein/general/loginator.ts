import axios, { AxiosResponse } from "axios";
import { NextPageContext } from "next";

const performLoginRedirect = async (ctx: NextPageContext) => {
    let res: AxiosResponse;

    try {
        res = await axios.get(`http://127.0.0.1:3000/api/verify`, {
            headers: { cookie: ctx.req.headers.cookie }
        });
    } catch {
        if (ctx.res) {
            ctx.res.writeHead(302, {
                Location: "/login",
                "Content-Type": "text/html; charset=utf-8"
            });
            ctx.res.end();
            return {};
        }
    }

    const claims = res.data.claims;

    if (claims.role !== "admin" && claims.role !== "tester") {
        if (ctx.res) {
            ctx.res.writeHead(302, {
                Location: "/login",
                "Content-Type": "text/html; charset=utf-8"
            });
            ctx.res.end();
        }
        return {};
    }

    return { claims };
};

export default performLoginRedirect;
