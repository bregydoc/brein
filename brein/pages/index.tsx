import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import { css } from "linaria";

const main = css`
    background-color: greenyellow;
`;

const MainPage: NextPage = () => {
    return (
        <>
            <Head>
                <title> BREIN TEST</title>
            </Head>

            <div className={main}>HELLO</div>
        </>
    );
};

export default MainPage;
