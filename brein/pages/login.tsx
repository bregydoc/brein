import React, { useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head";

import { styled } from "linaria/react";

import { motion } from "framer-motion";
import { useTheme } from "../general/theming";
import BREINLogo from "../components/BREINLogo";
import Text from "../components/Text";
import Input from "../components/Input";
import Button from "../components/Button";
import GithubButton from "../components/GithubButton";
import axios from "axios";

interface BackgroundProps {
    font: string;
    bgColor: string;
}

const Background = styled.div<BackgroundProps>`
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100%;
    width: 100%;
    height: 100vh;
    background-color: ${props => props.bgColor};
    font-family: ${props => props.font};
`;

const MainPage: NextPage = () => {
    const theme = useTheme();

    useEffect(() => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const code = params.get("code");
        const state = params.get("state");

        console.log(code, state);

        if (code !== "" && state !== "") {
            // start github sign in
            axios
                .get(`https://brauth.minsky.cc/login/github?code=${code}&state=${state}`)
                .then(r => console.log(r))
                .catch(err => console.log(err));
        }
    }, []);

    return (
        <>
            <Head>
                <title> BREIN TEST</title>
            </Head>

            <Background font={theme.fontFamilyNormal} bgColor={theme.backgroundColor}>
                <div
                    style={{
                        gridColumn: "1 / 2",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "flex-start"
                    }}
                >
                    <img style={{ height: "auto", width: "80%" }} src={"/images/leftpart.png"} />
                </div>
                <div style={{ gridColumn: "2 / 3", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                            flexFlow: "column",
                            alignItems: "center"
                        }}
                    >
                        <div style={{ marginBottom: "4rem" }}>
                            <BREINLogo />
                        </div>
                        <div style={{ marginTop: "2rem", marginBottom: "1rem" }}>
                            <Text type={"subtitle"} font={"mono"} size={"1rem"}>
                                Welcome to BRAIN control panel
                            </Text>
                        </div>
                        <div style={{ marginTop: "0.2rem", marginBottom: "1rem" }}>
                            <GithubButton onClick={() => open("https://brauth.minsky.cc/login/github")} />
                        </div>
                        <div style={{ fontFamily: theme.fontFamilyNormal, marginBottom: "1rem" }}>or</div>
                        <div style={{ width: "70%", marginBottom: "1.2rem" }}>
                            <Input label={"Username"} placeholder={"Your username or email"} type={"email"} />
                        </div>
                        <div style={{ width: "70%", marginBottom: "2rem" }}>
                            <Input label={"Password"} placeholder={"Shhh"} type={"password"} />
                        </div>

                        <Button>ENTER</Button>
                    </div>
                </div>

                <div
                    style={{
                        gridColumn: "3 / 4",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "flex-end"
                    }}
                >
                    <img style={{ height: "auto", width: "80%" }} src={"/images/rightpart.png"} />
                </div>
            </Background>
        </>
    );
};

export default MainPage;
