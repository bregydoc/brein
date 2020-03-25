import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import { css } from "linaria";

import { motion } from "framer-motion";

const main = css`
    display: flex;
    margin: 8rem;
    background-color: greenyellow;
`;

const MainPage: NextPage = () => {
    return (
        <>
            <Head>
                <title> BREIN TEST</title>
            </Head>

            <div className={main}>
                <motion.div animate={{ scale: 2 }} transition={{ type: "spring", damping: 0, stiffness: 24.0 }}>
                    <div>HELLO</div>
                </motion.div>
            </div>
        </>
    );
};

export default MainPage;
