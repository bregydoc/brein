import React from "react";
import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import performLoginRedirect from "../general/loginator";

interface HomePageProps {
    claims: any;
}
const HomePage: NextPage<HomePageProps> = props => {
    console.log(props.claims);
    return (
        <>
            <Head>
                <title>Homepage | BREIN</title>
            </Head>
            <div>
                Homepage
                <div></div>
            </div>
        </>
    );
};

HomePage.getInitialProps = async (ctx: NextPageContext) => {
    const claims = await performLoginRedirect(ctx);
    return { claims };
};

export default HomePage;
