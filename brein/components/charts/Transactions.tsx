import React, { useState } from "react";
import cubejs from "@cubejs-client/core";
import { QueryRenderer } from "@cubejs-client/react";
import Text from "../Text";

//@ts-ignore
let biz;
if (process.browser) {
    biz = require("bizcharts");
}

const stackedChartData = resultSet => {
    const data = resultSet
        .pivot()
        .map(({ xValues, yValuesArray }) =>
            yValuesArray.map(([yValues, m]) => ({
                x: resultSet.axisValuesString(xValues, ", "),
                color: resultSet.axisValuesString(yValues, ", "),
                measure: m && Number.parseFloat(m)
            }))
        )
        .reduce((a, b) => a.concat(b), []);

    return data;
};

const lineRender = ({ resultSet }) => {
    return (
        <div>
            <div>
                <Text type="title" size={"1.4rem"}>
                    Total Transactions
                </Text>
                <div style={{ marginTop: "0.6rem", marginBottom: "1.4rem" }}>
                    <Text type="body" font={"mono"} size={"0.8rem"}>
                        Total transactions over time
                    </Text>
                </div>
            </div>

            {process.browser && (
                <biz.Chart scale={{ x: { tickCount: 8 } }} height={400} data={stackedChartData(resultSet)} forceFit>
                    <biz.Axis name="x" />
                    <biz.Axis name="measure" />
                    <biz.Tooltip crosshairs={{ type: "y" }} />
                    <biz.Geom type="line" position={`x*measure`} size={2} color="color" />
                    <biz.Legend name="genre" position="bottom" title={"null"} dx={20}></biz.Legend>
                </biz.Chart>
            )}
        </div>
    );
};

const API_URL = "https://cubrein.minsky.cc"; // change to your actual endpoint

const cubejsApi = cubejs(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1ODUyNDkzNjEsImV4cCI6MTU4NTMzNTc2MX0.Iq0btM_U371tt4KbWDlbk_zxsdaBbmD_wGerRlS1PyE",
    { apiUrl: API_URL + "/cubejs-api/v1" }
);

const renderChart = Component => ({ resultSet, error }) =>
    (resultSet && <Component resultSet={resultSet} />) || (error && error.toString()) || <div>loading</div>;

const TransactionsCharts = () => (
    <QueryRenderer
        query={{
            measures: ["Sales.sumTransactions"],
            timeDimensions: [
                {
                    dimension: "Sales.date",
                    granularity: "day"
                }
            ],
            filters: []
        }}
        cubejsApi={cubejsApi}
        render={renderChart(lineRender)}
    />
);

export default TransactionsCharts;
