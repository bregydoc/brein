import React from "react";
import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import performLoginRedirect from "../general/loginator";

const IndexPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>BREIN | Minsky</title>
            </Head>
            <div>
                <div>Hello World</div>
            </div>
        </>
    );
};

IndexPage.getInitialProps = async (ctx: NextPageContext) => {
    const claims = await performLoginRedirect(ctx);
    return { claims };
};
export default IndexPage;
