import React, { useEffect, useState } from "react";
import { NextPage, NextPageContext } from "next";
import Head from "next/head";

import { styled } from "linaria/react";

import { motion } from "framer-motion";
import { useTheme } from "../general/theming";
import BREINLogo from "../components/BREINLogo";
import Text from "../components/Text";
import Input from "../components/Input";
import Button from "../components/Button";
import GithubButton from "../components/GithubButton";
import axios, { AxiosResponse } from "axios";
import performLoginRedirect from "../general/loginator";
import { css } from "linaria";
import { deleteCookie } from "../general/utils";

interface BackgroundProps {
    font: string;
    bgColor: string;
}
const hiddenInMobile = css`
    display: flex;

    @media only screen and (max-width: 720px) {
        display: none;
    }
`;

const ResponsiveContainer = styled.div`
    width: 70%;
    margin-bottom: 1.2rem;
    @media only screen and (max-width: 720px) {
        width: 84%;
    }
`;

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

    @media only screen and (max-width: 900px) {
        grid-template-columns: 10% 80% 10%;
    }
`;

interface LoginPageProps {
    status: "authorized" | "not_approved" | "unauthorized";
    claims?: any;
}

const LoginPage: NextPage<LoginPageProps> = (props: LoginPageProps) => {
    const [loading, setLoading] = useState(false);
    const theme = useTheme();

    console.log(props.status);

    return (
        <>
            <Head>
                <title> BREIN TEST</title>
            </Head>

            <Background font={theme.fontFamilyNormal} bgColor={theme.backgroundColor}>
                <div
                    className={hiddenInMobile}
                    style={{
                        gridColumn: "1 / 2",

                        justifyContent: "flex-start",
                        alignItems: "flex-start"
                    }}
                >
                    <img style={{ height: "auto", width: "80%" }} src={"/images/leftpart.png"} />
                </div>
                <div style={{ gridColumn: "2 / 3", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {props.status === "not_approved" && (
                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                flexFlow: "column",
                                alignItems: "center"
                            }}
                        >
                            <div style={{ marginBottom: "2rem" }}>
                                <BREINLogo />
                            </div>
                            <Text type={"title"}> Sorry but your account is not approved to play this demo</Text>
                            <div
                                style={{ marginTop: "1.2rem", cursor: "pointer", padding: "0" }}
                                onClick={() => {
                                    deleteCookie("jwt_token");
                                    window.location.replace("/login");
                                }}
                            >
                                <Text type="body" font="mono" color={theme.primaryColor}>
                                    LOGOUT
                                </Text>
                            </div>
                        </div>
                    )}
                    {props.status === "unauthorized" && (
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
                                <GithubButton
                                    loading={loading}
                                    onClick={() => {
                                        setLoading(true);
                                        window.location.replace("https://brauth.minsky.cc/login/github");
                                    }}
                                />
                            </div>
                            <div style={{ fontFamily: theme.fontFamilyNormal, marginBottom: "1rem" }}>or</div>
                            <ResponsiveContainer>
                                <Input label={"Username"} placeholder={"Your username or email"} type={"email"} />
                            </ResponsiveContainer>
                            <ResponsiveContainer>
                                <Input label={"Password"} placeholder={"Shhh"} type={"password"} />
                            </ResponsiveContainer>

                            <Button>ENTER</Button>
                        </div>
                    )}
                    {props.status === "authorized" && (
                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                flexFlow: "column",
                                alignItems: "center"
                            }}
                        >
                            <div style={{ marginBottom: "2rem" }}>
                                <BREINLogo />
                            </div>
                            <Text type="title">You're already logged</Text>
                            <Button
                                onClick={() => {
                                    window.location.replace("/");
                                }}
                            >
                                GO TO HOME
                            </Button>
                            <div
                                style={{ marginTop: "1.2rem", cursor: "pointer", padding: "0" }}
                                onClick={() => {
                                    deleteCookie("jwt_token");
                                    window.location.replace("/");
                                }}
                            >
                                <Text type="body" font="mono" color={theme.primaryColor}>
                                    LOGOUT
                                </Text>
                            </div>
                        </div>
                    )}
                </div>

                <div
                    className={hiddenInMobile}
                    style={{
                        gridColumn: "3 / 4",

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

LoginPage.getInitialProps = async (ctx: NextPageContext) => {
    let res: AxiosResponse;

    try {
        res = await axios.get(`http://127.0.0.1:3000/api/verify`, {
            headers: { cookie: ctx.req.headers.cookie }
        });
    } catch {
        return { status: "unauthorized" } as LoginPageProps;
    }

    const claims = res.data.claims;

    if (claims.role !== "admin" && claims.role !== "tester") {
        return { status: "not_approved" } as LoginPageProps;
    }

    return { status: "authorized", claims } as LoginPageProps;
};

export default LoginPage;
