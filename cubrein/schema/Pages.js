cube(`Pages`, {
    sql: `SELECT * FROM brein.\`Pages\``,

    joins: {},

    measures: {
        count: {
            type: `count`,
            drillMembers: [name]
        }
    },

    dimensions: {
        id: {
            sql: `index`,
            type: `number`,
            primaryKey: true
        },
        name: {
            sql: `clean_name`,
            type: `string`
        },

        brand: {
            sql: `brand`,
            type: `string`
        }
    }
});
