import React, { useState } from "react";
import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import performLoginRedirect from "../general/loginator";
import Layout, { UserInformation } from "../components/Layout";

interface IndexPageProps {
    claims: UserInformation;
}

const IndexPage: NextPage<IndexPageProps> = (props: IndexPageProps) => {
    const [selectedOption, setSelectedOption] = useState<number>(0);

    return (
        <>
            <Head>
                <title>BREIN | Minsky</title>
            </Head>
            <div>
                <Layout
                    title={"HOME"}
                    user={props.claims}
                    selected={selectedOption}
                    onSelect={(opt: number) => setSelectedOption(opt)}
                >
                    <div>content</div>
                </Layout>
            </div>
        </>
    );
};

IndexPage.getInitialProps = async (ctx: NextPageContext) => {
    const response = await performLoginRedirect(ctx);
    return { claims: response.claims } as IndexPageProps;
};

export default IndexPage;
