cube(`Sales`, {
    sql: `SELECT * FROM brein.\`Sales\``,

    joins: {
        Venues: {
            sql: `${CUBE}.venue_id = ${Venues}.id`,
            relationship: `belongsTo`
        },

        Visits: {
            sql: `${CUBE}.venue_id = ${Visits}.venue_id`,
            relationship: `belongsTo`
        },

        SsTenants: {
            sql: `${CUBE}.ss_tenant_id = ${SsTenants}.ss_tenant_id`,
            relationship: `belongsTo`
        }
    },

    measures: {
        count: {
            type: `count`,
            drillMembers: [ssTenantName, date]
        },

        sumSales: {
            sql: `num_sales`,
            type: `sum`
        },

        sumTransactions: {
            sql: `num_transactions`,
            type: `sum`
        },

        avgSales: {
            sql: `num_sales`,
            type: `avg`
        },

        avgTransactions: {
            sql: `num_transactions`,
            type: `avg`
        }
    },

    dimensions: {
        id: {
            sql: `index`,
            type: `number`,
            primaryKey: true
        },

        ssTenantName: {
            sql: `ss_tenant_name`,
            type: `string`
        },

        date: {
            sql: `date`,
            type: `time`
        }
    }
});
