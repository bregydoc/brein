cube(`Visitors`, {
    sql: `SELECT * FROM brein.\`Visitors\``,

    joins: {},

    measures: {
        count: {
            type: `count`,
            drillMembers: [dateOfBirth]
        }
    },

    dimensions: {
        id: {
            sql: `index`,
            type: `number`,
            primaryKey: true
        },

        email: {
            sql: `email`,
            type: `string`
        },

        gender: {
            sql: `gender`,
            type: `string`
        },

        dateOfBirth: {
            sql: `date_of_birth`,
            type: `time`
        },

        age: {
            sql: `YEAR(CURDATE()) - YEAR(${CUBE}.date_of_birth)`,
            type: `number`
        }
    },

    segments: {
        males: {
            sql: `${CUBE}.gender = 'M'`
        },

        females: {
            sql: `${CUBE}.gender = 'F'`
        }
    }
});
