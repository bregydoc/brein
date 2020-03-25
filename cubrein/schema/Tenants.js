cube(`Tenants`, {
    sql: `SELECT * FROM brein.\`Tenants\``,

    joins: {
        Pages: {
            sql: `${CUBE}.brand = ${Pages}.brand`,
            relationship: `belongsTo`
        }
    },

    measures: {
        count: {
            type: `count`,
            drillMembers: [id]
        }
    },

    dimensions: {
        id: {
            sql: `index`,
            type: `number`,
            primaryKey: true
        },

        tenantId: {
            sql: `id`,
            type: `number`
        },

        brand: {
            sql: `brand`,
            type: `string`
        },

        category: {
            sql: `category`,
            type: `string`
        }
    }
});
