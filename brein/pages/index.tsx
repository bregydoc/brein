import React, { useState } from "react";
import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import performLoginRedirect from "../general/loginator";
import Layout, { UserInformation } from "../components/Layout";
import SalesChart from "../components/charts/Sales";
import TransactionsCharts from "../components/charts/Transactions";
import VisitsChart from "../components/charts/Visits";
import IngressChart from "../components/charts/Ingress";
import { insertParam } from "../general/utils";

interface IndexPageProps {
    claims: UserInformation;
    defaultView?: number;
}

const IndexPage: NextPage<IndexPageProps> = (props: IndexPageProps) => {
    const [selectedOption, setSelectedOption] = useState<number>(props.defaultView || 0);

    const views = {
        0: [<SalesChart />, <TransactionsCharts />],
        1: [<VisitsChart />],
        2: [<IngressChart />]
    };
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
                    onSelect={(opt: number) => {
                        setSelectedOption(opt);
                        insertParam("view", `${opt}`);
                    }}
                >
                    <div>{views[selectedOption]}</div>
                </Layout>
            </div>
        </>
    );
};

IndexPage.getInitialProps = async (ctx: NextPageContext) => {
    const response = await performLoginRedirect(ctx);

    const urlParams = new URLSearchParams(ctx.req.url.replace("/?", ""));
    const view = urlParams.get("view");
    return { claims: response.claims, defaultView: Number.parseInt(view) } as IndexPageProps;
};

export default IndexPage;
