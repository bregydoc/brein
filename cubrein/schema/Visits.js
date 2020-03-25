cube(`Visits`, {
    sql: `SELECT * FROM brein.\`Visits\``,

    joins: {
        Venues: {
            sql: `${CUBE}.venue_id = ${Venues}.id`,
            relationship: `belongsTo`
        },
        Visitors: {
            sql: `${CUBE}.email = ${Visitors}.email`,
            relationship: `belongsTo`
        },
        Likes: {
            sql: `${CUBE}.email = ${Likes}.email`,
            relationship: `belongsTo`
        }
    },

    measures: {
        count: {
            type: `count`
            // drillMembers: [date]
        }
    },

    dimensions: {
        id: {
            sql: `index`,
            type: `number`,
            primaryKey: true
        },

        date: {
            sql: `date`,
            type: `time`
        },

        email: {
            sql: `email`,
            type: `string`
        }
    }
});
