cube(`Likes`, {
    sql: `SELECT * FROM brein.\`Likes\``,

    joins: {
        Pages: {
            sql: `${CUBE}.clean_name = ${Pages}.clean_name`,
            relationship: `belongsTo`
        }
    },

    measures: {
        count: {
            type: `count`,
            drillMembers: [cleanName]
        },

        emailDistincts: {
            type: `countDistinct`,
            sql: `email`
        }
    },

    dimensions: {
        id: {
            sql: `index`,
            type: `number`,
            primaryKey: true
        },

        cleanName: {
            sql: `clean_name`,
            type: `string`
        },

        email: {
            sql: `email`,
            type: `string`
        }
    }
});
