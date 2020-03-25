cube(`Venues`, {
    sql: `SELECT * FROM brein.\`Venues\``,

    joins: {},

    measures: {
        count: {
            type: `count`,
            drillMembers: [id, name]
        }
    },

    dimensions: {
        id: {
            sql: `index`,
            type: `number`,
            primaryKey: true
        },

        venueId: {
            sql: `id`,
            type: `number`
        },

        name: {
            sql: `name`,
            type: `string`
        },

        cluster: {
            sql: `cluster`,
            type: `number`
        }
    }
});
