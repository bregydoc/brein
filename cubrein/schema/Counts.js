cube(`Counts`, {
    sql: `SELECT * FROM brein.\`Counts\``,

    joins: {
        Areas: {
            sql: `${CUBE}.area_id = ${Areas}.id`,
            relationship: `belongsTo`
        }
    },

    measures: {
        count: {
            type: `count`,
            drillMembers: [date, areaId]
        },
        sumIngress: {
            sql: `num_ingress`,
            type: `sum`
        },
        averageIngress: {
            sql: `num_ingress`,
            type: `avg`
        },
        sumTransit: {
            sql: `num_transit`,
            type: `sum`
        },
        averageTransit: {
            sql: `num_transit`,
            type: `avg`
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

        areaId: {
            sql: `area_id`,
            type: `string`
        }
    }
});
